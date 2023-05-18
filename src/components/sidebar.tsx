import React, { useState } from "react";
import FormulaContainer from "./formula-container";
import Bound from "./bound";

import * as S from "./styles";
import SidebarButton from "./sidebar-button";

import { BiCalculator } from "react-icons/bi";

type SidebarPropsType = {
  handlePanelToggle: (value: string) => void;
  isActive: string;
};

export default function Sidebar(props: SidebarPropsType) {
  const { handlePanelToggle, isActive } = props;
  const [isConstant, setConstant] = useState(false);
  const [isExponent, setExponent] = useState(false);

  const [isLowerBound, setLowerBound] = useState(false);
  const [isUpperBound, setUpperBound] = useState(false);
  const [isSlice, setSlice] = useState(false);
  const [isError, setError] = useState(false);

  function handleUpperBoundChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
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

  function handleConstantChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setConstant(
      event.target.value === "" || isNaN(Number(event.target.value))
        ? false
        : true
    );
  }

  function handleExponentChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    setExponent(
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

  function handleErrorChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setError(
      event.target.value === "" || isNaN(Number(event.target.value))
        ? false
        : true
    );
  }

  function allAreTrue() {
    const value = [
      isConstant,
      isExponent,
      isSlice,
      isError,
      isUpperBound,
      isLowerBound,
    ];
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
          isActive={isActive === "1"}
          icon="BiBookAlt"
          onClick={() => handlePanelToggle("1")}
          key="1"
        />
        <SidebarButton
          label="Program"
          isActive={isActive === "2"}
          icon="RiComputerLine"
          onClick={() => handlePanelToggle("2")}
          key="2"
        />
        <SidebarButton
          label="Specification"
          isActive={isActive === "3"}
          icon="HiOutlineMagnifyingGlass"
          onClick={() => handlePanelToggle("3")}
          key="3"
        />
        <SidebarButton
          label="Conclusion"
          isActive={isActive === "4"}
          icon="MdOutlineSummarize"
          onClick={() => handlePanelToggle("4")}
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
            onConstantChange={handleConstantChange}
            onExponentChange={handleExponentChange}
            hasConstantValue={isConstant}
            hasExponentValue={isExponent}
          />
          <Bound
            label="a"
            onChange={handleLowerBoundChange}
            hasValue={isLowerBound}
          />
          <div className="w-full h-10 mt-6 flex items-center gap-x-2 justify-end">
            <p className="font-semibold select-none font-noto">n = </p>
            <input
              className={`w-5/12 h-full text-center border font-noto rounded-md focus:outline-0 placeholder:font-noto ${
                !isSlice && "border-color9"
              }`}
              placeholder="n"
              onChange={handleSliceChange}
            />
          </div>
          <div className="w-full h-10 mt-2 flex items-center gap-x-2  justify-end">
            <p className="font-semibold select-none font-noto">error = </p>
            <input
              className={`w-5/12 h-full text-center border font-noto rounded-md focus:outline-0 placeholder:font-noto ${
                !isError && "border-color8"
              }`}
              placeholder="0.001"
              onChange={handleErrorChange}
            />
          </div>
        </S.FormulaContainer>
        <div className="h-1/6 flex justify-center items-center select-none py-4 mt-4 ">
          <S.Button
            isActive={allAreTrue()}
            onClick={() => handlePanelToggle("5")}
          >
            Calculate
          </S.Button>
        </div>
      </S.Container>
    </S.LeftContainer>
  );
}
