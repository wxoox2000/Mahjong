import { useEffect, useRef, useState } from "react";
import { CloseBtn, CredText, Cross, Git, Inst, LinkedIn, List, SocLink, Wrap } from "./credits.styled";
import { useTheme } from "../App";
import { useNavigate } from "react-router-dom";

export const Credits = () => {
  const [close, setClose] = useState(false);
  const timerRef = useRef();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const onClick = () => {
    setClose(true);
    timerRef.current = setTimeout(() => {
      navigate("/Mahjong/");
    }, 700);
  };
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrap $cur_theme={theme} className={close && "closing"}>
      <CloseBtn $cur_theme={theme} onClick={onClick}>
        <Cross $cur_theme={theme} />
      </CloseBtn>
      <CredText>
        App, design and music created by Oleksandr Petrychenko
      </CredText>
      <List>
        <li>
          <SocLink $cur_theme={theme} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/oleksandr-petrychenko-163273288/"><LinkedIn/></SocLink>
        </li>
        <li style={{position: 'relative'}}>
          <SocLink $cur_theme={theme} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wxoox2000/"><Inst/><span>My inst</span></SocLink>
        </li>
        <li style={{position: 'relative'}}>
          <SocLink $cur_theme={theme} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/prod_by_wxoox/"><Inst/><span>Music inst</span></SocLink>
        </li>
      </List>
      <CredText>Card design by FluffyStuff</CredText>
      <SocLink $cur_theme={theme} target="_blank" rel="noopener noreferrer" href="https://github.com/FluffyStuff"><Git/></SocLink>
    </Wrap>
  );
};
