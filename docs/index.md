# Welcome

The goal of this website is to make A/B testing available to everyone. To do this, we will only be using free tools.

The tools we will be using are:

* Google Analytics 4
* Google Tag Manager

**Google Analytics 4** is a freemium web analytics service offered by Google. It is the successor to Universal Analytics and was released in October 2020.

**Google Tag Manager** is a free web application that allows you to manage your website's tags without having to edit your website's code.

---

If you prefer to listen to the specifics instead of reading the entire page, that option is now available. The principles are also clarified in this episode of "[Golden Nuggets for Experimentation](https://gnexperimentation.substack.com){:target="_blank"}".

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/3njS8Awjy4b0bkN74QkkUu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

---

**Pros:**

- Easy initial setup
- Integrates well with GA4
- Client-side
- Free
- Does not use cookies (uses localStorage)
- Loads asynchronously

**Cons:**

- Requires technical understanding of GTM to scale experimentation
- No WYSIWYG editor
- Requires JavaScript to run experiments
- Data accuracy may be affected due to GA4 (if BigQuery is not used)

---

## Explanation in text

This process is asynchronous, which means that it occurs during the website loading phase rather than after it has loaded.

When a visitor lands on your website, Google Tag Manager triggers the initialisation event, which is the first thing we set up. This event triggers the initialisation trigger.

The initialisation trigger fires the splitter tag, which executes JavaScript code that splits traffic and saves the version of the experiment in the visitor's localStorage.

The GA4 configuration tag is triggered by the page view trigger, which sends data to GA4 with a version variable.

The container-loaded event can also trigger two tags, depending on the stored version.

If the version includes slots 5, 6, 7, 8, or 9, the variant trigger is fired, which executes the variant tag that contains the experiment code.

If the version includes slots 0, 1, 2, 3, or 4, the control trigger is fired, which executes the control tag.

Each slot represents 10% of the traffic, and the number of slots is used to randomly split traffic and facilitate Multi-Variant Testing.

---