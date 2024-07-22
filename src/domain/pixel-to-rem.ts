import {includesDotAndComma, includesMoreThanOneDot, isLastCharacterValid} from './utils'

export const DEFAULT_PX_UNIT: number = 16

export const getSecondFromFirst = (firstUnitValue: string, unit: number): string => {
  if (isNaN(Number(firstUnitValue))) {
    throw new Error('The value introduced is not a valid number')
  }
  if (!firstUnitValue) return ''
  try {
    const result = Number(firstUnitValue) / unit
    if (isNaN(result)) {
      throw new Error('The value introduced is not a valid number')
    }
    return hasMoreThanTwoDecimals(result)
      ? result.toFixed(2)
      : result.toString()
  } catch {
    return ''
  }
}

export const getFirstFromSecond = (secondUnitValue: string, unit: number): string => {
  if (isNaN(Number(secondUnitValue))) {
    throw new Error('The value introduced is not a valid number')
  }
  if(!secondUnitValue) return ''
  try {
    const result = Number(secondUnitValue) * unit
    if (isNaN(result)) {
      throw new Error('The value introduced is not a valid number')
    }
    return hasMoreThanTwoDecimals(result)
      ? result.toFixed(2)
      : result.toString()
  } catch {
    return ''
  }
}

export const getRemsFromPx = (px: string, unit: number = DEFAULT_PX_UNIT): string => {
  return getSecondFromFirst(px, unit)
}

export const getPxFromRem = (rem: string, unit: number = DEFAULT_PX_UNIT): string => {
  return getFirstFromSecond(rem, unit)
}


export const hasMoreThanTwoDecimals = (num: number) =>
  num.toString().split('.')[1]?.length > 2 || false
  
export const allowedValues = [
  '0',
  '1', 
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ',',
  '.'
]

export const isValidValue = (value: string) => {
  if (value) {
    if (!isLastCharacterValid(value, allowedValues)) return false
    if (includesMoreThanOneDot(value)) return false
    if (includesDotAndComma(value)) return false
  }
  return true
}