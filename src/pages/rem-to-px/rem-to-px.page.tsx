'use client'

import React  from 'react'
import { DEFAULT_PX_UNIT } from '@/domain/pixel-to-rem'
import {ConverterLayout} from '@/components/converter-layout/converter-layout'
import {useConverter} from '@/hooks/useConverter'
import {AppRoutes} from '@/domain/routes'

const RemToPxPage = (): JSX.Element => {
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
      firstUnit={second}
      secondUnit={first}
      onFirstUnitChangeHandler={onSecondUnitChangeHandler}
      onSecondUnitChangeHandler={onFirstUnitChangeHandler}
      defaultConversionUnit={converterUnit}
      onDefaultConversionUnitChangeHandler={onConverterUnitChangeHandler}
      firstUnitLabel='Rem'
      secondUnitLabel='Px'
      defaultConversionUnitLabel='Px'
      switchRoute={AppRoutes.PX_TO_REM}
    />
  )
}

export default RemToPxPage