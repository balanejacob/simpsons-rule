import React, { useState } from "react";

import * as S from "./components/styles";
import FormulaContainer from "./components/formula";

export default function App(): JSX.Element {
  const [isAnswerToggle, setAnswerToggle] = useState(false);

  const handleToggleSolution = () => {
    setAnswerToggle(!isAnswerToggle);
  };

  return (
    <S.App>
      <S.LeftContainer>
        <S.TitleText>Simpson's Rule</S.TitleText>
        <S.Container>
          <S.HeaderText>Input Data</S.HeaderText>
          <S.FormulaContainer>
            <div className="w-full h-10">
              <input
                className="w-2/12 h-full text-center border border-gray-500 rounded-md"
                placeholder="b"
              />
            </div>
            <FormulaContainer />
            <div className="w-full h-10">
              <input
                className="w-2/12 h-full text-center border border-gray-500 rounded-md"
                placeholder="a"
              />
            </div>
            <div className="w-full h-10 mt-6 flex items-center gap-x-2 justify-center">
              <p className="font-semibold">n = </p>
              <input
                className="w-2/12 h-full text-center border border-gray-500 rounded-md"
                placeholder="n"
              />
            </div>
          </S.FormulaContainer>
          <div className="h-1/6 flex justify-center items-center select-none">
            <S.Button>Solve</S.Button>
          </div>
        </S.Container>
      </S.LeftContainer>
      <S.RightContainer>
        <S.AnswerContainer>
          <div
            className="text-sm font-semibold select-none"
            onClick={handleToggleSolution}
          >
            Answer
          </div>
        </S.AnswerContainer>
        <S.SolutionContainer isActive={isAnswerToggle}>
          <div
            className="text-sm font-semibold select-none"
            onClick={handleToggleSolution}
          >
            Show Solution
          </div>
        </S.SolutionContainer>
      </S.RightContainer>
    </S.App>
  );
}
