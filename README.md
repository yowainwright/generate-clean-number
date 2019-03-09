# Generate Clean Number #️⃣🖌

[![CircleCI](https://circleci.com/gh/yowainwright/generate-clean-number.svg?style=svg)](https://circleci.com/gh/yowainwright/generate-clean-number) [![Greenkeeper badge](https://badges.greenkeeper.io/yowainwright/generate-clean-number.svg?token=9e6575aeed4d6312e467055cb1908beebbac5314e2c55a5dd4437417e5631cde&ts=1550802853168)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/yowainwright/generate-clean-number/branch/master/graph/badge.svg)](https://codecov.io/gh/yowainwright/generate-clean-number)

A JavaScript utility for removing anything that is not a number ([NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)) from a number.

There are situations, particularly with [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) where numbers are generated with extra characters in certain browsers. Generate Clear Number is a few line utility that strips characters that are not numbers from it.

----

 🎉 **2.0.0:** Provides decimal support. This version should **not** cause breakage, however, because this update switches from returning [parseInt(string, 10)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) to [parseFloat(num)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) `v2.0.0` was added for safety.

----

## Usage

Generate Clean Number provides 2 methods for generating a clean number (removing unwanted characters).

### `generateCleanNumber`

`generateCleanNumber` uses regex to remove unwanted characters from numbers. Just a ternary but may be less performant if many numbers are being trimmed.

```javascript

import {
  generateCleanNumber
} from 'generate-clean-number'

const nowCleanNumber = generateCleanNumber(<someNumber>)

```

### `filterNaNfromNumber`

`filterNaNfromNumber` turns a number into an array and strips non-number characters from it before returning a number.

```javascript

import {
  filterNaNfromNumber
} from 'generate-clean-number'

const nowCleanNumber = filterNaNfromNumber(<someNumber>)

```

----

## Examples of what Generate Clean Number Solves

Generate Clean Number solves extra characters that are sometimes added (unknowingly) to numbers when being manipulated while doing date operations or stuff like that.

Here's an example of what this number **could** look like, `~^12`. Here's what Generate Clean Number **will make** it look like, `12`.

### Real world issues Generate Clean Number helps

Listed below are a few real world examples that generate clean number might help with.

- [IEs tolocalestring has strange characters in results](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results)
- [Date format has invisible characters in IE11](https://github.com/yahoo/react-intl/issues/201)

