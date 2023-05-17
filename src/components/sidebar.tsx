import React, { useState } from "react";
import FormulaContainer from "./formula-container";
import Bound from "./bound";

import * as S from "./styles";
import SidebarButton from "./sidebar-button";

import { BiCalculator } from "react-icons/bi";

type SidebarPropsType = {
  handlePanelToggle: (value: string) => void;
};

export default function Sidebar(props: SidebarPropsType) {
  const { handlePanelToggle } = props;
  const [isSideButtonActive, setSideButtonActive] = useState("1");
  const [isFunction, setFunction] = useState(false);
  const [isSlice, setSlice] = useState(false);
  const [isLowerBound, setLowerBound] = useState(false);
  const [isUpperBound, setUpperBound] = useState(false);

  function handleSideButtonActive(value: string): void {
    setSideButtonActive(value);
    handlePanelToggle(isSideButtonActive);
  }

  function handleUpperBoundChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    console.log(event.target.value);
    setUpperBound(
      event.target.value === "" || isNaN(Number(event.target.value))
        ? false
        : true
    );
  }

  function handleLowerBoundChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setLowerBound(
      event.target.value === "" || isNaN(Number(event.target.value))
        ? false
        : true
    );
  }

  function handleSliceChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSlice(
      event.target.value === "" || isNaN(Number(event.target.value))
        ? false
        : true
    );
  }

  function handleFunctionChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setFunction(event.target.value === "" ? false : true);
  }

  function allAreTrue() {
    const value = [isFunction, isSlice, isUpperBound, isLowerBound];
    return value.every((element) => element === true);
  }

  return (
    <S.LeftContainer>
      <S.TitleText>
        <BiCalculator className="text-lg" />
        <p>Simpson's Rule</p>
      </S.TitleText>
      <div className="flex flex-col gap-y-2">
        <SidebarButton
          label="Introduction"
          isActive={isSideButtonActive === "1"}
          icon="BiBookAlt"
          onClick={() => handleSideButtonActive("1")}
          key="1"
        />
        <SidebarButton
          label="Program"
          isActive={isSideButtonActive === "2"}
          icon="RiComputerLine"
          onClick={() => handleSideButtonActive("2")}
          key="2"
        />
        <SidebarButton
          label="Specification"
          isActive={isSideButtonActive === "3"}
          icon="HiOutlineMagnifyingGlass"
          onClick={() => handleSideButtonActive("3")}
          key="3"
        />
        <SidebarButton
          label="Conclusion"
          isActive={isSideButtonActive === "4"}
          icon="MdOutlineSummarize"
          onClick={() => handleSideButtonActive("4")}
          key="4"
        />
      </div>
      <hr />
      <S.Container>
        <S.HeaderText>Input Data</S.HeaderText>
        <S.FormulaContainer>
          <Bound
            label="b"
            onChange={handleUpperBoundChange}
            hasValue={isUpperBound}
          />
          <FormulaContainer
            onChange={handleFunctionChange}
            hasValue={isFunction}
          />
          <Bound
            label="a"
            onChange={handleLowerBoundChange}
            hasValue={isLowerBound}
          />
          <div className="w-full h-10 mt-6 flex items-center gap-x-2 justify-center">
            <p className="font-semibold select-none font-noto">n = </p>
            <input
              className={`w-3/12 h-full text-center border font-noto rounded-md focus:outline-0 placeholder:font-noto ${
                !isSlice && "border-color8"
              }`}
              placeholder="n"
              onChange={handleSliceChange}
            />
          </div>
        </S.FormulaContainer>
        <div className="h-1/6 flex justify-center items-center select-none p-4 ">
          <S.Button
            isActive={allAreTrue()}
            onClick={() => handlePanelToggle(isSideButtonActive)}
          >
            Calculate
          </S.Button>
        </div>
      </S.Container>
    </S.LeftContainer>
  );
}
