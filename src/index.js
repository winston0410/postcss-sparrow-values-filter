import * as R from 'ramda'

import {
  filterByValues,
  getValue
} from './utilities/helper.js'

export default (options) => (decl) => R.when(
  R.pipe(
    getValue,
    filterByValues(options)
  ),
  R.juxt(options.callbacks)
)(decl)
