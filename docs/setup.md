# Setup

Down below you'll be able to find a quick checklist of what you need to get started.

## Checklist

1. You must have Google Tag Manager connected to your website.
2. You must have publishing rights within the Google Tag Manager container.
3. You must have GA4 connected to the website.
4. You must have admin access to the GA4 account that is linked.
5. You should possess basic knowledge of HTML, CSS, and JavaScript (JS).

---

Let’s start with creating a custom definition in Google Analytics 4. This will be your connection between GTM and GA4. It's important to start with this step because it can take time before data will be appearing in Google Analytics 4.

---

## Google Analytics 4
We'll be diving into GA4 first.

> Important! With the current setup one user can only view one experiment. Following that principle mean: running multiple experiments at the same time will drastically reduce the number of users in each experiment.

1. Open Google Analytics 4
2. Go to Account > Property
3. Click Custom definitions in the property list
4. Click the button ‘Create custom dimensions’
5. Fill all the fields with the details below (hit save after)

| Field:         | Input:           |
| ------------- |:-------------|
| **Dimension name**    | Version |
| **Scope**   | User      |
| **Description** | Used for analysing experiments from GTM      |
| **User property** | Version      |

[ADD IMAGE HERE]

*The downside of GA4 is that it takes time before the data appears. It can take up to 48 hours before data is showing in GA4, after creating the custom definition.*

---

## Google Tag Manager

---

### Workspace
It's smart to avoid working directly on the master branch (or the default Workspace in our situation). To start, it is essential to launch GTM (Google Tag Manager). Locate the Default Workspace option in the left sidebar and click on it. Afterwards, locate the “+” icon positioned in the upper right corner and give it a click.

[ADD IMAGE HERE]

| Field:         | Input:           |
| ------------- |:-------------|
| **Name**    | Experimentation setup |
| **Description**   | Setting up everything to start with experimentation    |

Save.

This will make sure nobody is working on the same version as we are. It’s just a security measure.

---

### Variable (Version)

The first thing we’ll do is to create a new variable. This piece of JavaScript will create the version row in the browser localStorage of the visitor.

> It’s important to be aware that browsers do not reset the localStorage automatically, unlike Cookies. Visitors have the option to manually reset it by clearing their browser’s cache and other stored data, but the likelihood of them doing so is relatively low. Consequently, running experiments in this manner can surpass the duration of cookies that are automatically reset, thereby enhancing the accuracy of your data.

**Steps:**

1. Navigate to variables in the sidebar
2. Add new User-Defined Variable
3. Name it: Version
4. Choose as Variable Configuration the Variable Type Custom JavaScript
5. Copy and paste the code from down below into the variable

``` py linenums="1"
function() {
  var keyValue = localStorage.getItem('version');
  return keyValue;
}
```

[ADD IMAGE HERE]

---

### Triggers

Next, we will proceed with configuring all the triggers. To execute a single experiment, you will require three triggers.

* Initialisation trigger
* Control – Page View
* Variant – Page View

---

#### Initialisation

This trigger is used to see if there is a experiment running on the page that the user visits.

1. Go to the triggers in GTM
2. Click the ‘New’ button to add a trigger
3. Name it: Experiment 1 – Initialisation
4. Select Trigger Configuration
5. Choose Page View > Initialisation
6. Select: This trigger fires on ‘Some Initialisation Events’

Now you'll have to do some additional inputs:

| Field:         | Input:           |
| ------------- |:-------------|
| **First**    | Page path |
| **Second**   | equals |
| **Third**    | / |

Save!

> 1. If path path is not in the list choose ‘Choose Buildt-In Variable’ and select Page path.

> 2. The third field with the / represents the homepage.

> 3. This is also the place where we can add more requirements, for example device targeting.

[ADD IMAGE HERE]

---

#### Control - Page View

Now, let’s delve into the experiment trigger (for the control).

1. Click the ‘New’ button to add a trigger
2. Name it: Experiment 1 – Control – Page View
3. Select Trigger Configuration
4. Choose Page View > Page View
5. Select: This trigger fires on ‘Some Page Views’

Now you'll have to do some additional inputs:

| Field:         | Input:           |
| ------------- |:-------------|
| **First**    | Version |
| **Second**   | matches RegEx |
| **Third**    | ```Slot 0$|Slot 1$|Slot 2$|Slot 3$|Slot 4``` |

Add another row:

| Field:         | Input:           |
| ------------- |:-------------|
| **First**    | Page path |
| **Second**   | equals |
| **Third**    | / |

Save!

That’s it for the control variant.

[ADD IMAGE HERE]

---

#### Variant - Page View

Now, let’s delve into the experiment trigger (for the variant).

1. Click the ‘New’ button to add a trigger
2. Name it: Experiment 1 – Variant – Page View
3. Select Trigger Configuration
4. Choose Page View > Page View
5. Select: This trigger fires on ‘Some Page Views’

Now you'll have to do some additional inputs:

| Field:         | Input:           |
| ------------- |:-------------|
| **First**    | Version |
| **Second**   | matches RegEx |
| **Third**    | ```Slot 5$|Slot 6$|Slot 7$|Slot 8$|Slot 9$``` |

Add another row:

| Field:         | Input:           |
| ------------- |:-------------|
| **First**    | Page path |
| **Second**   | equals |
| **Third**    | / |

Save!

That’s it for the variant. All the triggers are done now.

[ADD IMAGE HERE]

---

### Tags

It’s time to add three new tags and make adjustments to the GA4 configuration to ensure that the data is sent to the custom definition we previously created in GA4.

---

#### Splitter Tag

After the Initialisation trigger has been activated, we will employ a tag that randomly divides the traffic into either the control or variant. This split tag will be triggered accordingly.

1. Move to tags in the navigation of GTM
2. Click ‘New’ button
3. Name: Experiment 1 – Splitter
4. Tag Configuration select Custom HTML
5. Add the script from down below into the Custom HTML block in GTM
6. Select Trigger: Experiment 1 – Initialisation
7. Save

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

That’s it for the splitter tag.

[ADD IMAGE HERE]

---

#### Control Tag

Once the splitter tag has successfully executed and the user falls within one of the slots ranging from 0 to 4, the control tag will be triggered.

1. Click ‘New’ button
2. Name: Experiment 1 – Control – Script
3. Tag Configuration select Custom HTML
4. Add the script from down below into the Custom HTML block in GTM
5. Select Trigger: Experiment 1 – Control – Page View
6. Save

``` py linenums="1"
<script>
  (function () {
    // experiment code here
    console.log("Control loaded");
  })();
</script>
```

> We're also running a script for the control variant. This way you could setup some additional tracking for example.

[ADD IMAGE HERE]

---

#### Variant Tag

Once the splitter tag has successfully executed and the user falls within one of the slots ranging from 5 to 9, the variant tag will be triggered.

1. Click ‘New’ button
2. Name: Experiment 1 – Variant – Script
3. Tag Configuration select Custom HTML
4. Add the script from down below into the Custom HTML block in GTM
5. Select Trigger: Experiment 1 – Variant – Page View
6. Save

> This is the place where you can add the JavaScript for your experiment to manipulate the page.

``` py linenums="1"
<script>
  (function () {
    // experiment code here
    console.log("Variant loaded");
  })();
</script>
```

[ADD IMAGE HERE]

---

### GA4 Confirguration tag


Lastly, we need to edit to the Google Analytics tag.

1. Open the GA4 configuration tag
2. Open User Properties
3. Add new row

| Field:         | Input:          |
| ------------- |:-------------|
| **Property name** | Version |
| **Value**   | {{Version}} |

Save

[ADD IMAGE HERE]

---

## Debug

Before publishing the setup or before you start running a experiment you always need to check if it's working. Otherwise you can't trust the setup and data that's collected.

---

### GTM experiments

The first step is simple. Preview your new changes on the website via Google Tag Manager.

[ADD IMAGE HERE]

Time to review if everything works as it is suppose to.

**Check 1:**

Second step of the preview mode should fire the Experiment 1 – Splitter tag.

[ADD IMAGE HERE]

**Check 2:**

Move to the Variables tab (still in step 2) and check if a Slot has been set with the Version (bottom row).

[ADD IMAGE HERE]

**Check 3:**

Navigate to step 3 in the left sidebar and verify whether Experiment 1 has been triggered. Depending on your version, the Control should be fired if your slot falls between 0 and 4, while the variant should be fired if the slot value ranges from 5 to 9.

[ADD IMAGE HERE]

Everything seems to work with me. Now let’s also check the console log to check if the Control Script has fired.

**Check 4:**

Open the website (still preview mode of GTM), right-click and select Inspect. Now open the console tab and check if there’s anywhere ‘Control loaded’ or ‘Variant loaded’ in the content.

[ADD IMAGE HERE]

Leave the GTM preview mode open before heading to the next step. We’ll still need it. I mean this tab:

[ADD IMAGE HERE]

---

### GA4 events

The first thing you’ll have to do is to add [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna){:target="_blank"} to your browser. By doing this, you will be able to utilize the Debugger view in Google Analytics 4. This functionality applies to every website present in your Google Analytics account, making it incredibly useful in various scenarios.

1. Activate the extension on the GTM preview page
2. Go to your GA4 > Admin > Account > Property
3. Check for DebugView (last item in the first list)
4. Select your device from the dropdown (might be hard, but give it a try)
5. Now check if the Version is shown in the debug list.

[ADD IMAGE HERE]

> Remember, as mentioned earlier. It can take up to 48 before data is shown in GA4. However, the DebugView is live, so there might be little delay (couple of seconds).

---

## Folder Structure

Since we're working with numerous tags, triggers, and variables, it's wise to organize everything related to experimentation into a single folder (or create multiple folders if you prefer to structure them per experiment).

1. Open up Google Tag Manager
2. Select ‘Folders’ in the left side menu
3. Click ‘New Folder’
4. Name it: Experimentation
5. Select all Experimentation related items (do not include GA configuration)
6. Select ‘Move’ and move the items to the Experimentation Folder

[ADD IMAGE HERE]

---

## Publish Setup/Experiment

Everything is set to go. We're going to publish 

1. Click the blue ‘Submit’ button top right corner
2. Click ‘Publish’
3. Close the slide-in
4. Open up the Workspace you’re now in
5. Click update (next to ‘This workspace is out of date.’)
6. Click update

[ADD IMAGE HERE]

It’s working!

> Important! Always start with an A/A test, which means no changes to the website, to make sure you collect the data you need. It's included in this setup. When you've published everything make sure to check your website and the page you're running the experiment on with the console log of the developer tools. This will either show the message 'Control loaded' or 'Variant loaded'.

--- 

## View Experiment (Live Site)