import React from "react";

type BoundPropsType = {
  label: string;
};

export default function Bound(props: BoundPropsType): JSX.Element {
  const { label } = props;

  return (
    <div className="w-full h-10">
      <input
        className="w-2/12 h-full text-center border border-gray-500"
        placeholder={label}
      />
    </div>
  );
}
