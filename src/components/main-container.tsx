import React from "react";
import * as S from "./styles";
import SolutionPanel from "./solution-panel";
import IntroductionPanel from "./introduction-panel";
import ProgramPanel from "./program-panel";
import SpecificationPanel from "./specification-panel";
import ConclusionPanel from "./conclusion-panel";

type MainContainerPropsType = {
  isActive: string;
};

export default function MainContainer(props: MainContainerPropsType) {
  const { isActive } = props;
  return (
    <S.RightContainer>
      <IntroductionPanel isActive={isActive === "1"} />
      <ProgramPanel isActive={isActive === "2"} />
      <SpecificationPanel isActive={isActive === "3"} />
      <ConclusionPanel isActive={isActive === "4"} />
      <SolutionPanel isActive={isActive === "5"} />
    </S.RightContainer>
  );
}
