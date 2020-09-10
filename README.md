# PostCSS Sparrow Values Filter

[![Known Vulnerabilities](https://snyk.io/test/github/winston0410/postcss-sparrow-values-filter/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/postcss-sparrow-values-filter?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/2148862d1ec07fd2f8f2/maintainability)](https://codeclimate.com/github/winston0410/postcss-sparrow-values-filter/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/2148862d1ec07fd2f8f2/test_coverage)](https://codeclimate.com/github/winston0410/postcss-sparrow-values-filter/test_coverage) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/08ffa6d6de2a4e1db2a461911104c641)](https://www.codacy.com/manual/winston0410/postcss-sparrow-values-filter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=winston0410/postcss-sparrow-values-filter&amp;utm_campaign=Badge_Grade)

A PostCSS Sparrow plugin that helps you **search CSS declarations** by **values**.

This plugin is designed to be used with [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow), which helps you filter CSS declarations by **selectors**.  By using these two plugins together, you can **easily get the declarations you need**.

## Made in Hong Kong :free: :free:

This plugin is made with love by a Hong Konger.

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss-sparrow postcss-sparrow-values-filter

```

Then import this plugin as the callback for [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow).

```javascript
//postcss.config.js
module.exports = {
  plugins: [
    //Other plugins...

    require('postcss-sparrow')({
      transformations: [
        {
          selectors: ['*'],
          inclusion: true,
          callbacks: [
            require('postcss-sparrow-values-filter')(
              {
                values: ['none'],
                inclusion: true,
                callbacks: [
                  //Do transformation here with your own callback functions
                  (decl) => {
                    decl.remove()
                  }
                ]
              }
            )
          ]
        }
      ]
    })
  ]
}
```

## API Reference

### `options.values` : Array

An array of values that you want to match with. Use `*` as wildcard and select all values.

For example, `absolute` will match `position: absolute`.

### `options.inclusion` : Boolean

True for including and False for excluding values listed in `options.values`.

### `options.callbacks` : Array

An array of callbacks that you use to transform the selected declarations.  The selected declaration will be passed in as an argument.
