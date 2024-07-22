'use client'

import React, { useEffect, useState } from 'react'
import { DEFAULT_PX_UNIT, getPxFromRem, getRemsFromPx } from '@/domain/pixel-to-rem'
import styles from './px-to-rem.module.css'
import { setValueGuard } from '@/domain/utils'

export const PxToRemPage = (): JSX.Element => {
  const [defaultPxUnit, setDefaultPxUnit] = useState<number>(DEFAULT_PX_UNIT)
  const [px, setPx] = useState<string | undefined>('16')
  const [rem, setRem] = useState<string | undefined>('1')

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

  const onDefaultPxToRemHandler = (event: React.FormEvent<HTMLInputElement>) => {
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
