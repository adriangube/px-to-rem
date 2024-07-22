import { getFirstFromSecond, getSecondFromFirst } from '@/domain/pixel-to-rem'
import { setValueGuard } from '@/domain/utils'
import { useEffect, useState } from 'react'

interface UserConverterProps {
    firstUnit: string
    secondUnit: string
    defaultUnit: number
}
export const useConverter = ({
  firstUnit,
  secondUnit,
  defaultUnit
}: UserConverterProps) => {

  const [converterUnit, setConverterUnit] = useState<number>(defaultUnit)
  const [first, setFirst] = useState<string>(firstUnit)
  const [second, setSecond] = useState<string>(secondUnit)

  const resetUnits = () => {
    setFirst('')
    setSecond('')
  }
  const onFirstUnitChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value

    const setValue = (newValue: string, unit: number) => {
      if (newValue) {
        setFirst(newValue)
        setSecond(getSecondFromFirst(newValue, unit))
      } else {
        resetUnits()
      }
    }
    setValueGuard(newValue, setValue, converterUnit)

  }
  const onSecondUnitChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value
    const setValue = (newValue: string, unit: number) => {
      if (newValue) {
        setSecond(newValue)
        setFirst(getFirstFromSecond(newValue, unit))
      } else {
        resetUnits()
      }
    }
    setValueGuard(newValue, setValue, converterUnit)
  }

  const onConverterUnitChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value

    const setValue = (value: string) => {
      const numericValue = Number(value)
    
      if (isNaN(numericValue)) {
        throw new Error('The value introduced is not a valid number')
      }
      setConverterUnit(numericValue)
      
    }
    setValueGuard(newValue, setValue)
  }

  useEffect(() => {
    onSecondUnitChangeHandler({target: { value: second }} as unknown as React.FormEvent<HTMLInputElement>)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [converterUnit])
    
  return {
    converterUnit,
    first,
    second,
    onFirstUnitChangeHandler,
    onSecondUnitChangeHandler,
    onConverterUnitChangeHandler
  }
}