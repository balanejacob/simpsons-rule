import React from "react";
import * as S from "./styles";
import SolutionPanel from "./solution-panel";
import IntroductionPanel from "./introduction-panel";
import ProgramPanel from "./program-panel";
import SpecificationPanel from "./specification-panel";
import ConclusionPanel from "./conclusion-panel";

type MainContainerPropsType = {
  isActive: string;
  values: number[] | undefined;
  der_const: number[] | undefined;
  der_expo: number[] | undefined;
  lower_array: number[] | undefined;
  upper_array: number[] | undefined;
  max: number;
  n: number;
};

export default function MainContainer(props: MainContainerPropsType) {
  const {
    isActive,
    values,
    der_const,
    der_expo,
    lower_array,
    upper_array,
    max,
    n,
  } = props;
  return (
    <S.RightContainer>
      <IntroductionPanel isActive={isActive === "1"} />
      <ProgramPanel
        isActive={isActive === "2"}
        values={values}
        der_const={der_const}
        der_expo={der_expo}
        lower_array={lower_array}
        upper_array={upper_array}
        max={max}
        n={n}
      />
      <SpecificationPanel isActive={isActive === "3"} />
      <ConclusionPanel isActive={isActive === "4"} />
      <SolutionPanel isActive={isActive === "5"} />
    </S.RightContainer>
  );
}
