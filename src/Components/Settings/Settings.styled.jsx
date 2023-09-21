import { ImCross } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';
import fuji from '../../assets/themes/fuji-dark.png';
import lake from '../../assets/themes/lakeside.png';
import art from '../../assets/themes/old-art.png';

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
const PickTheme = p => {
  switch (p.$opt) {
    case 'fuji':
      return fuji;
    case 'lake':
      return lake;
    case 'art':
      return art;
    default:
      return null;
  }
};

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

  border-top: 3px solid ${p => p.theme[p.$cur_theme].settings.borderTop};
  border-bottom: 7px solid ${p => p.theme[p.$cur_theme].settings.borderTop};
  border-right: 3px solid ${p => p.theme[p.$cur_theme].settings.borderLeft};
  border-left: 3px solid ${p => p.theme[p.$cur_theme].settings.borderLeft};
  background-image: ${p => p.theme[p.$cur_theme].main.gradient};
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
  background-color: ${p => p.theme[p.$cur_theme].settings.closeBtnColor};
  transition: transform ${p => p.theme.tr};
  &:hover {
    transform: scale(1.1);
    & svg {
      fill: black;
    }
  }
`;

export const Cross = styled(ImCross)`
  fill: ${p => p.theme[p.$cur_theme].settings.fill};
  transition: fill ${p => p.theme.tr};
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
  transition: transform ${p => p.theme.tr};
  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeWrap = styled.div`
  display: flex;
  gap: 30px;
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
