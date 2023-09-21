import styled from 'styled-components';

function choosed(p) {
  const color = p.theme[p.$cur_theme].cardBorder;
  switch (p.$choosed) {
    case false:
      return `border: 1px solid ${color};`;
    case true:
      return 'border: 5px solid green;';
    default:
      break;
  }
}
function error(p) {
  if (!p.$wrongpair && p.className === 'choosed') {
    return 'border: 5px solid red;';
  }
}

function allow(p) {
  switch (p.$allow) {
    case true:
      return 'pointer-events: all;';
    case false:
      return `pointer-events: none; filter: grayscale(0.8);  background-color: #787676;`;
    default:
      break;
  }
}

export const MojangCard = styled.div.attrs(p => ({
  style: {
    top: p.$pos.top,
    left: p.$pos.left,
  },
}))`
  position: absolute;
  width: 50px;
  height: 100px;
  padding: 0 3px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme[p.$cur_theme].cardBg};
  ${allow}
  ${choosed}
  ${error}
  transform: scale(1);
  transition: transform cubic-bezier(0.29, 0.43, 0.8, 1.14) 300ms,
    border cubic-bezier(0.29, 0.43, 0.8, 1.14) 150ms;
  &:hover {
    transform: scale(1.1);
    z-index: 10;
  }
`;
