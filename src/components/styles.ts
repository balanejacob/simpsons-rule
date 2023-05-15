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
    tw`bg-black text-white cursor-pointer p-4 text-sm font-bold w-full flex justify-center rounded-lg`,
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

export const SolutionContainer = styled.div(() => [
    tw`w-3/4 bg-white transition duration-500 ease-in-out drop-shadow-md flex flex-col h-full`
]);

export const HiddenContainer = styled.div<ActiveComponent>((props) => [
    tw`h-full w-full`,
    props.isActive? tw`block`: tw`hidden`
]);

export const SectionContainer = styled.div(() => [
    tw`p-6 w-full flex flex-col gap-y-4 text-sm items-center`
]);

