import integral from "../images/integral.png";

type FormulaContainerPropsType = {
  onChange: (event: any) => void;
  hasValue: boolean;
};

export default function FormulaContainer(
  props: FormulaContainerPropsType
): JSX.Element {
  const { onChange, hasValue } = props;

  return (
    <div className="h-2/5 w-full items-center font-noto italic text-2xl gap-x-2 flex ">
      <img
        src={integral}
        alt="integral-icon"
        className="h-4/5 w-2/12  select-none"
      ></img>
      <input
        type="text"
        className={`w-8/12 rounded-lg text-base h-2/3 p-4 font-medium border placeholder:
        font-noto placeholder:font-thin placeholder:italic placeholder:tracking-wide focus:outline-0 ${
          !hasValue && "border-color8"
        }`}
        placeholder="Input f(x)"
        onChange={onChange}
      />
      <p className="w-2/12 select-none">dx</p>
    </div>
  );
}
