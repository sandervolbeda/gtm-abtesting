(function () {
    // Create a script element for the Buy Me a Coffee widget
    var bmcsScript = document.createElement('script');

    // Set the attributes for the script
    bmcsScript.setAttribute('data-name', 'BMC-Widget');
    bmcsScript.setAttribute('data-cfasync', 'false');
    bmcsScript.setAttribute('src', 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js');
    bmcsScript.setAttribute('data-id', 'sandervolbeda');
    bmcsScript.setAttribute('data-description', 'Support me on Buy me a coffee!');
    bmcsScript.setAttribute('data-message', 'Support this documentation');
    bmcsScript.setAttribute('data-color', '#FF813F');
    bmcsScript.setAttribute('data-position', 'Right');
    bmcsScript.setAttribute('data-x_margin', '18');
    bmcsScript.setAttribute('data-y_margin', '18');

    // Get the footer element of your HTML document
    var footer = document.querySelector('footer');

    // Append the Buy Me a Coffee script element to the footer
    footer.appendChild(bmcsScript);
})();
