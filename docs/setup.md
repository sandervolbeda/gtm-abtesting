# Setup

Below is a quick checklist of what you need to get started.

## Checklist

1. Google Tag Manager must be connected to the website.
2. Publishing rights must be granted within the Google Tag Manager container.
3. GA4 must be connected to the website.
4. Admin access must be granted to the GA4 account that is linked.
5. Basic knowledge of HTML, CSS, and JavaScript (JS) is recommended.

---

Creating a custom definition in Google Analytics 4 is the first step. This will connect GTM and GA4. It is important to start with this step, as it can take time for data to appear in GA4.

---

## Google Analytics 4
Let's dive into GA4 first.

> It is important to note that, with the current setup, one user can only view one experiment. Therefore, running multiple experiments at the same time will drastically reduce the number of users in each experiment.

1. Open **Google Analytics 4**.
2. Go to **Account > Property**.
3. Click **Custom definitions** in the property list.
4. Click the button **Create custom dimensions**.
5. Fill all the fields with the following details

    | Field:         | Input:           |
    | ------------- |:-------------|
    | **Dimension name**    | Version |
    | **Scope**   | User      |
    | **Description** | Used for analysing experiments from GTM      |
    | **User property** | Version      |

6. **Save**

[ADD IMAGE HERE]

*One downside of GA4 is that it can take time for data to appear. In some cases, it may take up to 48 hours after creating a custom definition for data to start showing in GA4.*

---

## Google Tag Manager

---

### Workspace
It is recommended to avoid working directly on the master branch (or the default Workspace in this case). To begin, launch GTM (Google Tag Manager). In the left sidebar, locate the Default Workspace option and click on it. Then, in the upper right corner, look for the + icon and click on it.

[ADD IMAGE HERE]

| Field:         | Input:           |
| ------------- |:-------------|
| **Name**    | Experimentation setup |
| **Description**   | Setting up everything to start with experimentation    |

**Save**.

This will help ensure that no one else is working on the same version of the code as we are. It is a security measure to prevent conflicts and data loss.

---

### Variable (Version)

The first step is to create a new variable. This JavaScript will create the ``version`` row in the visitor's browser ``localStorage``.

> It is important to note that browsers do not automatically reset ``localStorage``, unlike cookies. Visitors can manually reset it by clearing their browser's cache and other stored data, but this is unlikely. As a result, running experiments in this manner can last longer than cookies that are automatically reset, which can improve the accuracy of your data.

**Steps:**

1. In the sidebar, navigate to **Variables**.
2. Click Add new **User-Defined Variable**.
3. Name the variable **Version**.
4. In the **Variable Configuration** section, select **Variable Type** as **Custom JavaScript**.
5. Copy and paste the following code into the variable:
    ``` py linenums="1"
    function() {
      var keyValue = localStorage.getItem('version');
      return keyValue;
    }
    ```
6. **Save**

[ADD IMAGE HERE]

---

### Triggers

Next, we will configure the triggers. Three triggers are required to execute a single experiment:

* Initialization trigger: This trigger fires when the experiment is first initialized.
* Control – Page View: This trigger fires when a visitor views the control page.
* Variant – Page View: This trigger fires when a visitor views the variant page.

---

#### Initialization

This trigger fires when the experiment is first initialized. To create it, follow these steps:

1. In Google Tag Manager, navigate to **Triggers**.
2. Click the **New** button to create a new trigger.
3. Name the trigger **Experiment 1 – Initialization**.
4. Select **Initialization** as **Page View**.
6. Select **This trigger fires on** as **Some Initialization Events**.
    
    | Field:         | Input:           |
    | ------------- |:-------------|
    | **First**    | Page path |
    | **Second**   | equals |
    | **Third**    | / |

7. Click **Save**.

> 1. If the **Path** option is not in the list, select **Choose Built-In Variable** and then select **Page path**.

> 2. The third field with the ``/`` represents the homepage.

> 3. This is also where you can add more requirements, such as device targeting.

[ADD IMAGE HERE]

---

#### Control - Page View

Next, we will create the trigger for the control experiment. To do this, follow these steps:

1. In Google Tag Manager, navigate to **Triggers**.
2. Click the **New** button to create a new trigger.
3. Name the trigger **Experiment 1 – Control – Page View**.
4. In the **Trigger Configuration** section, select **Trigger Type** as **Page View** and **Trigger Event** as **Page View**.
5. In the **Trigger Details** section, select **This trigger fires on** as **Some Page Views**.
6. Add the following details to the first row.

    | Field:         | Input:           |
    | ------------- |:-------------|
    | **First**    | Version |
    | **Second**   | matches RegEx |
    | **Third**    | ```Slot 0$|Slot 1$|Slot 2$|Slot 3$|Slot 4``` |

7. Add an additional row with the following details.

    | Field:         | Input:           |
    | ------------- |:-------------|
    | **First**    | Page path |
    | **Second**   | equals |
    | **Third**    | / |

8. Click **Save**.

[ADD IMAGE HERE]

---

#### Variant - Page View

Now, let’s delve into the experiment trigger (for the variant).

1. In Google Tag Manager, navigate to **Triggers**.
2. Click the **New** button to create a new trigger.
3. Name the trigger **Experiment 1 – Variant – Page View**.
4. In the **Trigger Configuration** section, select **Trigger Type** as **Page View** and **Trigger Event** as **Page View**.
5. In the **Trigger Details** section, select **This trigger fires on** as **Some Page Views**.
6. Add the following details to the first row.

    | Field:         | Input:           |
    | ------------- |:-------------|
    | **First**    | Version |
    | **Second**   | matches RegEx |
    | **Third**    | ```Slot 5$|Slot 6$|Slot 7$|Slot 8$|Slot 9$``` |

7. Add an additional row with the following details.

    | Field:         | Input:           |
    | ------------- |:-------------|
    | **First**    | Page path |
    | **Second**   | equals |
    | **Third**    | / |

8. Click **Save**.

[ADD IMAGE HERE]

---

### Tags

It is now time to add three new tags and make adjustments to the GA4 configuration. This will ensure that the data is sent to the custom definition we created in GA4.

---

#### Splitter Tag

Once the **Initialization trigger** has been activated, we will use a tag to randomly assign visitors to either the **control** or **variant**. This **split tag** will be triggered accordingly.

To create the split tag, follow these steps:

1. In Google Tag Manager, navigate to **Tags**.
2. Click the **New** button to create a new tag.
3. Name the tag **Experiment 1 – Splitter**.
4. In the **Tag Configuration** section, select **Tag Type** as **Custom HTML**.
5. Copy and paste the following code into the **Custom HTML** block:

    ``` py linenums="1"
    <script>
      (function () {
      var slots = 10;
      var version;
      if (localStorage.getItem('version')) {
        version = localStorage.getItem('version');
      } else {
        var random = Math.floor(Math.random() * slots);
        version = 'Slot ' + (random);
        localStorage.setItem('version', version);
      }
      return version;
      })();
    </script>
    ```

6. Select the **Trigger** as **Experiment 1 – Initialization**.
7. Click **Save**.

[ADD IMAGE HERE]

---

#### Control Tag

Once the **splitter tag** has successfully executed and the user falls within one of the slots from **0 to 4**, the **control tag** will be triggered.

To create the control tag, follow these steps:

1. In Google Tag Manager, navigate to **Tags**.
2. Click the **New** button to create a new tag.
3. Name the tag **Experiment 1 – Control – Script**.
4. In the **Tag Configuration** section, select **Tag Type** as **Custom HTML**.
5. Copy and paste the following code into the Custom HTML block:

    ``` py linenums="1"
    <script>
      (function () {
        // experiment code here
        console.log("Control loaded");
      })();
    </script>
    ```
    
6. Select the **Trigger** as **Experiment 1 – Control – Page View**.
7. Click **Save**.


> A script is also being run for the control variant. This allows for additional tracking to be set up, for example.

[ADD IMAGE HERE]

---

#### Variant Tag

Once the **splitter tag** has successfully executed and the user falls within one of the slots from **5 to 9**, the **variant tag** will be triggered.

To create the variant tag, follow these steps:

1. In Google Tag Manager, navigate to **Tags**.
2. Click the **New** button to create a new tag.
3. Name the tag **Experiment 1 – Variant – Script**.
4. In the **Tag Configuration** section, select **Tag Type** as **Custom HTML**.
5. Copy and paste the following code into the **Custom HTML** block:

    ``` py linenums="1"
    <script>
      (function () {
        // experiment code here
        console.log("Variant loaded");
      })();
    </script>
    ```

6. Select the **Trigger** as **Experiment 1 – Variant – Page View**.
7. Click **Save**.

> This is where you can add the JavaScript for your experiment to manipulate the page.

[ADD IMAGE HERE]

---

### GA4 Confirguration tag

To complete the setup, we need to edit the Google Analytics tag.

1. Open the GA4 configuration tag.
2. In the **User Properties** section, add a new row.
3. In the **Property name** field, enter ```Version```.
4. In the **Value** field, enter the value of the ```Version``` variable.
5. Click **Save**.

[ADD IMAGE HERE]

---

## Debug

Before publishing the setup or starting a new experiment, it is always important to **verify that it is working properly**. Otherwise, you cannot trust the results of the experiment or the data that is collected.

---

### GTM experiments

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

### GA4 events

To use the Debugger view in Google Analytics 4, you will need to add the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna){:target="_blank"} extension to your browser. This functionality applies to every website present in your Google Analytics account.

1. Activate the extension on the GTM preview page
2. Go to your GA4 > Admin > Account > Property
3. Check for DebugView (last item in the first list)
4. Select your device from the dropdown (might be hard, but give it a try)
5. Now check if the Version is shown in the debug list.

1. Activate the extension on the **preview page** of Google Tag Manager.
2. Go to **Admin > Account > Property** in your Google Analytics 4 account.
3. Check for **DebugView** (the last item in the first list).
4. Select your device from the dropdown. **This may be difficult, but please try**.
5. Check if the **Version** is shown in the debug list.

[ADD IMAGE HERE]

> Remember, as mentioned earlier, it can take up to 48 hours for data to be shown in GA4. However, the DebugView is live, so there might be a slight delay (a few seconds).

---

## Folder Structure

Since there are numerous tags, triggers, and variables involved in experimentation, it is advisable to organize everything related to experimentation into a single folder (or create multiple folders if you prefer to structure them per experiment).

1. Open Google Tag Manager.
2. Select **Folders** in the left-hand menu.
3. Click **New Folder**.
4. Name it: **Experimentation**.
5. Select all **Experimentation**-related items (do not include GA configuration).
6. Select **Move** and move the items to the **Experimentation** folder.

[ADD IMAGE HERE]

---

## Publish Setup/Experiment

The setup is complete. To publish the experiment, follow these steps:

1. Click the blue **Submit** button in the top right corner.
2. Click **Publish**.
3. Close the slide-in.
4. Open the **Workspace** you are currently in.
5. Click **Update** (next to **This workspace is out of date**).
6. Click **Update**.

[ADD IMAGE HERE]

The experiment is now live!

> Important: Always start with an A/A test, which means no changes to the website, to make sure you collect the data you need. This setup includes an A/A test. Once you have published everything, make sure to check your website and the page you are running the experiment on with the console log of the developer tools. This will either show the message **Control loaded** or **Variant loaded**.

--- 

## View Experiment (Live Site)