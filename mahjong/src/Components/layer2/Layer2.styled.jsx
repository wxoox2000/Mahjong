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
  animation: ${popUp} 1000ms 1500ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    both;
  pointer-events: none;
  position: absolute;
  top: 50px;
  left: 25px;
  /* width: 250px;
  height: 250px; */
  width: 950px;
  height: 900px;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;
