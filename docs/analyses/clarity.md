# Connecting with Microsoft Clarity

Microsoft Clarity offers a free and user-friendly tool to help website owners understand how their website visitors interact with their sites. This tool provides valuable insights through **visual heatmaps** and **session recordings**.

Collecting heatmaps for experiments can reveal new insights. This can be done easily using GTM (Google Tag Manager).

## Adding Custom Tags

To filter data effectively in Microsoft Clarity, custom tags need to be included in both the control and variant of the experiment.

The required code is: ```clarity("set", "key", "value");```

Here are the three values that need to be specified:

1. Set: Always set this as "Set" (no changes needed).
2. Key: Enter your Experiment ID.
3. Value: Indicate whether it's the Version, Control, or Variant.

For instance, when building an experiment using this guide, use this code:

For the control: ```clarity("set", "experiment-1", "control")```.
For the variant: ```clarity("set", "experiment-1", "variant")```.

Insert these lines of code into the JavaScript loaded for each variant. It's recommended to place this code as the last line in the experiment.

Control Example:

``` py linenums="1"
<script>
  (function () {
    // Insert the experiment code here
    console.log("Control loaded");
    
    // Add the custom tag
    clarity("set", "experiment-1", "control");
  })();
</script>
```

Variant Example:

``` py linenums="1"
<script>
  (function () {
    // Insert the experiment code here
    console.log("Variant loaded");
    
    // Add the custom tag
    clarity("set", "experiment-1", "variant");
  })();
</script>

```

When adding the tag to the code, it will automatically update in the project within 30 minutes to 2 hours. Multiple tags can be added to a project.

## How to filter the data

1. Open the [Microsoft Clarity project](https://clarity.microsoft.com/projects){:target="_blank"}.
2. Click on the blue filter button near the project name in the upper left corner.
3. Choose Customised filters from the left side-bar.
4. Select tag (equals the set key).
5. Select or type the value.
6. Apply filters.
7. Optionally: Adjust the date range to access more data.

## Wait for Microsoft Clarity to load

In some cases you want to fire the custom tag before Microsoft Clarity starts collecting data. This can be done by checking the status of Microsoft Clarity. It will first check if the Microsoft Clarity library is loaded, and then check if it's ready to collect data.

Here's an example of how to wait for Microsoft Clarity to load:

``` py linenums="1"
<script>
  function waitForClarity(callback) {
    // Check if clarity() is defined
    if (typeof clarity === 'function') {
      callback();
    } else {
      // Wait 50ms, then check again
      setTimeout(function() {
        waitForClarity(callback);
      }, 50);
    }
  }

  // Call our wait function, and when ready, run our code
  waitForClarity(function() {
    console.log("Variant loaded");
    clarity("set", "experiment-1", "variant");
  });
</script>
```

