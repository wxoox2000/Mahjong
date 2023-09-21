import styled, { keyframes } from 'styled-components';
import fuji from '../assets/themes/fuji-dark.png';
import lake from '../assets/themes/lakeside.png';
import art from '../assets/themes/old-art.png';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const PickTheme = p => {
  switch (p.$bgtheme) {
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
export const Wrap = styled.div`
  animation: ${FadeIn} 500ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    forwards;
  width: 100vw;
  height: 100vh;
  background-image: url(${PickTheme});
  background-size: cover;
  background-repeat: no-repeat;
  &.change {
    animation: ${FadeOut} 500ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
      forwards;
  }
`;
