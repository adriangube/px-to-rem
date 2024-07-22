'use client'

import React, { useEffect, useState } from 'react'
import { DEFAULT_PX_UNIT, getPxFromRem, getRemsFromPx } from '@/domain/pixel-to-rem'
import { setValueGuard } from '@/domain/utils'
import {ConverterLayout} from '@/components/converter-layout/converter-layout'

export const PxToRemPage = (): JSX.Element => {
  const [defaultPxUnit, setDefaultPxUnit] = useState<number>(DEFAULT_PX_UNIT)
  const [px, setPx] = useState<string>('16')
  const [rem, setRem] = useState<string>('1')

  const resetUnits = () => {
    setPx('')
    setRem('')
  }
  const onPxChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value

    const setValue = (newValue: string, unit: number) => {
      if (newValue) {
        setPx(newValue)
        setRem(getRemsFromPx(newValue, unit))
      } else {
        resetUnits()
      }
    }
    setValueGuard(newValue, setValue, defaultPxUnit)

  }
  const onRemChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value
    const setValue = (newValue: string, unit: number) => {
      if (newValue) {
        setRem(newValue)
        setPx(getPxFromRem(newValue, unit))
      } else {
        resetUnits()
      }
    }
    setValueGuard(newValue, setValue, defaultPxUnit)
  }

  const onDefaultUnitChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value

    const setValue = (value: string) => {
      const numericValue = Number(value)
    
      if (isNaN(numericValue)) {
        throw new Error('The value introduced is not a valid number')
      }
      setDefaultPxUnit(numericValue)
      
    }
    setValueGuard(newValue, setValue)
  }

  useEffect(() => {
    onRemChangeHandler({target: { value: rem }} as unknown as React.FormEvent<HTMLInputElement>)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultPxUnit])
  return (
    <ConverterLayout
      firstUnit={px}
      secondUnit={rem}
      onFirstUnitChangeHandler={onPxChangeHandler}
      onSecondUnitChangeHandler={onRemChangeHandler}
      defaultConversionUnit={defaultPxUnit}
      onDefaultConversionUnitChangeHandler={onDefaultUnitChangeHandler}
      firstUnitLabel='Px'
      secondUnitLabel='Rem'
      defaultConversionUnitLabel='Px'
    />
  )
}
