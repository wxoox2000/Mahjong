import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './clobalStyles';
import { Playground } from './playground/playground';
import { StartScreen } from './StartScreen/StartScreen';
import { Settings } from './Settings/Settings';
import { Wrap } from './App.styled';
import { useState } from 'react';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const savedTheme = localStorage.getItem('Theme');
  const [theme, setTheme] = useState(savedTheme ? savedTheme : 'lake');
  const [changeBg, setchangeBg] = useState(false);

  const BgColor = choosedTheme => {
    if (choosedTheme === theme) {
      return;
    }
    setchangeBg(true);
    setTimeout(() => {
      localStorage.setItem('Theme', choosedTheme);
      setTheme(choosedTheme);
      setchangeBg(false);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{theme}}>
      <Wrap $bgtheme={theme} className={changeBg ? 'change' : null}>
        <Routes>
          <Route path="/" element={<StartScreen />}>
            <Route path="settings" element={<Settings bg={BgColor} />} />
          </Route>
          <Route path="/game" element={<Playground />} />
        </Routes>
        <GlobalStyles />
      </Wrap>
    </ThemeContext.Provider>
  );
};
export default App;