import { ImCross } from "react-icons/im";
import styled, { keyframes } from "styled-components";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const popUp = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.1) translateY(1200px);
    }
    50% {
        opacity: 0.6;
        transform: scale(0.4) translateY(0px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
`;
const popOut = keyframes`
    0% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
    50% {
        opacity: 0.6;
        transform: scale(0.4) translateY(0px);
    }
    100% {
        opacity: 0;
        transform: scale(0.1) translateY(1000px);
    }
`;

export const Wrap = styled.div`
  animation: ${popUp} 700ms ease-in-out 1 normal forwards;
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% - 240px);
  padding: 50px 15px;
  width: 480px;
  height: 600px;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  border-top: 3px solid ${(p) => p.theme[p.$cur_theme].settings.borderTop};
  border-bottom: 7px solid ${(p) => p.theme[p.$cur_theme].settings.borderTop};
  border-right: 3px solid ${(p) => p.theme[p.$cur_theme].settings.borderLeft};
  border-left: 3px solid ${(p) => p.theme[p.$cur_theme].settings.borderLeft};
  background-image: ${(p) => p.theme[p.$cur_theme].main.gradient};
  &.closing {
    animation: ${popOut} 700ms ease-in-out 1 normal forwards;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(1);
  background-color: ${(p) => p.theme[p.$cur_theme].settings.closeBtnColor};
  transition: transform ${(p) => p.theme.tr};
  &:hover {
    transform: scale(1.1);
    & svg {
      fill: black;
    }
  }
`;

export const Cross = styled(ImCross)`
  fill: ${(p) => p.theme[p.$cur_theme].settings.fill};
  transition: fill ${(p) => p.theme.tr};
`;

export const CredText = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 3px;
`;
export const SocLink = styled.a`
  width: fit-content;
  margin: 0 auto;
  & span {
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    color: black;
    position: absolute;
    top: -30px;
    left: -10px;
    width: 120px;
    opacity: 0;
    transition: opacity ${(p) => p.theme.tr};;
  }
  &:hover {
    & svg {
      fill: ${(p) => p.theme[p.$cur_theme].settings.fill};
    }
    & span {
        opacity: 1;
    }
  }
`;

export const Git = styled(BsGithub)`
  width: 50px;
  height: 50px;
  fill: black;
  transition: fill ${(p) => p.theme.tr};
`;
export const LinkedIn = styled(BsLinkedin)`
  width: 50px;
  height: 50px;
  fill: black;
  transition: fill ${(p) => p.theme.tr};
`;
export const Inst = styled(BsInstagram)`
  width: 50px;
  height: 50px;
  fill: black;
  transition: fill ${(p) => p.theme.tr};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
