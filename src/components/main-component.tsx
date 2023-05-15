import React from "react";

import * as S from "./styles";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import SectionLabel from "./section-label";

type MainComponentPropsType = {
  isActive: boolean;
};

export default function MainComponent(props: MainComponentPropsType) {
  const { isActive } = props;
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <S.SolutionContainer>
      <div className="font-bold select-none flex items-center p-10">
        <p className="text-sm ">Solution :</p>
      </div>
      <div className="font-semibold select-none h-full overflow-auto px-10 mb-10">
        <S.HiddenContainer isActive={isActive}>
          <S.SectionContainer>
            <SectionLabel label="Simpson's 1/3 Rule Formula" />
            <MathJaxContext config={config}>
              {
                <MathJax>
                  {
                    "`int_{a}^{b} f(x)dxapprox\\frac{h}{3}[y_{0}+y_{n}+4sum_1^\\frac{n}{2}y_{2i-1}+2sum_1^left(\\frac{n}{2}-1\\right) y_{2i}]`"
                  }
                </MathJax>
              }
            </MathJaxContext>
          </S.SectionContainer>
          <S.SectionContainer>
            <SectionLabel label="Create Table" />
          </S.SectionContainer>
          <S.SectionContainer>
            <SectionLabel label="Solve for " />
          </S.SectionContainer>
          <S.SectionContainer>
            <SectionLabel label="Solve for " />
          </S.SectionContainer>
        </S.HiddenContainer>
      </div>
    </S.SolutionContainer>
  );
}
