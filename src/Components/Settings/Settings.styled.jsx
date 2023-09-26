import { ImCross } from "react-icons/im";
import styled, { keyframes } from "styled-components";
import fuji from "../../assets/themes/fuji-dark.png";
import lake from "../../assets/themes/lakeside.png";
import art from "../../assets/themes/old-art.png";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import { GiMeditation } from "react-icons/gi";
import { SiKatana } from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const popUp = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    50% {
        opacity: 0.6;
        transform: scale(0.4);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
`;
const popOut = keyframes`
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(0.4);
    }
    100% {
        opacity: 0;
        transform: scale(0.1);
    }
`;

const PickTheme = (p) => {
  switch (p.$opt) {
    case "fuji":
      return fuji;
    case "lake":
      return lake;
    case "art":
      return art;
    default:
      return null;
  }
};
const musicIconsColor = (p) => {
  console.log(p.theme[p.$cur_theme].settings.musicIcons);
  return;
};
const TurnOn = keyframes`
  0% {
    fill: black;
  }
  100% {
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;

const HintPop = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const HintPopOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
  gap: 50px;

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

export const ThemeOpt = styled.span`
  cursor: pointer;
  display: block;
  width: 80px;
  height: 80px;

  border-radius: 12px;
  background-image: url(${PickTheme});
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1);
  transition: transform ${(p) => p.theme.tr};
  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ThemeList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

export const OptTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 3px;
`;

export const MusicWrap = styled.div`
  display: flex;
  align-items: center;
  /* gap: 20px; */
`;

export const SoundOn = styled(GiSoundOn)`
  &.active {
    animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;

export const SoundOff = styled(GiSoundOff)`
  &.active {
    animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;
export const Mute = styled(GoMute)`
  &.active {
    animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;
export const UnMute = styled(GoUnmute)`
  &.active {
    animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;
export const Easy = styled(GiMeditation)`
  &.active {
    animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;
export const Hard = styled(SiKatana)`
  &.active {
    animation: ${TurnOn} 700ms ease-in-out 1 normal forwards;
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
  }
`;
export const Hint = styled(AiOutlineQuestionCircle)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  transform: scale(1);
  transition: fill ${(p) => p.theme.tr}, transform ${(p) => p.theme.tr};
  &:hover {
    fill: ${(p) => p.theme[p.$cur_theme].settings.musicIcons};
    transform: scale(1.1);
  }
`;

export const HintWrap = styled.div`
  animation: ${HintPop} 700ms ease-in-out 1 normal forwards;
  position: absolute;
  left: 80px;
  top: -65px;
  width: 300px;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid;
  background-color: ${(p) => p.theme[p.$cur_theme].settings.fill};
  &.closing {
    animation: ${HintPopOut} 700ms ease-in-out 1 normal forwards;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 3px;
`;
