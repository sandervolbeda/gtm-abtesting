# Welcome

The goal of this website is to make A/B testing available for everybody. We're only using free tools to do so.

The tools we'll be using are:

1. Google Analytics 4
2. Google Tag Manager
3. Microsoft Clarity



---

If you don't like to read the whole page, but rather listen to the specifics you now can. This episode of "Golden Nuggets for Experimentation" clarifies the principles as well.

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/3njS8Awjy4b0bkN74QkkUu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

---

It's goot to know what the pros and cons are of running experiments this way.

**Pros:**

- Easy initial set up
- Integrates nicely with GA4
- Client-side
- Free (no costs at all)
- Doesn’t use cookies (but localStorage)
- Loads asynch

**Cons:**

- Technical understanding of GTM to scale experimentation
- No WYSIWYG editor
- JavaScript is required to run your experiments
- Data accuracy may be affected due to GA4 (if you don’t use BigQuery)

*This list was updated on 20th of July 2023.*

---

## Before you get started

Down below you'll be able to find a quick checklist of what you need to get started.

### Checklist

1. You must have Google Tag Manager connected to your website.
2. You must have publishing rights within the Google Tag Manager container.
3. You must have GA4 connected to the website.
4. You must have admin access to the GA4 account that is linked.
5. You should possess basic knowledge of HTML, CSS, and JavaScript (JS).

---

## Explanation in text

Allow me to briefly explain how it works, so you have a clear understanding of what you’ll be working on. It’s worth noting that this process is asynchronous, which means that it occurs during the website loading phase rather than after it has loaded.

When a visitor lands on your website, Google Tag Manager will trigger the initialisation event, which is the first thing we’ll set up. This event will trigger the initialisation trigger.

When the initialisation trigger is fired, the splitter tag will run. The splitter tag will execute JavaScript code that splits our traffic and saves the version of the experiment in the visitor’s localStorage.

The GA4 configuration tag will be triggered by the page view trigger, which will send our data to GA4 with a version variable.

The container-loaded event can also trigger two tags, depending on the stored version.

If the version includes slots 5, 6, 7, 8, or 9, the variant trigger will be fired, which will execute the variant tag that contains the experiment code.

If the version includes slots 0, 1, 2, 3, or 4, the control trigger will be fired, which will execute the control tag.

Each slot represents 10% of the traffic, and the number of slots is used to randomly split the traffic and facilitate Multi-Variant Testing.