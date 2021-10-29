import { createContext, Dispatch, ReactNode, useReducer } from "react";

type ThemeContextProps = {
  state: {
    darkMode: boolean;
  };
  dispatch: Dispatch<any>;
};
export const ThemeContext = createContext({} as ThemeContextProps);

const INITIAL_STATE = { darkMode: true };

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
