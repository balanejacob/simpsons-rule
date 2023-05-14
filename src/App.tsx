import React, { useState } from "react";

import * as S from "./components/styles";

export default function AddModal(): JSX.Element {
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
          <S.FormulaContainer></S.FormulaContainer>
          <div className="h-1/6 flex justify-center items-center select-none my-2">
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
