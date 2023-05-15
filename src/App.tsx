import React, { useState } from "react";

import * as S from "./components/styles";
import FormulaContainer from "./components/formula";
import Bound from "./components/bound";
import MainComponent from "./components/main-component";

export default function App(): JSX.Element {
  const [isSolutionToggle, setSolutionToggle] = useState(false);

  const handleToggleSolution = () => {
    setSolutionToggle(true);
  };

  return (
    <S.App>
      <S.LeftContainer>
        <S.TitleText>Simpson's Rule</S.TitleText>
        <S.Container>
          <S.HeaderText>Input Data</S.HeaderText>
          <S.FormulaContainer>
            <Bound label="b" />
            <FormulaContainer />
            <Bound label="a" />
            <div className="w-full h-10 mt-6 flex items-center gap-x-2 justify-center">
              <p className="font-semibold select-none">n = </p>
              <input
                className="w-2/12 h-full text-center border border-gray-500 rounded-md"
                placeholder="n"
              />
            </div>
          </S.FormulaContainer>
          <div className="h-1/6 flex justify-center items-center select-none p-4 ">
            <S.Button onClick={handleToggleSolution}>Calculate</S.Button>
          </div>
        </S.Container>
      </S.LeftContainer>
      <S.RightContainer>
        <S.AnswerContainer>
          <div className="text-sm select-none items-center flex h-12 gap-x-6">
            <p className="font-bold">Answer :</p>
            <p className="text-2xl select-text mb-2">0.123456789</p>
          </div>
        </S.AnswerContainer>
        <MainComponent isActive={isSolutionToggle} />
      </S.RightContainer>
    </S.App>
  );
}
