import React, { useState } from "react";

import * as S from "./components/styles";

import Sidebar from "./components/sidebar";
import MainContainer from "./components/main-container";

export default function App(): JSX.Element {
  const [isPanelToggle, setPanelToggle] = useState("1");

  const handlePanelToggle = (value: string) => {
    setPanelToggle(value);
  };

  return (
    <S.App>
      <Sidebar handlePanelToggle={handlePanelToggle} />
      <MainContainer isActive={isPanelToggle} />
    </S.App>
  );
}
