export const isLastCharacterValid = (value: string, allowedValues: string[]): boolean =>
  allowedValues.includes(value.charAt(value.length - 1))
export const includesMoreThanOneDot = (value: string): boolean =>
  value.includes('.') && value.split('.').length > 2

export const includesDotAndComa = (value: string): boolean => 
  value.includes('.') && value.includes(',')

export const cleanStringNumber = (value: string): string =>
  value
    .replace(',', '.')
    .replace('..', '.')
    .replace(',,', '.')
    .replace(' ', '')
    