import { Outlet, useNavigate } from "react-router-dom"
import { MainBtn, Wrap } from "./StartScreen.styled"
import { useState } from "react";
import { useTheme } from "../App";

export const StartScreen = ({fx}) => {
    const {theme} = useTheme();
    const [newgame, setNewgame] = useState(false);
    const navigate = useNavigate();
    const NewGame = () => {
        fx()
        setNewgame(true);
        setTimeout(() => {
            navigate('/Mahjong/game')
        }, 1000);
    }
    return (
        <Wrap $cur_theme={theme} className={newgame && 'close'}>
        <MainBtn $cur_theme={theme} onClick={NewGame}>New Game</MainBtn>
        <MainBtn $cur_theme={theme} to='settings'> Settings</MainBtn>
        <Outlet />
        </Wrap>
    )
}