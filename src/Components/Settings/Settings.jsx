import { useNavigate } from 'react-router-dom';
import { CloseBtn, Cross, OptTitle, ThemeList, ThemeOpt, ThemeWrap, Wrap } from './Settings.styled';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from "../App";


export const Settings = ({ bg }) => {
  const {theme} = useTheme();
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef();
  const onClick = () => {
    setClose(true);
    timerRef.current = setTimeout(() => {
      navigate('/Mahjong/');
    }, 700);
  };
  const PickTheme = e => {
    bg(e.target.dataset.img);
  };
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrap $cur_theme={theme} className={close && 'closing'}>
      <CloseBtn $cur_theme={theme} onClick={onClick}>
        <Cross $cur_theme={theme} />
      </CloseBtn>
      <ThemeWrap>
        <OptTitle>Theme</OptTitle>
        <ThemeList onClick={PickTheme}>
          <li>
            <ThemeOpt $opt={'fuji'} data-img={'fuji'}></ThemeOpt>
          </li>
          <li>
            <ThemeOpt $opt={'lake'} data-img={'lake'}></ThemeOpt>
          </li>
          <li>
            <ThemeOpt $opt={'art'} data-img={'art'}></ThemeOpt>
          </li>
        </ThemeList>
      </ThemeWrap>
    </Wrap>
  );
};
