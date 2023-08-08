# Debug

Before publishing the setup or starting a new experiment, it is always important to **verify that it is working properly**. Otherwise, you cannot trust the results of the experiment or the data that is collected.

---

## GTM experiments

To verify that the experiment is working properly, we need to preview the changes on the website via Google Tag Manager.

1. Open the Preview mode in Google Tag Manager.

    [ADD IMAGE HERE]

2. Navigate to the second step of the preview. The **Experiment 1 – Splitter** tag should be fired.

    [ADD IMAGE HERE]

3. Move to the **Variables** tab and check if a **Slot** has been set with the **Version** (bottom row)

    [ADD IMAGE HERE]

4. Navigate to step 3 in the left sidebar and verify whether **Experiment 1** has been triggered. Depending on your version, the **Control** should be fired if your slot falls between 0 and 4, while the **Variant** should be fired if the slot value ranges from 5 to 9.

    [ADD IMAGE HERE]

    > If everything seems to work, console log can be checked to see which Script has been fired.

5. Open the website (still in preview mode of GTM), right-click and select **Inspect**. Now open the **Console** tab and check if there’s anywhere ```Control loaded``` or ```Variant loaded``` in the content.

    [ADD IMAGE HERE]

Leave the GTM preview mode open before heading to the next step.

---

## GA4 events

To use the Debugger view in Google Analytics 4, you will need to add the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna){:target="_blank"} extension to your browser. This functionality applies to every website present in your Google Analytics account.

1. Activate the extension on the **preview page** of Google Tag Manager.
2. Go to **Admin > Account > Property** in your Google Analytics 4 account.
3. Check for **DebugView** (the last item in the first list).
4. Select your device from the dropdown. **This may be difficult, but please try**.
5. Check if the **Version** is shown in the debug list.

If the tag is configured correctly, there should be an orange user property with the version just below the page view event.

[ADD IMAGE HERE]

> Remember, as mentioned earlier, it can take up to 48 hours for data to be 