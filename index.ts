export const generateCleanNumber = (num: any): number => {
  return isNaN(num)
  ? parseFloat(num.toString().replace(/[^0-9,.]/g, ""))
    : parseFloat(num)
}

export const filterNaNfromNumber = (num: any): number => {
  if (typeof num === 'number') return num
  const numArray: string[] = num.split("")
  const filteredNumArray = numArray.filter((char: string) => !isNaN(parseInt(char, 10)) || char === ".")
  const filteredNumString = filteredNumArray.join("")
  return parseFloat(filteredNumString)
}
