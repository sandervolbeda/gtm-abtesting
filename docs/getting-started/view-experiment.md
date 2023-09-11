# View Experiment (Live Site)

After your experiment gets published, it's always a good idea to verify if it's performing as expected. Rather than repeatedly opening incognito browsers, let's follow a straightforward guide to easily ascertain which variant is presently active on the website.

1. Start by launching **Google Developer tools**.
2. Move to the **Application** tab located within the tools.
3. Find and access **Local Storage** from the left sidebar.
4. Pick the URL of the website from the **local storage list**.
5. Locate the entry named **Version**.
6. If the **Version** is set at 0, 1, 2, 3, or 4, it corresponds to the control group. If set at 5, 6, 7, 8, or 9, it pertains to the variant group.
7. Adjust the **Version** number to observe either the control or the variant.
8. After tweaking the version number, remember to refresh the page.

![Console Check version](web-view-experiment.png)

Remember, this approach lets you promptly identify which variant is visible on the live site, all without needing to open numerous incognito browsers. It's a streamlined method to ensure that your experiment is working as intended.