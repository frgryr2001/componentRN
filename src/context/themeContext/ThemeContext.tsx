import {createContext, useContext, useEffect, useReducer} from 'react';
import {FC, PropsWithChildren} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';
import {AppState, Appearance} from 'react-native';

interface ContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  console.log(state);

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? dispatch({type: 'set_light_theme'})
          : dispatch({type: 'set_dark_theme'});
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ThemeContext.Provider
      value={{
        theme: state,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useThemeContext};
