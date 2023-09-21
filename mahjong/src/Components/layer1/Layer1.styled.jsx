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
  animation: ${popUp} 1000ms 500ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    both;
position: absolute;
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
`;