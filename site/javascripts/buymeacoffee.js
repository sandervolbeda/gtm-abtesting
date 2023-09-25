// Create a script element
var scriptElement = document.createElement("script");

// Set attributes for the script
scriptElement.setAttribute("data-name", "BMC-Widget");
scriptElement.setAttribute("data-cfasync", "false");
scriptElement.setAttribute("src", "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js");
scriptElement.setAttribute("data-id", "sandervolbeda");
scriptElement.setAttribute("data-description", "Support me on Buy me a coffee!");
scriptElement.setAttribute("data-message", "Support this documentation");
scriptElement.setAttribute("data-color", "#FF813F");
scriptElement.setAttribute("data-position", "Right");
scriptElement.setAttribute("data-x_margin", "18");
scriptElement.setAttribute("data-y_margin", "18");

// Append the script to the document's body
document.body.appendChild(scriptElement);