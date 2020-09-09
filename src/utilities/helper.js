import {
  hasWildCard
} from './partial-functions/wildcard.js'

import {
  getValue,
  getValues
} from './partial-functions/value.js'

import * as R from 'ramda'

const shouldIncludeOrExclude = R.ifElse(
  R.propEq('inclusion', true)
)

const ifValuesHaveWildCard = R.ifElse(
  R.pipe(
    getValues,
    hasWildCard
  )
)

const convertToPredicateFn = R.pipe(
  R.map(R.equals),
  R.anyPass
)

const filterByValues = (options) => (decl) =>
  shouldIncludeOrExclude(
    ifValuesHaveWildCard(
      R.T,
      R.pipe(
        getValues,
        convertToPredicateFn,
        R.applyTo(decl)
      )
    ),
    ifValuesHaveWildCard(
      R.F,
      R.pipe(
        getValues,
        convertToPredicateFn,
        R.complement(R.applyTo(decl))
      )
    )
  )(options)

export {
  getValue,
  filterByValues
}
