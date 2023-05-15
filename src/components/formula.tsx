import integral from "../images/integral.png";

export default function FormulaContainer(): JSX.Element {
  return (
    <div className="h-2/5 w-full items-center font-noto italic text-5xl gap-x-2 flex ">
      <img
        src={integral}
        alt="integral-icon"
        className="h-4/5 mr-3 w-2/12  select-none"
      ></img>
      <input
        type="text"
        className="w-8/12 rounded-lg text-base h-2/3 p-4 font-noto font-medium border border-gray-500 placeholder:font-noto placeholder:font-thin placeholder:italic placeholder:tracking-wide"
        placeholder="Input f(x)"
      />
      <p className="w-2/12  select-none">dx</p>
    </div>
  );
}
