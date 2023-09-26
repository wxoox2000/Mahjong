import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./clobalStyles";
import { Playground } from "./playground/playground";
import { StartScreen } from "./StartScreen/StartScreen";
import { Settings } from "./Settings/Settings";
import { Wrap } from "./App.styled";
import { useEffect, useRef, useState } from "react";
import { createContext, useContext } from "react";

import startGame from "../assets/sounds/flute_sound.mp3";
import pairSound from "../assets/sounds/pair_sound2.wav";
import loseSound from "../assets/sounds/lose.mp3";
import victorySound from "../assets/sounds/victory.mp3";
import wrongPair from "../assets/sounds/wrongPair.mp3";
import bgMusic from "../assets/sounds/shanghai.mp3";
import bgMusic2 from "../assets/sounds/ambient_east.mp3";
import bgMusic3 from "../assets/sounds/ambient2.mp3";
import bgMusic4 from "../assets/sounds/ambient.mp3";
import bgMusic5 from "../assets/sounds/amby.mp3";
import { Credits } from "./credits/credits";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const savedTheme = localStorage.getItem("Theme");
  const [theme, setTheme] = useState(savedTheme ? savedTheme : "lake");
  const [changeBg, setchangeBg] = useState(false);
  const [musicKnob, setMusicKnob] = useState(false);
  const [soundKnob, setSoundKnob] = useState(false);
  const [level, setLevel] = useState(false);

  // SOUND FX HANDLERS
  const playlist = [bgMusic5, bgMusic4, bgMusic3, bgMusic2, bgMusic];
  const [trackPosition, setTrackPosition] = useState(0);
  const [music, setMusic] = useState(startGame);
  const A_startGameRef = useRef();
  const startFX = () => {
    if(!soundKnob) {
      return;
    }
    A_startGameRef.current.play();
  };
  const A_pairRef = useRef();
  const pairFX = () => {
    if(!soundKnob) {
      return;
    }
    A_pairRef.current.play();
  };
  const A_wrongPairRef = useRef();
  const wrongPairFX = () => {
    if(!soundKnob) {
      return;
    }
    A_wrongPairRef.current.play();
  };
  const A_loseRef = useRef();
  const loseFX = () => {
    if(!soundKnob) {
      return;
    }
    A_loseRef.current.play();
  };
  const A_victoryRef = useRef();
  const victoryFX = () => {
    if(!soundKnob) {
      return;
    }
    A_victoryRef.current.play();
  };
  const A_bgMusic = useRef();
  const bgPlay = (bool) => {
      if(bool) {
        setMusicKnob(true);
        console.log(A_bgMusic.current.volume);
        if(A_bgMusic.current.volume > 0.5){
          A_bgMusic.current.play()
          return;
        }
        A_bgMusic.current.play()
        A_bgMusic.current.volume = 0;
        let timer = null;
        timer = setInterval(() => {
          // console.log(A_bgMusic.current.volume);
          if(A_bgMusic.current.volume >=0.9){
            clearInterval(timer)
          }
          A_bgMusic.current.volume = (A_bgMusic.current.volume +0.01).toFixed(2);
        }, 10);
      } else{
        // A_bgMusic.current.volume = 0.99;
        setMusicKnob(false);
        if(A_bgMusic.current.volume < 0.8){
          A_bgMusic.current.pause()
          return;
        }
        let timer = null;
        timer = setInterval(() => {
          // console.log(A_bgMusic.current.volume);
          if(A_bgMusic.current.volume <0.1){
            clearInterval(timer)
          }
          A_bgMusic.current.volume = (A_bgMusic.current.volume -0.01).toFixed(2);
        }, 10);
        setTimeout(() => {
          A_bgMusic.current.pause()
        }, 1000);
      }
  };
  const nextSong = () => {
    console.log('ended');
    if(trackPosition === playlist.length -1){
      console.log('zeroing playlist', trackPosition);
      setTrackPosition(0);
      setMusic(playlist[trackPosition]);
      setTimeout(() => {
        A_bgMusic.current.play()
      }, 1000);
      return;
    }
    setTrackPosition(trackPosition +1)
    console.log(trackPosition);
}
useEffect(() => {
  if (!musicKnob) {
    return;
  }
  setMusic(playlist[trackPosition]);
  setTimeout(() => {
    A_bgMusic.current.play()
  }, 1000);
},[trackPosition, playlist, musicKnob])

const soundFX = (bool) => {
  if(bool) {
    setSoundKnob(true);
  } else {
    setSoundKnob(false);
  }
}

//===========================================================
  const BgColor = (choosedTheme) => {
    if (choosedTheme === theme) {
      return;
    }
    setchangeBg(true);
    setTimeout(() => {
      localStorage.setItem("Theme", choosedTheme);
      setTheme(choosedTheme);
      setchangeBg(false);
    }, 500);
  };

  const pickLevel = () => {
    setLevel(!level)
  }

  console.log(window.screen);
  return (
    <ThemeContext.Provider value={{ theme, musicKnob, soundKnob, wrongPairFX }}>
      <Wrap $bgtheme={theme} className={changeBg ? "change" : null}>
        <audio ref={A_startGameRef} src={startGame} />
        <audio ref={A_pairRef} src={pairSound} />
        <audio ref={A_wrongPairRef} src={wrongPair} />
        <audio ref={A_loseRef} src={loseSound} />
        <audio ref={A_victoryRef} src={victorySound} />
        <audio ref={A_bgMusic} src={music} onEnded={nextSong}/>
        <Routes>
          <Route path="/Mahjong/" element={<StartScreen fx={startFX} />}>
            <Route path="settings" element={<Settings bg={BgColor} music={bgPlay} sound={soundFX} level={pickLevel} curLevel={level}/>} />
            <Route path="credits" element={<Credits />}/>
          </Route>
          <Route path="/Mahjong/game" element={<Playground fx={pairFX} music={bgPlay} sound={soundFX} level={level} loseFX={loseFX} victoryFX={victoryFX}/>} />
        </Routes>
        <GlobalStyles />
      </Wrap>
    </ThemeContext.Provider>
  );
};
export default App;
