import { KOREAN_NUMBERS, CHINESE_NUMBERS } from './constants'

function nextFourDigitsHaveNonZero (index, inputString) {
  for (let j = index + 1; j <= index + 3; j++) {
    if (j < inputString.length && inputString.charAt(j) !== '0') {
      return true
    }
  }

  return false
}

function reverseString (str) {
  return str.split('').reverse().join('')
}

export const getKoreanNumber = (number, hour) => {
  if (!number || number === 0 || number > 99) { return '-' }

  const reversedNumber = reverseString(number.toString())
  const units = reversedNumber.charAt(0)
  const tens = reversedNumber.charAt(1)
  let output = ''

  // First we set the units
  output = hour ? KOREAN_NUMBERS.units_time[units] : KOREAN_NUMBERS.units[units]

  // Then we set the tens
  if (tens) {
    output = KOREAN_NUMBERS.tens[tens] + output
  }

  return output
}

export const getChineseNumber = (number) => {
  if (!number || number === 0 || number > 999999999999999 || number < 1) { return '-' }

  const numberAsStringReversed = reverseString(number.toString())

  let output = ''

  const firstChar = numberAsStringReversed.charAt(0)

  output = (firstChar > 0 ? CHINESE_NUMBERS[0][firstChar] : '') + output

  for (let i = 1; i < numberAsStringReversed.length; i++) {
    const currentChar = numberAsStringReversed.charAt(i)

    const isBreakPoint = i === 4

    if (isBreakPoint) {
      output = ' ' + output
    }

    const new10XPart = (currentChar > 0 || (isBreakPoint && nextFourDigitsHaveNonZero(i, numberAsStringReversed))) ? CHINESE_NUMBERS[i] : ''

    output = new10XPart + output

    const new10XMultiplierPart = (currentChar > 1 || (isBreakPoint && nextFourDigitsHaveNonZero(i, numberAsStringReversed))) ? CHINESE_NUMBERS[0][currentChar] : ''
    output = new10XMultiplierPart + output
  }

  return output.trim()
}
