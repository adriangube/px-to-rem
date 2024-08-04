import React from 'react'
import styles from './converter-layout.module.css'
import { useRouter } from 'next/navigation'

export type ConverterLayoutProps = {
  firstUnit: string
  secondUnit: string
  onFirstUnitChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void
  onSecondUnitChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void
  defaultConversionUnit: number
  onDefaultConversionUnitChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void
  firstUnitLabel: string
  secondUnitLabel: string
  defaultConversionUnitLabel: string
  switchRoute: string
}

export const ConverterLayout = ({
  firstUnit,
  secondUnit,
  onFirstUnitChangeHandler,
  onSecondUnitChangeHandler,
  defaultConversionUnit,
  onDefaultConversionUnitChangeHandler,
  firstUnitLabel,
  secondUnitLabel,
  defaultConversionUnitLabel,
  switchRoute
}: ConverterLayoutProps): JSX.Element => {
  
  const router = useRouter()
  const onSwitchHandler = () => {
    router.push(switchRoute)
  }

  return (
    <div className={styles['converter-layout__main']}>
      <h2>{firstUnitLabel} to {secondUnitLabel}</h2>
      <input
        type="text"
        value={firstUnit}
        placeholder={firstUnitLabel}
        onChange={onFirstUnitChangeHandler}
      />
      <div onClick={onSwitchHandler}>Switch</div>
      <input
        type="text"
        value={secondUnit}
        placeholder={secondUnitLabel}
        onChange={onSecondUnitChangeHandler}
      />
      <div>
        <span>Default</span>
        <input
          type="text"
          value={defaultConversionUnit}
          onChange={onDefaultConversionUnitChangeHandler}
          placeholder={defaultConversionUnitLabel}
        />
        <span>{defaultConversionUnitLabel}</span>
      </div>
    </div>
  )
}