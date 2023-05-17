import React from "react";
type SpecificationPanelPropsType = {
  isActive: boolean;
};
export default function SpecificationPanel(props: SpecificationPanelPropsType) {
  const { isActive } = props;
  return (
    <div
      className={`h-full w-full bg-color2 drop-shadow-sm border rounded-md p-6 ${
        isActive ? "block" : "hidden"
      }`}
    >
      Specification
    </div>
  );
}
