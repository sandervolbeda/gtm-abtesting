# Google Analytics

Creating a custom definition in Google Analytics 4 is the first step. This will connect GA and GTM. It is important to start with this step, as it can take time for data to appear in GA4.

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