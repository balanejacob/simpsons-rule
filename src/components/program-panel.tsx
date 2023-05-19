import React from "react";
import PanelHeaderText from "./panel-header-text";
import * as S from "./styles";
import { MathJax, MathJaxContext } from "better-react-mathjax";
type ProgramPanelPropsType = {
  isActive: boolean;
  values: number[] | undefined;
  der_const: number[] | undefined;
  der_expo: number[] | undefined;
  lower_array: number[] | undefined;
  upper_array: number[] | undefined;
  max: number;
  n: number;
};
export default function ProgramPanel(props: ProgramPanelPropsType) {
  const {
    isActive,
    values = [],
    der_const = [],
    der_expo = [],
    lower_array = [],
    upper_array = [],
    max,
    n,
  } = props;

  const lower = values[0];
  const upper = values[1];
  const constant = values[2];
  const exponent = values[3];
  const error = values[4];

  const config = {
    loader: { load: ["input/asciimath"] },
  };
  return (
    <div
      className={`h-full w-full bg-color2 flex flex-col overflow-hidden ${
        isActive ? "block" : "hidden"
      }`}
    >
      <div className="h-20 flex items-center p-6">
        <PanelHeaderText label="Program" />
      </div>
      <div className="flex h-full">
        <div className="w-10/12 px-6">
          <div className="border-t h-[85vh] w-full px-20 pt-20  font-noto text-justify flex flex-col">
            <S.SectionHeading className=" h-[10vh]">
              <p className="font-semibold ">Answer :</p>
              <p className="">0.00001234</p>
            </S.SectionHeading>
            <S.SectionHeading className=" h-[10vh] mt-7">
              <p className="font-semibold">Solution :</p>
            </S.SectionHeading>
            {/* <div>
              <p>0-lower = {lower}</p>
              <p>1-upper = {upper}</p>
              <p>2-constant = {constant}</p>
              <p>3-exponent = {exponent}</p>
              <p>4-error = {error}</p>
              <p>n = {n}</p>
            </div> */}
            <div className="h-[100vh] overflow-auto px-20 py-5 text-sm">
              <S.SectionSubHeading>Step 1: Find n</S.SectionSubHeading>
              <S.SectionSubText>
                Using Error bound for Simpson's rule to determine number of
                sub-intervals,
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      {"`Err \\leq\\frac{M(b-a)^{5}}{180n^{4}}`"}
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>Find the fourth derivative,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="flex flex-col font-semibold">
                      <p>
                        {"`f^{1}(x)= `"}
                        <span className="mx-2">
                          {der_const[0]}
                          {der_expo[0] > 1 && "x^" + der_expo[0]}
                          {der_expo[0] === 1 && "x"}
                          {der_expo[0] === 0 && ""}
                        </span>
                      </p>
                      <p>
                        {"`f^{2}(x)= `"}
                        <span className="mx-2">
                          {der_const[1]}
                          {der_expo[1] > 1 && "x^" + der_expo[1]}
                          {der_expo[1] === 1 && "x"}
                          {der_expo[1] === 0 && ""}
                        </span>
                      </p>
                      <p>
                        {"`f^{3}(x)= `"}
                        <span className="mx-2">
                          {der_const[2]}
                          {der_expo[2] > 1 && "x^" + der_expo[2]}
                          {der_expo[2] === 1 && "x"}
                          {der_expo[2] === 0 && ""}
                        </span>
                      </p>
                      <p>
                        {"`f^{4}(x)=`"}
                        <span className="mx-2">
                          {der_const[3]}
                          {der_expo[3] > 1 && "x^" + der_expo[3]}
                          {der_expo[3] === 1 && "x"}
                          {der_expo[3] === 0 && ""}
                        </span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>
                Find M by substituting x with the upper and lower bound,
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="flex flex-col font-semibold">
                      <div className="mb-4 ">Upper bound : x = {upper} </div>
                      <p>
                        {"`f^{1}(x)= `"}
                        <span className="mx-2">
                          {der_const[0]}
                          {der_expo[0] > 1 &&
                            "x^" + der_expo[0] + " = " + upper_array[0]}
                          {der_expo[0] === 1 && "x = " + upper_array[0]}
                          {der_expo[0] === 0 && " = " + upper_array[0]}
                        </span>
                      </p>
                      <p>
                        {"`f^{2}(x)= `"}
                        <span className="mx-2">
                          {der_const[1]}
                          {der_expo[1] > 1 &&
                            "x^" + der_expo[1] + " = " + upper_array[1]}
                          {der_expo[1] === 1 && "x = " + upper_array[1]}
                          {der_expo[1] === 0 && " = " + upper_array[1]}
                        </span>
                      </p>
                      <p>
                        {"`f^{3}(x)= `"}
                        <span className="mx-2">
                          {der_const[2]}
                          {der_expo[2] > 1 &&
                            "x^" + der_expo[2] + " = " + upper_array[2]}
                          {der_expo[2] === 1 && "x = " + upper_array[2]}
                          {der_expo[2] === 0 && " = " + upper_array[2]}
                        </span>
                      </p>
                      <p>
                        {"`f^{4}(x)= `"}
                        <span className="mx-2">
                          {der_const[3]}
                          {der_expo[3] > 1 &&
                            "x^" + der_expo[3] + " = " + upper_array[3]}
                          {der_expo[3] === 1 && "x = " + upper_array[3]}
                          {der_expo[3] === 0 && " = " + upper_array[3]}
                        </span>
                      </p>

                      <div className="my-4  font-semibold">
                        Lower bound : x = {lower}
                      </div>
                      <p>
                        {"`f^{1}(x)= `"}
                        <span className="mx-2">
                          {der_const[0]}
                          {der_expo[0] > 1 &&
                            "x^" + der_expo[0] + " = " + lower_array[0]}
                          {der_expo[0] === 1 && "x = " + lower_array[0]}
                          {der_expo[0] === 0 && " = " + lower_array[0]}
                        </span>
                      </p>
                      <p>
                        {"`f^{2}(x)= `"}
                        <span className="mx-2">
                          {der_const[1]}
                          {der_expo[1] > 1 &&
                            "x^" + der_expo[1] + " = " + lower_array[1]}
                          {der_expo[1] === 1 && "x = " + lower_array[1]}
                          {der_expo[1] === 0 && " = " + lower_array[1]}
                        </span>
                      </p>
                      <p>
                        {"`f^{3}(x)= `"}
                        <span className="mx-2">
                          {der_const[2]}
                          {der_expo[2] > 1 &&
                            "x^" + der_expo[2] + " = " + lower_array[2]}
                          {der_expo[2] === 1 && "x = " + lower_array[2]}
                          {der_expo[2] === 0 && " = " + lower_array[2]}
                        </span>
                      </p>
                      <p>
                        {"`f^{4}(x)= `"}
                        <span className="mx-2">
                          {der_const[3]}
                          {der_expo[3] > 1 &&
                            "x^" + der_expo[3] + " = " + lower_array[3]}
                          {der_expo[3] === 1 && "x = " + lower_array[3]}
                          {der_expo[3] === 0 && " = " + lower_array[3]}
                        </span>
                      </p>
                      <div className="mt-4 ">Max = {max} </div>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>
                Use Error bound for Simpson's rule to find n,
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="font-semibold">
                      <p>
                        {"`\\frac{M(b-a)^{5}}{180n^{4}} = `"}
                        <span className="mx-2">{n}</span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubHeading>Step 2: Solve for Sn:</S.SectionSubHeading>
              <S.SectionSubText>Find h or the delta x,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      <p>{"`\\trianglex=\\frac{b-a}{n}=`"}</p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>Use Simpson's rule Formula,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      <p>
                        {
                          "`int_{a}^{b} f(x)dxapprox\\frac{h}{3}[y_{0}+y_{n}+4sum_1^\\frac{n}{2}y_{2i-1}+2sum_1^left(\\frac{n}{2}-1\\right) y_{2i}]`"
                        }
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="my-5">
                      <p>{"`int_{a}^{b} f(x)dxapprox[+++]`"}</p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      <p>{"`approx`"}</p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>Find Error,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      <p>
                        {"`|int_{a}^{b} f(x)dx-S_{n}|\\leq`"}
                        <span className="mx-2">{error}</span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      <p>
                        |a-b|{"`\\leq`"}
                        <span className="mx-2">{error}</span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
            </div>
          </div>
        </div>
        <div className="  w-2/12 h-[90vh]"></div>
      </div>
    </div>
  );
}
