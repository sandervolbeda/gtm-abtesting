(function () {
    // Create the Google Tag Manager (noscript) iframe element
    var gtmNoscript = document.createElement('noscript');
    var gtmIframe = document.createElement('iframe');
    gtmIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-525ZBCP9';
    gtmIframe.height = '0';
    gtmIframe.width = '0';
    gtmIframe.style.display = 'none';
    gtmIframe.style.visibility = 'hidden';

    // Append the iframe element within the noscript element
    gtmNoscript.appendChild(gtmIframe);

    // Append the noscript element to the <body> section of the document
    document.body.appendChild(gtmNoscript);
})();
