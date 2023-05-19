import React, { useEffect, useState } from "react";

import * as S from "./components/styles";

import Sidebar from "./components/sidebar";
import MainContainer from "./components/main-container";

export default function App(): JSX.Element {
  const [isPanelToggle, setPanelToggle] = useState("1");
  const [isValue, setValue] = useState<number[]>([1, 1, 1, 1, 0.001]);

  const [isDerivativeConstantArray, setDerivativeConstantArray] = useState<
    number[]
  >([0, 0, 0, 0]);
  const [isDerivativeExponentArray, setDerivativeExponentArray] = useState<
    number[]
  >([0, 0, 0, 0]);

  const [isUpperbound, setUpperbound] = useState<number[]>([0, 0, 0, 0]);
  const [isLowerbound, setLowerbound] = useState<number[]>([0, 0, 0, 0]);

  const [isMax, setMax] = useState<number>(0);
  const [isNumber, setNumber] = useState<number[]>([0, 0, 0]);
  const [isDelta, setDelta] = useState<number>(0);
  const [isEndValues, setEndValues] = useState<number[]>([]);
  const [isOddValue, setOddValue] = useState<number>(0);
  const [isEvenValue, setEvenValue] = useState<number>(0);
  const [isAnswer, setAnswer] = useState<number>(0);

  const handlePanelToggle = (value: string): void => {
    setPanelToggle(value);
  };
  const handleValues = (value: number[]): void => {
    setValue(value);
    solveSimpsons();
  };

  const handleComputation = (
    constant: number,
    x: number,
    exponent: number
  ): number => {
    let num = x;
    let retVal = constant;
    if (exponent > 0) {
      num = num ** exponent;
      retVal *= num;
    }

    return retVal;
  };

  const solveSimpsons = () => {
    let arrayConstant = [];
    let arrayExponent = [];
    let arrayUpper = [];
    let arrayLower = [];
    let lower = isValue[0];
    let upper = isValue[1];
    let constant = isValue[2];
    let exponent = isValue[3];

    for (let n = 1; n <= 4; n++) {
      constant *= exponent;
      exponent -= 1;
      arrayConstant.push(constant);
      arrayExponent.push(exponent);
      arrayUpper.push(handleComputation(constant, upper, exponent));
      arrayLower.push(handleComputation(constant, lower, exponent));
    }

    setDerivativeConstantArray(arrayConstant);
    setDerivativeExponentArray(arrayExponent);
    setUpperbound(arrayUpper);
    setLowerbound(arrayLower);
  };

  function findN() {
    let max = isMax;
    let lower = isValue[0];
    let upper = isValue[1];
    let error = isValue[4];
    let answer = 0;
    let n_rounded = 0;

    answer = Math.pow((max * Math.pow(upper - lower, 5)) / 180 / error, 1 / 4);
    n_rounded = Math.round(answer);
    setNumber([
      answer,
      n_rounded,
      n_rounded % 2 === 0 ? n_rounded : n_rounded + 1,
    ]);
  }

  function findDelta() {
    let lower = isValue[0];
    let upper = isValue[1];
    let n = isNumber[2];
    setDelta((upper - lower) / n);
  }

  function findInitialValues() {
    let num = isValue[0];
    let init_array = [];
    let max = isNumber[2];
    let delta = isDelta;
    let ends = [isValue[0], isValue[1]];
    let oddArr = [];
    let evenArr = [];
    let total = 0;

    for (let n = 0; n < max - 1; n++) {
      num += delta;
      init_array.push(num);
    }

    for (let n = 0; n < max - 1; n++) {
      if (n % 2 !== 0) evenArr.push(init_array[n]);
      else oddArr.push(init_array[n]);
    }

    for (let n = 0; n < oddArr.length; n++) {
      oddArr[n] *= 4;
    }

    for (let n = 0; n < evenArr.length; n++) {
      evenArr[n] *= 2;
    }

    for (let n = 0; n < oddArr.length; n++) {
      total += oddArr[n];
    }

    setOddValue(total);

    total = 0;

    for (let n = 0; n < evenArr.length; n++) {
      total += evenArr[n];
    }

    setEvenValue(total);
    setEndValues(ends);
  }

  function findAnswer() {
    setAnswer(
      (isDelta / 3) *
        (isEndValues[0] + isEndValues[1] + isOddValue + isEvenValue)
    );
  }

  useEffect(() => {
    solveSimpsons();
    setMax(Math.max(...isUpperbound, ...isLowerbound));
  }, [isValue]);

  useEffect(() => {
    setMax(Math.max(...isUpperbound, ...isLowerbound));
  }, [isLowerbound]);

  useEffect(() => {
    findN();
  }, [isMax, isValue]);

  useEffect(() => {
    findDelta();
  }, [isNumber]);

  useEffect(() => {
    findInitialValues();
  }, [isDelta, isValue]);

  useEffect(() => {
    findAnswer();
  }, [isEndValues, isEvenValue, isOddValue]);

  return (
    <S.App>
      <Sidebar
        handlePanelToggle={handlePanelToggle}
        isActive={isPanelToggle}
        handleValues={handleValues}
      />
      <MainContainer
        isActive={isPanelToggle}
        values={isValue}
        der_const={isDerivativeConstantArray}
        der_expo={isDerivativeExponentArray}
        lower_array={isLowerbound}
        upper_array={isUpperbound}
        max={isMax}
        n={isNumber}
        delta={isDelta}
        odd_values={isOddValue}
        even_values={isEvenValue}
        end_values={isEndValues}
        answer={isAnswer}
      />
    </S.App>
  );
}
