# Preview and Share Experiment

## How to Create a Preview URL for A/B Tests in Google Tag Manager 
Sometimes, you want to show a test variation to your team or clients before going live. This helps everyone see what the changes look like and approve them. Using a URL parameter is a quick and easy way to do this.

## Step-by-Step Guide
### 1. Create a URL Variable in GTM:
1. Create a URL Variable in GTM
2. Go to Variables in your Google Tag Manager.
3. Under User-Defined Variables, click New.
4. Choose Variable Type: URL.
5. Under Component Type, choose Query.
6. Name your parameter, for example: view.
7. Save the variable.

Now, whenever someone visits a page with ?view=variant in the URL, this variable will store the value variant.

#### 2. Make a Trigger That Checks This Variable
1.	Go to Triggers and click New.
2.	Choose Trigger Type: Page View (you can also use DOM Ready or Window Loaded).
3.	Add a condition: Your Variable (e.g. view) equals variant.
4.	Save the trigger.

### 3. Attach the Trigger to Your Variant Tag
1.	Open the Tags section.
2.	Create or edit your tag that loads the variant code.
3.	Add the new trigger to this tag.
4.	Save and publish.

### 4. Test in Preview Mode
1.	Enter Preview Mode in GTM.
2.	Load your site with the URL parameter, like this:

``` py linenums="1"
https://example.com/page?view=variant
```

3.	Check that your variant tag fires in the preview panel.
4.	Publish your container when ready.

With this simple trick, you can let your team and stakeholders review your A/B test changes before going live. It only takes a few minutes to set up. Once done, anyone with the preview URL can see the variant. This helps you catch errors early and share ideas more easily.