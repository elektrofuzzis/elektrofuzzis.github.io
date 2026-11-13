---
title: The ftSwarm Project
Lang: de
layout: category
sidebar:
    nav: sitebar-de
---

<script>
    var languages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ""];
    var target = "/en/index.html";

    for (var i = 0; i < languages.length; i++) {
        var language = languages[i].toLowerCase();
        if (language === "de" || language.indexOf("de-") === 0) {
            target = "/de/index.html";
            break;
        }
        if (language === "en" || language.indexOf("en-") === 0) {
            break;
        }
    }

    location.replace(target);
</script>