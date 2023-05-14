import tw from 'twin.macro';
import styled from '@emotion/styled'

type ActiveComponent = {
    isActive?: boolean;
}

export const App = styled.div(() => [
    tw`h-screen w-full bg-color1 flex`,
]);

export const LeftContainer = styled.div(() => [
    tw`h-full w-1/4 bg-white drop-shadow-lg flex flex-col justify-center p-10 gap-y-8`,
]);

export const TitleText = styled.div(() => [
    tw`text-6xl font-montserrat font-bold uppercase h-1/5 flex align-middle select-none`,
]);

export const Container = styled.div(() => [
    tw`h-3/5 w-full border border-gray-300 rounded-lg flex flex-col`,
]);

export const Button = styled.div(() => [
    tw`bg-black text-white cursor-pointer py-2 px-6 rounded-sm text-sm font-bold`,
]);

export const HeaderText = styled.div(() => [
    tw`font-semibold h-1/6 flex items-center select-none p-4`,
]);

export const FormulaContainer = styled.div(() => [
    tw`h-4/6 bg-gray-100 flex flex-col justify-center items-center p-4 `,
]);

export const RightContainer = styled.div(() => [
    tw`h-full w-3/4 bg-color1 p-10 flex flex-col items-center gap-y-4`,
]);

export const AnswerContainer = styled.div(() => [
    tw`w-3/4 bg-white p-10 drop-shadow-md`,
]);

export const SolutionContainer = styled.div<ActiveComponent>((props) => [
    tw`w-3/4 bg-white transition duration-500 ease-in-out p-10 cursor-pointer drop-shadow-md`,
    props.isActive &&  tw`h-full`
]);