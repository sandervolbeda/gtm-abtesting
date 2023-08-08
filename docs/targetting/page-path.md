# Page Path
A page path, often referred to as a URL path or simply a path, is a specific segment of a Uniform Resource Locator (URL) that identifies the location or address of a particular web page or resource on the internet. It comes after the domain name (or host) in a URL and provides information about the hierarchy or structure of the website's content.

In a typical URL format like ```https://sandervolbeda.com/page/subpage```, the page path is the portion after the domain (sandervolbeda.com). In this example, the page path is /page/subpage. Each segment of the path, separated by slashes (/), represents a specific directory or subdirectory within the website's structure.

## Single Page Select
Selecting a page path that matches a specific criterion.

1. Access the **Triggers** section found on the left-hand side.
2. Locate **'Experiment 1 – Initialisation'**.
3. Incorporate an **extra row** within **'Activate this trigger when an Event occurs and all conditions are true'**.
    * **Field 1:** Page Path
    * **Field 2:** equals
    * **Field 3:** /page-here/
4. **Save** the alterations.

> Please note that field 3 should be in lowercase.

Carry out this procedure similarly for the **remaining triggers** (Experiment 1 – Control and Experiment 1 – Variant).

Remember to preview the outcomes within GTM's preview mode prior to finalizing any publishing.