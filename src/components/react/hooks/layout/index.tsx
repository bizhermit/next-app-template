"use client";

import { createContext, type Dispatch, type ReactNode, useLayoutEffect, useReducer, useState } from "react";
import { deleteCookie, setCookie } from "../../../utilities/cookie";
import { defaultLayoutTheme, LAYOUT_THEME_ATTR, LAYOUT_THEME_KEY, LayoutTheme, WindowSize, WindowSizeValue } from "./consts";

type LayoutContextProps = {
  windowSize: WindowSizeValue;
  mobile: boolean;
  theme: LayoutTheme;
  setTheme: Dispatch<LayoutTheme>;
};

export const LayoutContext = createContext<LayoutContextProps>({
  windowSize: WindowSize.m,
  mobile: false,
  theme: defaultLayoutTheme,
  setTheme: () => { },
});

type Props = {
  defaultLayoutTheme: LayoutTheme;
  children?: ReactNode;
};

export const LayoutProvider = (props: Props) => {
  const [theme, setTheme] = useReducer((_: LayoutTheme, action: LayoutTheme) => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute(LAYOUT_THEME_ATTR, action);
      if (action === "auto") deleteCookie(LAYOUT_THEME_KEY);
      else setCookie(LAYOUT_THEME_KEY, action);
    }
    return action;
  }, props.defaultLayoutTheme || defaultLayoutTheme);
  const [windowSize, setWindowSize] = useState<WindowSizeValue>(WindowSize.m);

  useLayoutEffect(() => {
    const resizeWindow = () => {
      const cw = document.body.clientWidth;
      if (cw > 1200) {
        setWindowSize(WindowSize.xl);
        return;
      }
      if (cw > 800) {
        setWindowSize(WindowSize.l);
        return;
      }
      if (cw > 600) {
        setWindowSize(WindowSize.m);
        return;
      }
      if (cw > 480) {
        setWindowSize(WindowSize.s);
        return;
      }
      setWindowSize(WindowSize.xs);
    };
    window.addEventListener("resize", resizeWindow);
    document.documentElement.setAttribute(LAYOUT_THEME_ATTR, theme);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        windowSize,
        mobile: windowSize < WindowSize.m,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

