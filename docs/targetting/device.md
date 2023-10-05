# Device Type
To run experiments selectively for particular devices, follow these steps. No action is needed if the experiment encompasses all devices. However, if the aim is to conduct an experiment solely for mobile users, additional configuration is necessary.

## 1. Custom JavaScript Variable
The first step is setting up the variable.

1. Access **Google Tag Manager**.
2. Navigate to the **Variables** section located on the left-hand side.
3. Introduce a new variable by selecting **'New'**.
4. Assign the title: **Device Category**.
5. Opt for **'Custom JavaScript'** under **Variable Configuration**.
6. **Insert the code** provided below into the designated text field.

``` py linenums="1"
function(){
  var width = window.innerWidth,
    screenType;
    if (width <= 520){
      screenType = "mobile";
    } else if (width <= 992) {
      screenType = "tablet";
    } else {
      screenType = "desktop";
    }
  return screenType
}
```
7. **Save** the changes.

## 2. Triggers
The following steps pertain to all triggers labeled as 'Initialisation, Experiment 1 – Control, Experiment 1 – Variant'. To exemplify, a single instance will be provided, yet the process remains consistent for all experiment-related triggers.

1. Access the **Triggers** section found on the left-hand side.
2. Locate **'Experiment 1 – Initialisation'**.
3. Incorporate an **extra row** within **'Activate this trigger when an Event occurs and all conditions are true'**.
    * **Field 1:** Device Category
    * **Field 2:** contains
    * **Field 3:** mobile
4. Please note that field 3 should be in lowercase. Options consist of **mobile**, **tablet**, or **desktop**.
5. **Save** the alterations.

Carry out this procedure similarly for the **remaining triggers** (Experiment 1 – Control and Experiment 1 – Variant).

Remember to preview the outcomes within GTM's preview mode prior to finalizing any publishing.

## 3. JavaScript explained
More information about the JavaScript code.

* Retrieves the width of the window.
* Establishes a variable named screenType.
* Checks the width against specific values to ascertain the screen type.
    * If the width is equal to or less than 520 pixels, the screen type is labeled as "mobile."
    * If the width is less than or equal to 992 pixels but greater than 520 pixels, the screen type is considered a "tablet."
    * For widths exceeding 992 pixels, the screen type is identified as "desktop."
* Ultimately, the function returns the determined screenType value. This code aids in programmatically recognizing the type of device based on its screen width, ensuring precise device categorization for the subsequent procedures.