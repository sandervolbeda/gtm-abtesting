# Setup

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

| Field         | Input           |
| ------------- |:-------------|
| **Dimension name**    | Version |
| **Scope**   | User      |
| **Description** | Used for analysing experiments from GTM      |
| **User property** | Version      |

[ADD IMAGE HERE]

*The downside of GA4 is that it takes time before the data appears. It can take up to 48 hours before data is showing in GA4, after creating the custom definition.*

---

## Google Tag Manager

### Workspace

### Variable (Version)

### Triggers

#### Initialisation

#### Control - Page View

#### Variant - Page View

### Tags

#### Splitter Tag

#### Control Tag

#### Variant Tag

### GA4 Confirguration tag

## Debug

### GTM experiments

### GA4 events

## Publish Experiment