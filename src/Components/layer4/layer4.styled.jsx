import styled, { keyframes } from 'styled-components';
const popUp = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const Field = styled.div`
  animation: ${popUp} 1000ms 3500ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    both;

  pointer-events: none;
  position: absolute;
  top: 150px;
  left: 75px;
  width: 850px;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;
