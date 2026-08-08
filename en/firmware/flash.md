---
title: Firmware Upload
lang: en
layout: category
classes: wide
sidebar:
    nav: firmware-en
---

Update your ftSwarm controller in three easy steps: 

1. Connect the controller using a USB cable. 
2. Select the version, device type, and firmware language.
3. "Upload Firmware" installs the selected firmware.

<style>
  /*
  box-shadow:0 1px 2px rgba(15,23,42,0.08); display:inline-flex; align-items:center; justify-content:center; }
  */
  #progress-wrap { width:100%; background:#eef2ff; border-radius:999px; height:14px; overflow:hidden; margin:10px 0; display:none; }
  #progress-bar { height:100%; width:0%; background:linear-gradient(90deg,#60a5fa,#2563eb); transition:width 0.2s ease; }
  #progress-text { width:100%; font-size:0.9rem; margin-top:6px; }
  details#status-details { font-size:0.8em; width:100%; margin-top:14px; border:1px solid #e6eef8; padding:10px; border-radius:10px; background:#fbfdff; }
  details#status-details[data-state="success"] { border-color:#bbf7d0; background:#ecfdf5; }
  details#status-details[data-state="error"] { border-color:#fecaca; background:#fff1f2; }
  #status-summary { font-weight:600; }
  #status-log { margin:0; font-size:0.8em; }

  .form-container {
    display: flex;
    flex-direction: column; /* Richtet die Zeilen von oben nach unten aus */
    gap: 15px;              /* Abstand zwischen den einzelnen Zeilen */
    width: max-content;     /* Der Container orientiert sich an der natürlichen Breite von Zeile 1 */
    max-width: 100%;        /* Verhindert das Herausragen auf kleinen Bildschirmen */
    align-items: stretch;   /* Zwingt alle Zeilen, exakt dieselbe Breite anzunehmen */
  }

  .row-inputs {
    display: flex;
    flex-direction: row !important;
    gap: 15px;              /* Abstand zwischen den einzelnen Label/Select-Blöcken */
  }

  .row-inputs label {
    width: max-content;
    display: flex;
    flex-direction: column;
    font-weight:600; 
    font-size:0.8em;
  }

  .row-inputs select {
    width: 100%;
    margin-top: 5px;
    min-width: 120px;
    padding: 5px;
    border-radius:8px; 
    border:1px solid #cbd5e1; 
    background:#fff; 
    color:#0f172a; 
    box-shadow:0 1px 2px rgba(15,23,42,0.08);
  }

  .row-button #btn-flash {
    width: 100%;            /* Nutzt die durch 'stretch' vorgegebene Gesamtbreite */
    padding: 10px;
    cursor: pointer;
    border-radius:8px; 
    border:1px solid #cbd5e1; 
    background:#fff; 
    color:#0f172a; 
    font-weight:600; 
    box-shadow:0 1px 2px rgba(15,23,42,0.08); 
  }

  #btn-flash:hover { background:#f8fafc; }
  #btn-flash:disabled { opacity:0.6; cursor:not-allowed; }

  .row-text p {
    margin: 0;              /* Entfernt Standard-Abstände des Browsers für perfektes Alignment */
    padding: 10px;
    border-radius: 4px;
  }

</style>

<div class="form-container">
  
  <div id="browser-alert" class="notice--danger" style="display: none;">
    <h4>⚠️ Browser nicht unterstützt</h4>
    <p>Die WebSerial-API wird von diesem Browser nicht unterstützt.<br>Bitte wechsle zu einem Chromium-basierten Desktop-Browser<br>wie Google Chrome oder Microsoft Edge.</p>
  </div>

  <div class="row-inputs">
    <label>Version<br><select id="firmware-version"></select></label>
    <label>Device<br><select id="firmware-device"></select></label>
    <label>Language<br><select id="firmware-lang"></select></label>
  </div>

  <div class="row-button">
    <button id="btn-flash" class="btn">Upload Firmware</button>
  </div>

  <div class="row-text">
    <p>Ausgewählte Firmware: <strong id="selected-firmware">Wird geladen...</strong></p>
  </div>

  <div id="progress-wrap">
    <div id="progress-bar"></div>
  </div>
  
  <div id="progress-text" aria-live="polite"></div>

  <details id="status-details" data-state="idle">
    <summary id="status-summary">Bereit</summary>
    <pre id="status-log" style="white-space: pre-wrap;">Wähle Firmware und klicke auf Flash.</pre>
  </details>

</div>

<script type="module">
  import { ESPLoader, Transport } from 'https://unpkg.com/esptool-js@0.5.0/bundle.js';
  window.ESPLoader = ESPLoader;
  window.Transport = Transport;
</script>

<script>
  let device = null;
  let transport = null;
  let esploader = null;

  const FIXED_BAUDRATE = 921600;
  const PARTITIONS_OFFSET = 0x8000;
  const FIRMWARE_OFFSET = 0x10000;

  const btnFlash = document.getElementById('btn-flash');
  const versionSelect = document.getElementById('firmware-version');
  const deviceSelect = document.getElementById('firmware-device');
  const langSelect = document.getElementById('firmware-lang');
  const selectedFirmwareName = document.getElementById('selected-firmware');
  const statusSummary = document.getElementById('status-summary');
  const statusLog = document.getElementById('status-log');
  const statusDetails = document.getElementById('status-details');
  const progressWrap = document.getElementById('progress-wrap');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const FIRMWARE_INDEX_URL = '/assets/firmware/index.json';

  // WebSerial-Kompatibilität prüfen
  if (!("serial" in navigator)) {
    document.getElementById('browser-alert').style.display = 'block';
    btnConnect.disabled = true;
    btnConnect.style.opacity = "0.4";
    btnConnect.style.cursor = "not-allowed";
  }

  function appendLog(line) { statusLog.textContent += '\n' + line; statusLog.scrollTop = statusLog.scrollHeight; }
  function setSummary(s) { statusSummary.textContent = s; }
  function clearLog(t) { statusLog.textContent = t || ''; }

  function setSuccess(msg) { statusDetails.setAttribute('data-state','success'); statusDetails.open = true; setSummary('Success'); appendLog(msg); try { progressWrap.style.display = 'none'; } catch(e) {} }
  function setError(msg) { statusDetails.setAttribute('data-state','error'); statusDetails.open = true; setSummary('Error'); appendLog(msg); try { progressWrap.style.display = 'none'; } catch(e) {} }

  function arrayBufferToBinaryString(buffer) {
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    let binary = '';
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
    }
    return binary;
  }

  function compareSemanticVersions(a, b) {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aVal = aParts[i] || 0;
      const bVal = bParts[i] || 0;
      if (aVal !== bVal) return aVal - bVal;
    }
    return 0;
  }

  function populateSelect(select, values, defaultValue) {
    select.innerHTML = '';
    values.forEach(value => {
      const o = document.createElement('option'); o.value = value; o.textContent = value; select.appendChild(o);
    });
    select.value = defaultValue;
  }

function getLanguage(availableLanguages) {
  const path = window.location.pathname.toLowerCase();

  if (path.includes('/de/') && availableLanguages.includes('de')) return 'de';
  if (path.includes('/en/') && availableLanguages.includes('en')) return 'en';

  const candidates = navigator.languages ? [...navigator.languages] : [navigator.language];
  for (const l of candidates) {
    const short = l.toLowerCase().split('-')[0];
    if (availableLanguages.includes(short)) return short;
  }
  return availableLanguages[0] || 'en';
}

  async function loadFirmwareMetadata() {
    try {
      const res = await fetch(FIRMWARE_INDEX_URL);
      if (!res.ok) throw new Error('Index nicht erreichbar');
      const idx = await res.json();
      const versions = [...new Set(idx.map(i => i.version))].sort(compareSemanticVersions).reverse();
      const devices = [...new Set(idx.flatMap(i => i.devices))];
      const langs = [...new Set(idx.flatMap(i => i.languages))].sort();
      populateSelect(versionSelect, versions, versions[0]);
      populateSelect(deviceSelect, devices, devices[0]);
      populateSelect(langSelect, langs, getLanguage(langs));
      updateSelectedFirmware();
      versionSelect.addEventListener('change', updateSelectedFirmware);
      deviceSelect.addEventListener('change', updateSelectedFirmware);
      langSelect.addEventListener('change', updateSelectedFirmware);
    } catch (e) { appendLog('Fehler beim Laden der Firmware-Liste: ' + e.message); }
  }

  function getSelectedBootloaderFileName() {
    return `${deviceSelect.value}-${langSelect.value}-${versionSelect.value}-bootloader.bin`;
  }

  function getSelectedPartitionsFileName() {
    return `${deviceSelect.value}-${langSelect.value}-${versionSelect.value}-partitions.bin`;
  }

  function getSelectedFirmwareFileName() {
    return `${deviceSelect.value}-${langSelect.value}-${versionSelect.value}-firmware.bin`;
  }

  function updateSelectedFirmware() { selectedFirmwareName.textContent = getSelectedFirmwareFileName(); }

  async function aggressivePortCleanup() {
    appendLog('Clean up port resources...');
    if (transport) { try { await transport.disconnect(); } catch(e) {} }
    if (device) {
      try {
        if (device.readable) { const r = device.readable.getReader(); await r.cancel(); r.releaseLock(); }
        if (device.writable) { const w = device.writable.getWriter(); await w.abort(); w.releaseLock(); }
        try { await device.close(); } catch(e) {}
        appendLog('COM-Port closes.');
      } catch(e) { appendLog('Error during clean up: ' + e.message); }
    }
    device = null; transport = null; esploader = null;
  }

  async function connectToBootloader() {
    transport = new Transport(device);
    esploader = new ESPLoader({ transport, baudrate: FIXED_BAUDRATE, terminal: { clean: () => {}, write: (d) => appendLog(String(d)), writeLine: (d) => appendLog(String(d)) } });
    await esploader.main();
    await esploader.runStub();
  }

  btnFlash.addEventListener('click', async () => {
    btnFlash.disabled = true;
    clearLog(''); setSummary('Test connection...'); appendLog('Request port selection...');

    try {
      device = await navigator.serial.requestPort({});
      await device.open({ baudRate: 115200 });
      appendLog('Port open (115200). Test in progress...');

      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      const writer = device.writable.getWriter();
      const reader = device.readable.getReader();
      await writer.write(encoder.encode('\r'));
      let buffer = '';
      const start = Date.now();
      while (Date.now() - start < 1500) {
        const r = await Promise.race([reader.read(), new Promise(resolve => setTimeout(() => resolve({ value: null }), 100))]);
        if (r && r.value) { buffer += decoder.decode(r.value, { stream: true }); if (buffer.includes('>')) break; }
      }
      reader.releaseLock(); writer.releaseLock();

      if (buffer.includes('>')) appendLog('Test successful: Prompt detected.'); else appendLog('Prompt not recognized. Try bootloader mode.');

      try {
        appendLog('Close the temporary test port to enable the bootloader connection...');
        try { await device.close(); appendLog('Port for the bootloader is closed.'); } catch(e) { appendLog('Error closing (may already be closed): ' + e.message); }
      } catch (e) {
        appendLog('Error closing the test port: ' + e.message);
      }

      setSummary('Bootloader'); appendLog('Connect using the bootloader...');
      await connectToBootloader();

      // Bootloader Offset dynamisch je nach Chip ermitteln
      const chipName = esploader.chip ? esploader.chip.CHIP_NAME : '';
      let bootloaderOffset = 0x0;
      if (chipName.includes('ESP32') && !chipName.includes('ESP32-S') && !chipName.includes('ESP32-C') && !chipName.includes('ESP32-H') && !chipName.includes('ESP32-P')) {
        bootloaderOffset = 0x1000; // ESP32 (Original)
      } else {
        bootloaderOffset = 0x0;    // ESP32-S3, ESP32-C3, etc.
      }
      appendLog(`Chip detected: ${chipName || 'unkown'} (Bootloader Offset: 0x${bootloaderOffset.toString(16)})`);

      setSummary('Flashing'); appendLog('Downloading the bootloader, partition table, and firmware from the server...');

      const bootFileName = getSelectedBootloaderFileName();
      const partFileName = getSelectedPartitionsFileName();
      const fwFileName = getSelectedFirmwareFileName();
      selectedFirmwareName.textContent = fwFileName;

      const bootUrl = `/assets/firmware/${bootFileName}`;
      const partUrl = `/assets/firmware/${partFileName}`;
      const fwUrl = `/assets/firmware/${fwFileName}`;

      const [bootResp, partResp, fwResp] = await Promise.all([
        fetch(bootUrl),
        fetch(partUrl),
        fetch(fwUrl)
      ]);

      if (!bootResp.ok) throw new Error(`Bootloader file not found: ${bootFileName}`);
      if (!partResp.ok) throw new Error(`Partition table file not found: ${partFileName}`);
      if (!fwResp.ok) throw new Error(`Firmware file not found: ${fwFileName}`);

      const bootAb = await bootResp.arrayBuffer();
      const partAb = await partResp.arrayBuffer();
      const fwAb = await fwResp.arrayBuffer();

      const bootBinStr = arrayBufferToBinaryString(bootAb);
      const partBinStr = arrayBufferToBinaryString(partAb);
      const fwBinStr = arrayBufferToBinaryString(fwAb);

      appendLog(`Start flashing (Bootloader @ 0x${bootloaderOffset.toString(16)}, Partition Table @ 0x${PARTITIONS_OFFSET.toString(16)} & Firmware @ 0x${FIRMWARE_OFFSET.toString(16)})...`);
      progressWrap.style.display = 'block'; 
      progressBar.style.width = '0%'; 
      progressText.textContent = '';

      await esploader.writeFlash({ 
        fileArray: [
          { data: bootBinStr, address: bootloaderOffset },
          { data: partBinStr, address: PARTITIONS_OFFSET },
          { data: fwBinStr, address: FIRMWARE_OFFSET }
        ], 
        flashSize: 'keep', 
        flashMode: 'keep', 
        flashFreq: 'keep', 
        compress: true, 
        reportProgress: (i, written, total) => { 
          const p = Math.floor((written / total) * 100); 
          progressBar.style.width = `${p}%`; 
          progressText.textContent = `Flashing: ${p}% (${written}/${total} bytes)`; 
          if (p % 10 === 0 || p === 100) appendLog(`Progress: ${p}% (${written}/${total})`); 
        } 
      });

      appendLog('Flash complete. Reboot...');
      await esploader.hardReset();
      setSuccess('Bootloader, partition table, and firmware successfully flashed. Device is restarting.');

    } catch (err) {
      const msg = (err && err.message) ? err.message : String(err);
      setError('Fehler: ' + msg);
      progressWrap.style.display = 'none';
    } finally {
      try { await aggressivePortCleanup(); } catch (e) { appendLog('Cleanup-Error: ' + e.message); }
      progressWrap.style.display = 'none';
      btnFlash.disabled = false;
    }
  });

  loadFirmwareMetadata();
</script>