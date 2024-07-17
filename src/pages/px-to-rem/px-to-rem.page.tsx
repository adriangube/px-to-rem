'use client';

import React, {ChangeEventHandler, useState} from "react";
import styles from "./px-to-rem.module.css";

const hasMoreThanTwoDecimals = (num: number) =>
  num.toString().split(".")[1]?.length > 2 || false;


const getRemsFromPx = (px: string): string | undefined => {
  if (isNaN(Number(px))) {
    throw new Error("The value introduced is not a valid number");
  }
  if (!px) return
  try {
    let result = Number(px) / 16;
    if (isNaN(result)) {
      throw new Error('The value introduced is not a valid number')
    }
      return hasMoreThanTwoDecimals(result)
        ? result.toFixed(2)
        : result.toString();
  } catch {
    return
  }
}


const getPxFromRem = (rem: string): string | undefined => {
  if (isNaN(Number(rem))) {
    throw new Error("The value introduced is not a valid number");
  }
  if(!rem) return
  try {
    let result = Number(rem) * 16;
    if (isNaN(result)) {
      throw new Error("The value introduced is not a valid number");
    }
    return hasMoreThanTwoDecimals(result)
      ? result.toFixed(2)
      : result.toString();
  } catch {
    return 
  }
}

export const PxToRemPage = (): JSX.Element => {
  const DEFAULT_PX_UNIT = '16';
  const [defaultPxUnit, setDefaultPxUnit] = useState(DEFAULT_PX_UNIT);
  const [px, setPx] = useState<string | undefined>('16');
  const [rem, setRem] = useState<string | undefined>('1');

  const onPxChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value;
    const parsedValue = newValue.replace(',', '.');
    if (parsedValue) {
      setPx(parsedValue);
      setRem(getRemsFromPx(parsedValue));
    } else {
      setPx(undefined);
      setRem(undefined);
    }
  };

  const onRemChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value;
    if (newValue.includes(".") && newValue.split('.').length > 2) return
    if (newValue.includes(".") && newValue.includes(',')) return 
      const parsedValue = newValue
        .replace(",", ".")
        .replace("..", ".")
        .replace(",,", ".")
        .replace(' ', '')
    

    if (parsedValue) {
      setRem(parsedValue);
      setPx(getPxFromRem(parsedValue));
    } else {
      setRem(undefined);
      setPx(undefined);
    }
  };

  return (
    <div className={styles.px_to_rem_page__main}>
      <h2>Px to Rem</h2>
      <input
        type="text"
        value={px}
        step="0.1"
        pattern="^[1-9]\d*(\.\d+)?$"
        placeholder="pixels"
        onChange={onPxChangeHandler}
      />
      <input
        type="text"
        value={rem}
        pattern="^[1-9]\d*(\.\d+)?$"
        step="0.1"
        placeholder="rem"
        onChange={onRemChangeHandler}
      />
    </div>
  );
};
