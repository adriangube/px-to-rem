import React from 'react'
import styles from './converter-layout.module.css'
import { useRouter } from 'next/navigation'
import ReloadIcon from '@/assets/reload.svg'
import Image from 'next/image'

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
      <div className={styles.row}>
        <div className={styles['converter-layout_form-group']}>
          <label htmlFor="first-unit-input">{firstUnitLabel}</label>
          <input
            className={styles.input}
            name="first-unit-input"
            type="text"
            value={firstUnit}
            placeholder={firstUnitLabel}
            onChange={onFirstUnitChangeHandler}
          />
        </div>
        <div className={styles['switcher-container']} onClick={onSwitchHandler}>
          <Image
            src={ReloadIcon}
            alt="switch icon"
          />
        </div>
        <div className={styles['converter-layout_form-group']}>
          <label htmlFor="second-unit-input">{secondUnitLabel}</label>
          <input
            className={styles.input}
            name="second-unit-input"
            type="text"
            value={secondUnit}
            placeholder={secondUnitLabel}
            onChange={onSecondUnitChangeHandler}
          />
        </div>
      </div>
      <div className={`${styles.row} ${styles['force-row']}`}>
        <span className={styles.text}>Calculation based on a root font-size of </span>
        <input
          className={`${styles.input} ${styles.small}`}
          type="text"
          value={defaultConversionUnit}
          onChange={onDefaultConversionUnitChangeHandler}
          placeholder={defaultConversionUnitLabel}
        />
        <span className={styles.text}>{defaultConversionUnitLabel}</span>
      </div>
    </div>
  )
}