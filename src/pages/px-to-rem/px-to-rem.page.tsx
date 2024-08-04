'use client'

import React  from 'react'
import { DEFAULT_PX_UNIT } from '@/domain/pixel-to-rem'
import {ConverterLayout} from '@/components/converter-layout/converter-layout'
import {useConverter} from '@/hooks/useConverter'
import {AppRoutes} from '@/domain/routes'

const PxToRemPage = (): JSX.Element => {
  const {
    first, 
    second,
    converterUnit,
    onFirstUnitChangeHandler,
    onSecondUnitChangeHandler,
    onConverterUnitChangeHandler
  } = useConverter({
    firstUnit: '16',
    secondUnit: '1',
    defaultUnit: DEFAULT_PX_UNIT
  })
  return (
    <ConverterLayout
      firstUnit={first}
      secondUnit={second}
      onFirstUnitChangeHandler={onFirstUnitChangeHandler}
      onSecondUnitChangeHandler={onSecondUnitChangeHandler}
      defaultConversionUnit={converterUnit}
      onDefaultConversionUnitChangeHandler={onConverterUnitChangeHandler}
      firstUnitLabel='Px'
      secondUnitLabel='Rem'
      defaultConversionUnitLabel='Px'
      switchRoute={AppRoutes.REM_TO_PX}
    />
  )
}

export default PxToRemPage