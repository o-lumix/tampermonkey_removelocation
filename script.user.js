// ==UserScript==
// @name         Loc Google
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Retire les informations de localisation et de ville sur Google
// @author       Lumix
// @match        *://www.google.com/*
// @match        *://www.google.fr/*
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/516435/Loc%20Google.user.js
// @updateURL https://update.greasyfork.org/scripts/516435/Loc%20Google.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function removeLocationInfo() {
        const locationInfo = document.querySelector('#footer .A6mth');
        const ipInfo = document.querySelector('div[role="contentinfo"] span'); 

        if (locationInfo) {
            locationInfo.remove();
        }

        if (ipInfo) {
            ipInfo.remove();
        }

        const resultForElements = document.querySelectorAll('span.gm7Ysb');

        resultForElements.forEach(element => {
            const parent = element.closest('div'); 
            if (parent) {
                parent.remove();
            }
        });
    }

    removeLocationInfo();

    const observer = new MutationObserver(removeLocationInfo);
    observer.observe(document.body, { childList: true, subtree: true });
})();
