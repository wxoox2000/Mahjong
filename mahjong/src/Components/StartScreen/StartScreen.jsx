import { Outlet, useNavigate } from "react-router-dom"
import { MainBtn, Wrap } from "./StartScreen.styled"
import { useRef, useState } from "react";
import { useTheme } from "../App";
import audio from "../../assets/sounds/startgame.mp3";

export const StartScreen = () => {
    const {theme} = useTheme();
    const [newgame, setNewgame] = useState(false);
    const navigate = useNavigate();
    const startRef = useRef();
    const NewGame = () => {
        startRef.current.play();
        setNewgame(true);
        setTimeout(() => {
            navigate('/game')
        }, 1000);
    }
    return (
        <Wrap $cur_theme={theme} className={newgame && 'close'}>
        <MainBtn $cur_theme={theme} onClick={NewGame}>New Game</MainBtn>
        <MainBtn $cur_theme={theme} to='settings'> Settings</MainBtn>
        <audio ref={startRef} src={audio}/>
        <Outlet />
        </Wrap>
    )
}