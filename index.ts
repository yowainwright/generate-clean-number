/**
  * generateCleanNumber
  * {num} Number
  * reparse num if NaN (happens in IE)
  */
const generateCleanNumber = (num: any): number => {
  return isNaN(num)
  ? parseInt(num.toString().replace(/[^0-9]/g, ''), 10)
  : num
}