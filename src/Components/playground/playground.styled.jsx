import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import styled, { keyframes } from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { GoMute, GoUnmute } from "react-icons/go";

const TurnOn = keyframes`
  0% {
    fill: black;
    opacity: 0;
  }
  100% {
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
    opacity: 1;
  }
`;
const popUp = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const popUpWin = keyframes`
    0% {
      transform: scaleX(0) scaleY(0.3) rotate(0);
    transform-origin: center;
    opacity: 0.1;
    }
    100% {
      transform: scaleX(1) scaleY(1) rotate(360deg);
    transform-origin: center;
    opacity: 1;
    }
`;

const popOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;
const text = keyframes`
  0% {
    transform: scaleX(0) scaleY(0.3) rotate(0);
    transform-origin: center;
    opacity: 0.1;
  }
  100% {
    transform: scaleX(1) scaleY(1) rotate(360deg);
    transform-origin: center;
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: ${p => p.theme[p.$cur_theme].main.shadow};
  }
`;

export const Playfield = styled.div`
  width: 1000px;
  height: 1000px;
  position: absolute;
  top: calc(50% - 500px);
  left: calc(50% - 500px);
  zoom: 0.6;
  &.closing {
    animation: ${popOut} 700ms ease-in-out 1 normal forwards;
  }
`;

export const OptBtn = styled.button`
  cursor: pointer;
  animation: ${popUp} 1000ms 4000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    both;
  position: absolute;
  top: 0;
  right: -200px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  transform: scale(1);
  border: 2px solid ${(p) => p.theme[p.$cur_theme].main.button.color};
  background-color: ${(p) => p.theme[p.$cur_theme].main.button.hovBColor};
  transition: transform ${(p) => p.theme.tr},
    background-color ${(p) => p.theme.tr};
  &:hover {
    background-color: ${(p) => p.theme[p.$cur_theme].main.button.hovColor};
    transform: scale(1.1);
    & svg {
      fill: ${(p) => p.theme[p.$cur_theme].main.button.hovBColor};
    }
  }
`;

export const SoundOn = styled(GiSoundOn)`
  width: 60px;
  height: 60px;
  animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
  fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  transition: fill ${(p) => p.theme.tr};
`;

export const SoundOff = styled(GiSoundOff)`
  width: 60px;
  height: 60px;
  animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
  fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  transition: fill ${(p) => p.theme.tr};
`;

export const Arrow = styled(FaArrowLeft)`
  width: 40px;
  height: 40px;
  animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
  fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  transition: fill ${(p) => p.theme.tr};
`;

export const Mute = styled(GoMute)`
  animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
  fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
`;
export const UnMute = styled(GoUnmute)`
  animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
  fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
`;

export const VictoryWrap = styled.div`
  animation: ${popUpWin} 1000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    forwards, ${pulse} 1000ms 1000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) infinite alternate
    forwards;

  position: absolute;
  width: 80%;
  z-index: 100;
  top: calc(30% - 23px);
  left: calc(50% - 400px);
  border: 5px solid ${(p) => p.theme[p.$cur_theme].main.borderLeft};
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;

  background-image: ${(p) => p.theme[p.$cur_theme].main.gradient};
  box-shadow: ${p => p.theme[p.$cur_theme].main.shadow};
  backdrop-filter: blur(10px);
`;

export const VText = styled.p`
  animation: ${text} 1000ms 200ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    backwards;
  color: ${(p) => p.theme[p.$cur_theme].main.button.color};
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 3px;
`;
