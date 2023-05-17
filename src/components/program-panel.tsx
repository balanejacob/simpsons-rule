import React from "react";
type ProgramPanelPropsType = {
  isActive: boolean;
};
export default function ProgramPanel(props: ProgramPanelPropsType) {
  const { isActive } = props;
  return (
    <div
      className={`h-full w-full bg-color2 drop-shadow-sm border rounded-md p-6 ${
        isActive ? "block" : "hidden"
      }`}
    >
      Program
    </div>
  );
}
