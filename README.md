# gtm-abtesting
The project is to make A/B testing freely available for everybody.

This repo is used to run a Github pages for [abtesting.sandervolbeda.com](https://abtesting.sandervolbeda.com). 

## About the project

Install the dependencies:
```
python install -r requirements.txt
```

Use the following command to run the project:
```
mkdocs serve 
(if that doesn't work, use python3 -m mkdocs serve)
```

or use this alternative

```
python3 -m mkdocs serve
```

To deploy updates, use:
```
mkdocs gh-deploy
```

or use this alternative
```
python3 -m mkdocs build
```

- Extend the theme: https://squidfunk.github.io/mkdocs-material/customization/
- Material theme source files: https://github.com/squidfunk/mkdocs-material/tree/master/src/templates