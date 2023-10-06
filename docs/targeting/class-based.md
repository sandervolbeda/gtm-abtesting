# Class Based
To run experiments selectively based on class, follow these steps. This can be used, for example with WordPress. The body class always has the page type assigned to it (if configured correctly). This can be a good solution if page path targeting is not possible.

## 1. Custom JavaScript Variable
The first step is setting up the variable.

1. Access **Google Tag Manager**.
2. Navigate to the **Variables** section located on the left-hand side.
3. Introduce a new variable by selecting **'New'**.
4. Assign the title: **Product Page** (use the page type that needs to be selected.).
5. Opt for **'Custom JavaScript'** under **Variable Configuration**.
6. **Insert the code** provided below into the designated text field.

``` py linenums="1"
function(){
  var bodyElement = document.querySelector('body');
  var hasPageProductClass = bodyElement.classList.contains('page-product');
  return hasPageProductClass;
}
```
7. **Save** the changes.

## 2. Triggers
The following steps pertain to all triggers labeled as 'Initialisation, Experiment 1 – Control, Experiment 1 – Variant'. To exemplify, a single instance will be provided, yet the process remains consistent for all experiment-related triggers.

1. Access the **Triggers** section found on the left-hand side.
2. Locate **'Experiment 1 – Initialisation'**.
3. Incorporate an **extra row** within **'Activate this trigger when an Event occurs and all conditions are true'**.
    * **Field 1:** Product Page
    * **Field 2:** equals
    * **Field 3:** true
4. Please note that false can also be used if all pages except product pages need to be targeted.
5. **Save**.

Carry out this procedure similarly for the **remaining triggers** (Experiment 1 – Control and Experiment 1 – Variant).

Remember to preview the outcomes within GTM's preview mode prior to finalizing any publishing.