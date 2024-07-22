import {includesDotAndComma, includesMoreThanOneDot, isLastCharacterValid} from './utils'

export const DEFAULT_PX_UNIT: number = 16

export const getRemsFromPx = (px: string, unit: number = DEFAULT_PX_UNIT): string => {
  if (isNaN(Number(px))) {
    throw new Error('The value introduced is not a valid number')
  }
  if (!px) return ''
  try {
    const result = Number(px) / unit
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

export const getPxFromRem = (rem: string, unit: number = DEFAULT_PX_UNIT): string => {
  if (isNaN(Number(rem))) {
    throw new Error('The value introduced is not a valid number')
  }
  if(!rem) return ''
  try {
    const result = Number(rem) * unit
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

const hasMoreThanTwoDecimals = (num: number) =>
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