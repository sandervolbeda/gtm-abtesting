# Anti-Flicker (Alpha version - still testing)

This guide provides instructions on utilizing the anti-flicker snippet. This snippet enables the asynchronous loading of your GTM A/B testing scripts while concealing the page until the container is fully loaded. This ensures that users do not encounter the initial page content before it has been altered by an experiment.

"Flickering" in A/B testing refers to inconsistent exposure to test versions, which should be minimized for reliable results. Why it's crucial:

1. **Consistency:** A/B testing requires controlled, consistent comparisons. Flicker disrupts this by showing different versions to the same users, causing confusion and unreliable data.

2. **Biased Results:** Flicker introduces bias; users exposed inconsistently may behave differently, leading to misleading conclusions.

3. **Data Interpretation:** Analyzing results with flicker is challenging as differences may stem from exposure inconsistency rather than variations themselves.

## Anti-flicker script (alpha version)
This still needs some work. However the idea is that this script needs to be implement as high as possible within the ```head``` of the website. Most certainly before GTM.

The scripts checks if the splitter tag is fired (since this fires as one of the first things). If that isn't the case, load the page. If the splitter tag is fired, check if the experiment script is fired. If that's fired, load the page.

This script will decrease the load speed of the website in order to handle the anti-flicker effect. Currently in the process of testing it and finding the timing sweetspots.

*Add id="ab-splitter" to the splitter tag. Ad id="ab-experiment" to both the control and the variant script tag.* 

``` py linenums="1"
<script>
(function(a, s, y, n, c, h, i, d, e) {
  s.className += ' ' + y;
  h.start = 1 * new Date;
  h.end = i = function() {
    s.className = s.className.replace(RegExp(' ?' + y), '');
  };

  // Function to check if the script with ID 'ab-splitter' is loaded
  function isAbSplitterLoaded() {
    return !!document.getElementById('ab-splitter');
  }

  // Function to check if 'ab-experiment' is active using the script tag
  function isAbExperimentLoaded() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].id === 'ab-experiment') {
        return true;
      }
    }
    return false;
  }

  // Check for 'ab-splitter' script every 100 milliseconds
  var checkSplitterInterval = setInterval(function() {
    if (isAbSplitterLoaded()) {
      clearInterval(checkSplitterInterval); // Stop checking for 'ab-splitter'
      if (isAbExperimentLoaded()) {
        // Check for the script with the ID 'ab-experiment' every 100 milliseconds
        var checkExperimentInterval = setInterval(function() {
          if (isAbExperimentLoaded()) {
            clearInterval(checkExperimentInterval); // Stop checking for 'ab-experiment'
            i(); // Show the page
          }
        }, 100);
      } else {
        // If 'ab-experiment' is not loaded, show the page immediately
        i();
      }
    }
  }, 100);

  // Set a timeout to reveal the page after 1000 milliseconds (1 second) if 'ab-splitter' is not loaded
  setTimeout(function() {
    if (!isAbSplitterLoaded()) {
      i(); // Show the page
    }
  }, 1000);

  h.timeout = c;
})(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {});
</script>
```