# Split Test
The configuration remains unchanged. However, for this specific scenario, the code presented below can be applied within 'Experiment 1 - Variant'. The provided code will facilitate user redirection to a new page. Moreover, it will retain the URL parameters, subsequently reapplying them after the redirection process if they exist.

> Important, do not forget to change the link!

``` py linenums="1"
<script>
(function() {
    'use strict';

    var queryParams = new URLSearchParams(window.location.search);
    var newUrl = 'https://sandervolbeda.com/';

    if (queryParams.toString()) {
        newUrl += '?' + queryParams.toString();
    }

    window.location.href = newUrl;
})();
</script>
```

## JavaScript explained

This JavaScript code performs the following steps:

1. The code is enclosed within an immediately invoked function expression (IIFE) to isolate its scope and ensure that it operates independently without interfering with other scripts.
2. ```use``` strict is set at the beginning to enforce stricter adherence to JavaScript's syntax and prevent certain errors.
3. The code utilizes the ```URLSearchParams``` object to extract and handle the parameters from the current URL's query string (the part of a URL after the '?' sign that contains key-value pairs).
4. A new URL, ```'https://sandervolbeda.com/'```, is created as the destination for redirection.
5. The script checks if there are any query parameters present in the current URL. If so, it appends them to the new URL to ensure the parameters are carried over to the redirected page.
6. Finally, the code changes the ```window.location.href``` to the newly constructed URL, effectively triggering a redirect to the new URL while retaining any query parameters from the original URL.

In summary, this script captures the query parameters from the current URL, constructs a new URL with these parameters, and then redirects the user to the new URL. This can be useful for scenarios where specific data needs to be maintained across a redirection process.

``` py linenums="1"
<script>
(function() {
    'use strict';

    // Get the current URL parameters
    var queryParams = new URLSearchParams(window.location.search);

    // Create the new URL with the current parameters
    var newUrl = 'https://sandervolbeda.com/';

    // Append the parameters if they exist
    if (queryParams.toString()) {
        newUrl += '?' + queryParams.toString();
    }

    // Redirect to the new URL
    window.location.href = newUrl;
})();
</script>
```