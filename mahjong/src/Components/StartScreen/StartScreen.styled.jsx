import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const popUp = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.1);
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
    100% {
      opacity: 0;
      transform: scale(0.1);
    }
`;

export const Wrap = styled.div`
  animation: ${popUp} 1000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    forwards;
  position: absolute;
  top: calc(50% - 362px);
  left: calc(50% - 300px);
  width: 600px;
  height: 725px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(10px);

  border-top: 3px solid ${p => p.theme[p.$cur_theme].main.borderTop};
  border-bottom: 7px solid ${p => p.theme[p.$cur_theme].main.borderTop};
  border-right: 3px solid ${p => p.theme[p.$cur_theme].main.borderLeft};
  border-left: 3px solid ${p => p.theme[p.$cur_theme].main.borderLeft};
  background-image: ${p => p.theme[p.$cur_theme].main.gradient};
  box-shadow: ${p => p.theme[p.$cur_theme].main.shadow};
  &.close {
    animation: ${popOut} 1000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
      forwards;
  }
`;

export const MainBtn = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 5px;
  padding: 20px 40px;
  border-radius: 12px;
  border-top: 2px solid;
  border-bottom: 7px solid;
  border-right: 2px solid;
  border-left: 2px solid;

  color: ${p => p.theme[p.$cur_theme].main.button.color};
  border-color: ${p => p.theme[p.$cur_theme].main.button.color};
  background-color: transparent;
  transition: transform ${p => p.theme.tr}, border-color ${p => p.theme.tr},
    color ${p => p.theme.tr}, background-color ${p => p.theme.tr};
  &:hover {
    transform: scale(1.1);
    border-color: ${p => p.theme[p.$cur_theme].main.button.hovBColor};
    color: ${p => p.theme[p.$cur_theme].main.button.hovColor};
    background-color: ${p => p.theme[p.$cur_theme].main.button.hovBg};
  }
`;
