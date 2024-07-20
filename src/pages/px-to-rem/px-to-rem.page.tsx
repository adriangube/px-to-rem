'use client'

import React, { useState } from 'react'
import { DEFAULT_PX_UNIT, getPxFromRem, getRemsFromPx, isValidValue } from '@/domain/pixel-to-rem'
import styles from './px-to-rem.module.css'
import { cleanStringNumber } from '@/domain/utils'

export const PxToRemPage = (): JSX.Element => {
  const [defaultPxUnit, setDefaultPxUnit] = useState<number>(DEFAULT_PX_UNIT)
  const [px, setPx] = useState<string | undefined>('16')
  const [rem, setRem] = useState<string | undefined>('1')

  const resetUnits = () => {
    setPx('')
    setRem('')
  }

  const setValueOrReset = (value: string, callback: Function) => {
    const isValid = isValidValue(value)

    if (isValid) {
      const parsedValue = cleanStringNumber(value)

      if (parsedValue) {
        callback(parsedValue, defaultPxUnit)
      } else {
        resetUnits()
      }
    }
  }

  const onPxChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value

    const setValue = (newValue: string, unit: number) => {
      setPx(newValue)
      setRem(getRemsFromPx(newValue, unit))
    }
    setValueOrReset(newValue, setValue)
  
  }

  const onRemChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value
    const setValue = (newValue: string, unit: number) => {
      setRem(newValue)
      setPx(getPxFromRem(newValue, unit))
    }
    setValueOrReset(newValue, setValue)
  }

  const onDefaultPxToRemHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value
    const isValid = isValidValue(newValue)
    if (isValid) {
      const parsedValue = cleanStringNumber(newValue)
      const numericValue = Number(parsedValue)
    
      if (isNaN(numericValue)) {
        throw new Error('The value introduced is not a valid number')
      }
      setDefaultPxUnit(numericValue)
    }
    
  }

  return (
    <div className={styles.px_to_rem_page__main}>
      <h2>Px to Rem</h2>
      <input
        type="text"
        value={px}
        placeholder="pixels"
        onChange={onPxChangeHandler}
      />
      <input
        type="text"
        value={rem}
        placeholder="rem"
        onChange={onRemChangeHandler}
      />
      <div>
        <span>Default</span>
        <input
          type="text"
          value={defaultPxUnit}
          onChange={onDefaultPxToRemHandler}
          step="0.1"
          placeholder="pixels"
        />
        <span>px</span>
      </div>
    </div>
  )
}
