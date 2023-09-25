import { useNavigate } from "react-router-dom";
import {
  CloseBtn,
  Cross,
  Easy,
  Hard,
  Hint,
  HintWrap,
  MusicWrap,
  Mute,
  OptTitle,
  SoundOff,
  SoundOn,
  Text,
  ThemeList,
  ThemeOpt,
  ThemeWrap,
  UnMute,
  Wrap,
} from "./Settings.styled";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../App";
import Switch from "react-switch";

export const Settings = ({ bg, music, sound, level, curLevel }) => {
  const { theme, musicKnob, soundKnob } = useTheme();
  const [close, setClose] = useState(false);
  const [switcherLevel, setSwitcherLevel] = useState(curLevel);
  const [switcher, setSwitcher] = useState(musicKnob);
  const [switcherSound, setSwitcherSound] = useState(soundKnob);
  const [hint, setHint] = useState(false);
  const [closeHint, setCloseHint] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef();
  const onClick = () => {
    setClose(true);
    timerRef.current = setTimeout(() => {
      navigate("/Mahjong/");
    }, 700);
  };
  const PickTheme = (e) => {
    bg(e.target.dataset.img);
  };
  const toggle = () => {
    setSwitcher(!switcher);
  };
  const toggleSound = () => {
    setSwitcherSound(!switcherSound);
  };
  const toggleLevel = () => {
    setSwitcherLevel(!switcherLevel);
    level();
  };
  const showHint = () => {
    setHint(true);
    setTimeout(() => {
      setCloseHint(true);
    }, 7000);
    setTimeout(() => {
      setCloseHint(false);
      setHint(false);
    }, 7700);
  };
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    music(switcher);
  }, [switcher]);
  useEffect(() => {
    sound(switcherSound);
  }, [switcherSound]);
  return (
    <Wrap $cur_theme={theme} className={close && "closing"}>
      <CloseBtn $cur_theme={theme} onClick={onClick}>
        <Cross $cur_theme={theme} />
      </CloseBtn>
      <ThemeWrap>
        <OptTitle>Theme</OptTitle>
        <ThemeList onClick={PickTheme}>
          <li>
            <ThemeOpt $opt={"fuji"} data-img={"fuji"}></ThemeOpt>
          </li>
          <li>
            <ThemeOpt $opt={"lake"} data-img={"lake"}></ThemeOpt>
          </li>
          <li>
            <ThemeOpt $opt={"art"} data-img={"art"}></ThemeOpt>
          </li>
        </ThemeList>
      </ThemeWrap>
      <MusicWrap>
        <OptTitle style={{ marginRight: 45 }}>Music</OptTitle>
        <SoundOff
          $cur_theme={theme}
          className={!switcher && "active"}
          style={{ width: 60, height: 60, marginRight: 15 }}
        />
        <Switch
          onChange={toggle}
          checked={switcher}
          width={100}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <SoundOn
          $cur_theme={theme}
          className={switcher && "active"}
          style={{ width: 60, height: 60, marginLeft: 15 }}
        />
      </MusicWrap>
      <MusicWrap>
        <OptTitle style={{ marginRight: 45 }}>Sound</OptTitle>
        <Mute
          $cur_theme={theme}
          className={!switcherSound && "active"}
          style={{ width: 50, height: 50, marginRight: 20 }}
        />
        <Switch
          onChange={toggleSound}
          checked={switcherSound}
          width={100}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <UnMute
          $cur_theme={theme}
          className={switcherSound && "active"}
          style={{ width: 50, height: 50, marginLeft: 15 }}
        />
      </MusicWrap>
      <MusicWrap>
        <OptTitle style={{ marginRight: 54 }}>Level</OptTitle>
        <Easy
          $cur_theme={theme}
          className={!switcherLevel && "active"}
          style={{ width: 50, height: 50, marginRight: 27 }}
        />
        <Switch
          onChange={toggleLevel}
          checked={switcherLevel}
          width={100}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <Hard
          $cur_theme={theme}
          className={switcherLevel && "active"}
          style={{ width: 50, height: 50, marginLeft: 15 }}
        />
        <div style={{ position: "relative" }}>
          <Hint $cur_theme={theme} onMouseEnter={showHint}/>
          {hint && (
            <HintWrap className={closeHint ? "closing" : "sdfghj"} $cur_theme={theme}>
              <Text>
                Pull the slider to the{" "}
                <Easy
                  $cur_theme={theme}
                  className="active"
                  style={{ width: 25, height: 25 }}
                />{" "}
                to play in easy mode, where the cards in stack provided to you
                are 100% matchable. <br />
                Choosing the{" "}
                <Hard
                  $cur_theme={theme}
                  className="active"
                  style={{ width: 25, height: 25 }}
                />
                , you'll enter the hard mode, where matches for all cards are
                not guaranteed...
              </Text>
            </HintWrap>
          )}
        </div>
      </MusicWrap>
    </Wrap>
  );
};
