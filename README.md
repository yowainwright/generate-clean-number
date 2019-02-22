# Generate Clean Number #️⃣🖌

[![CircleCI](https://circleci.com/gh/yowainwright/generate-clean-number.svg?style=svg)](https://circleci.com/gh/yowainwright/generate-clean-number) [![Greenkeeper badge](https://badges.greenkeeper.io/yowainwright/generate-clean-number.svg?token=9e6575aeed4d6312e467055cb1908beebbac5314e2c55a5dd4437417e5631cde&ts=1550802853168)](https://greenkeeper.io/)


A JavaScript utility for removing anything that is not a number ([NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)) from a number.

There are situations, particularly with [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) where numbers are generated with extra characters in certain browsers. Generate Clear Number is a few line utility that strips characters that are not numbers from it. 

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

