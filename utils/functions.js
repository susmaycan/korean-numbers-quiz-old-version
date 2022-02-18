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

export const getKoreanNumber = (number, useAbbreviated = false) => {
  if (!number || number === 0) { return '-' }
  if (number > 99) {
    return 'Error! Only numbers < 100 exist in the Korean system.'
  }

  const numberAsStringReversed = reverseString(number.toString())

  let output = ''

  output = KOREAN_NUMBERS[0][useAbbreviated ? 'abbreviated' : 'normal'][numberAsStringReversed.charAt(0)] + output

  if (numberAsStringReversed.charAt(1)) {
    output = KOREAN_NUMBERS[1][numberAsStringReversed.charAt(1)] + output
  }

  return output
}

export const getChineseNumber = (number) => {
  if (!number || number === 0) { return '-' }
  if (number > 999999999999999 || number < 1) {
    return 'Only numbers between 1 and 999999999999999 supported.'
  }

  const numberAsStringReversed = reverseString(number.toString())

  let output = ''

  const currentChar = numberAsStringReversed.charAt(0)

  output = (currentChar > 0 ? CHINESE_NUMBERS[0][currentChar] : '') + output

  for (let i = 1; i < numberAsStringReversed.length; i++) {
    const currentChar = numberAsStringReversed.charAt(i)

    const isBreakPoint = [4, 8, 12, 16].includes(i)

    if (isBreakPoint) {
      output = ' ' + output
    }

    const new10XPart = (currentChar > 0 || (isBreakPoint && nextFourDigitsHaveNonZero(i, numberAsStringReversed))) ? CHINESE_NUMBERS[i] : ''

    output = new10XPart + output

    const new10XMultiplierPart = (currentChar > 1 || ([8, 12, 16].includes(i) && (numberAsStringReversed.length - 1 === i)) || (isBreakPoint && nextFourDigitsHaveNonZero(i, numberAsStringReversed))) ? CHINESE_NUMBERS[0][currentChar] : ''
    output = new10XMultiplierPart + output
  }

  return output.trim()
}

export const removeSpaces = (str) => {
  return str.replace(/ /g, '')
}
