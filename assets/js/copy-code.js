document.addEventListener('DOMContentLoaded', () => {
  // Findet nur Blöcke, die als cpp / c++ ausgezeichnet sind:
  // - .language-cpp / .language-c++ (Standard bei Rouge/Kramdown)
  // - .highlight.cpp (alternative Schreibweise)
  const cppSelector = [
    '.language-cpp',
    '.language-c\\+\\+',
    '.highlight.cpp',
    '.highlight.c\\+\\+'
  ].join(', ');

  const codeBlocks = document.querySelectorAll(cppSelector);

  // Inline-SVG (Copy-Icon)
  const copySvg = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

  // Hover-Text basierend auf der Browsersprache
  const userLang = navigator.language || navigator.userLanguage;
  const hoverText = userLang.startsWith('de') ? 'Code kopieren' : 'Copy Code';

  codeBlocks.forEach((block) => {
    // Falls das Selektor-Treffer-Element selbst das <code>/ <pre> ist, 
    // nehmen wir das übergeordnete .highlight-Element als Ziel
    const highlightBlock = block.closest('.highlight') || block;

    // Prüfen, ob für diesen Block nicht bereits ein Wrapper erstellt wurde
    if (highlightBlock.parentElement.classList.contains('code-block-wrapper')) {
      return;
    }

    // Wrapper erzeugen
    const container = document.createElement('div');
    container.className = 'code-block-wrapper';
    highlightBlock.parentNode.insertBefore(container, highlightBlock);
    container.appendChild(highlightBlock);

    // Button erstellen
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.type = 'button';
    copyButton.title = hoverText;
    copyButton.setAttribute('aria-label', hoverText);
    copyButton.innerHTML = copySvg;

    container.appendChild(copyButton);

    // Kopierfunktion
    copyButton.addEventListener('click', async () => {
      const code = highlightBlock.querySelector('code')?.innerText || highlightBlock.innerText;
      try {
        await navigator.clipboard.writeText(code);
      } catch (err) {
        console.error('Fehler beim Kopieren:', err);
      }
    });
  });
});