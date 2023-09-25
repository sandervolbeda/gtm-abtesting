(function () {
    // Create a meta element
    var metaTag = document.createElement('meta');

    // Set the attributes for the meta element
    metaTag.setAttribute('name', 'google-site-verification');
    metaTag.setAttribute('content', '_IRB9D2-ldvb6stuu-YXM7dpraqRAY2eAnPcrwaA0nE');

    // Get the head element of your HTML document
    var head = document.head || document.getElementsByTagName('head')[0];

    // Append the meta element to the head
    head.appendChild(metaTag);
})();

(function () {
// Create the Google Tag Manager script element
var gtmScript = document.createElement('script');
gtmScript.type = 'text/javascript';
gtmScript.async = true;
gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-525ZBCP9';

// Append the script element to the <head> section of the document
document.head.appendChild(gtmScript);

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
