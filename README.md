# PostCSS Sparrow Values Filter

A PostCSS Sparrow plugin that helps you **search CSS declarations** by **values**.

This plugin is designed to be used with [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow), which helps you filter CSS declarations by **selectors**.  By using these two plugins together, you can **easily get the declarations you need**.

## Made in Hong Kong :free: :free:

This plugin is made with love by a Hong Konger.

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss-sparrow postcss-sparrow-units-filter

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

### `options.inclusion` : Boolean

True for including and False for excluding values listed in `options.values`.

### `options.callbacks` : Array

An array of callbacks that you use to transform the selected declarations.  The selected declaration will be passed in as an argument.
