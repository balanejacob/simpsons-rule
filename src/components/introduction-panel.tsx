import React from "react";
import PanelHeaderText from "./panel-header-text";
import { MathJax, MathJaxContext } from "better-react-mathjax";
type IntroductionPanelPropsType = {
  isActive: boolean;
};

export default function IntroductionPanel(props: IntroductionPanelPropsType) {
  const { isActive } = props;
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
        <PanelHeaderText label="Introduction" />
      </div>
      <div className="flex h-full">
        <div className="w-10/12 px-6">
          <div className="border-t h-[85vh] w-full p-20 font-noto text-justify flex flex-col gap-y-7  overflow-auto">
            <p>
              Simpson's 1/3 rule is a numerical method for approximating the
              definite integral of a function. It is based on the idea of
              dividing the interval of integration into equal subintervals and
              then using a quadratic polynomial to approximate the function on
              each subinterval. The area under the graph of the function is then
              approximated by the sum of the areas of the triangles formed by
              the graph of the polynomial and the horizontal axis. The formula
              for Simpson's 1/3 rule is as follows:
            </p>
            <div className="flex justify-center">
              <MathJaxContext config={config}>
                {
                  <MathJax>
                    {
                      "`int_{a}^{b} f(x)dxapprox\\frac{h}{3}[y_{0}+y_{n}+4sum_1^\\frac{n}{2}y_{2i-1}+2sum_1^left(\\frac{n}{2}-1\\right) y_{2i}]`"
                    }
                  </MathJax>
                }
              </MathJaxContext>
            </div>
            <p>
              Simpson's 1/3 rule is a more accurate method of approximation than
              the trapezoidal rule, which is a simpler method that uses linear
              polynomials to approximate the function on each subinterval.
              However, Simpson's 1/3 rule is also more computationally
              expensive.
            </p>
            <p>
              Developing a program or software for Simpson's 1/3 rule can make
              solving Simpson's rule easier by automating the process of
              dividing the interval of integration into subintervals, evaluating
              the function at the points of subdivision, and calculating the
              area under the graph of the function. This can save time and
              effort, especially when the function is complex or the interval of
              integration is large.
            </p>
            <p>
              Here are some of the benefits of developing a program or software
              for Simpson's 1/3 rule:
            </p>
            <ul className="list-disc ml-12">
              <li>
                <span className="font-semibold">Increased accuracy: </span>
                Simpson's 1/3 rule is a more accurate method of approximation
                than the trapezoidal rule.
              </li>
              <li className="my-3">
                <span className="font-semibold">
                  Reduced computational effort:{" "}
                </span>
                A program or software can automate the process of dividing the
                interval of integration into subintervals, evaluating the
                function at the points of subdivision, and calculating the area
                under the graph of the function.
              </li>
              <li>
                <span className="font-semibold">Improved visualization: </span>A
                program or software can generate graphs of the function and the
                area under the graph, which can help to verify the accuracy of
                the approximation.
              </li>
            </ul>
            <p>
              Overall, developing a program or software for Simpson's 1/3 rule
              can be a valuable tool for students, scientists, and engineers who
              need to approximate definite integrals.
            </p>
          </div>
        </div>
        <div className="  w-2/12 h-[85vh]"></div>
      </div>
    </div>
  );
}
