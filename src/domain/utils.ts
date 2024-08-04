import {isValidValue} from './pixel-to-rem'

export const isLastCharacterValid = (value: string, allowedValues: string[]): boolean =>
  allowedValues.includes(value.charAt(value.length - 1))
export const includesMoreThanOneDot = (value: string): boolean =>
  value.includes('.') && value.split('.').length > 2

export const includesDotAndComma = (value: string): boolean => 
  value.includes('.') && value.includes(',')

export const cleanStringNumber = (value: string): string =>
  value
    .replace(',', '.')
    .replace('..', '.')
    .replace(',,', '.')
    .replace(' ', '')
    
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setValueGuard = (value: string, callback: (...args: any[]) => void, ...args: any[]) => {
  const isValid = isValidValue(value)

  if (isValid) {
    const parsedValue = cleanStringNumber(value)
    callback(parsedValue, ...args)
  }
}