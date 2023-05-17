import React from "react";
type IntroductionPanelPropsType = {
  isActive: boolean;
};

export default function IntroductionPanel(props: IntroductionPanelPropsType) {
  const { isActive } = props;
  return (
    <div
      className={`h-full w-full bg-color2 drop-shadow-sm border rounded-md p-6 ${
        isActive ? "block" : "hidden"
      }`}
    >
      Introduction
    </div>
  );
}
