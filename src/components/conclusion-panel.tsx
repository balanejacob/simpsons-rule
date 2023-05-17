import React from "react";
type ConclusionPanelPropsType = {
  isActive: boolean;
};
export default function ConclusionPanel(props: ConclusionPanelPropsType) {
  const { isActive } = props;
  return (
    <div
      className={`h-full w-full bg-color2 drop-shadow-sm border rounded-md p-6 ${
        isActive ? "block" : "hidden"
      }`}
    >
      Conclusion
    </div>
  );
}
