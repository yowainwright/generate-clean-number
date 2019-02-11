/**
  * generateCleanNumber
  * {num} Number
  * reparse num if NaN (happens in IE)
  * regex pattern
  */
export const generateCleanNumber = (num: any): number => {
  return isNaN(num)
  ? parseInt(num.toString().replace(/[^0-9]/g, ''), 10)
  : num
}

/**
  * const filterNaNfromNumber
  * {num} Number
  * reparse num if NaN (happens in IE)
  * array filter pattern
  */
export const filterNaNfromNumber = (num: any): number => {
  if (typeof num === 'number') return num 
  const numArray = number.split('')
  const filteredNumArray = num.filter(char => typeof char === 'number')
  const filteredNumString = num.join('')
  return parseInt(filteredNumString, 10)
}