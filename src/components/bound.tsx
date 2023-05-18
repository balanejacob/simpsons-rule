import React from "react";

type BoundPropsType = {
  label: string;
  onChange: (event: any) => void;
  hasValue: boolean;
};

export default function Bound(props: BoundPropsType): JSX.Element {
  const { label, onChange, hasValue } = props;

  return (
    <div className="w-full h-10 ">
      <input
        className={`w-3/12 h-full text-center rounded-lg border focus:outline-0 placeholder:font-noto ${
          !hasValue && "border-color9"
        }`}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
}
