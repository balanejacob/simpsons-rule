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
  const [isNumber, setNumber] = useState<number>(0);

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

  function fourthRoot() {
    return 1;
  }

  function findN() {
    let max = isMax;
    let lower = isValue[0];
    let upper = isValue[1];
    let error = isValue[4];
    let answer = 0;

    answer = Math.pow((max * Math.pow(upper - lower, 5)) / 180 / error, 1 / 4);
    setNumber(answer);
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
  }, [isMax]);

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
      />
    </S.App>
  );
}
