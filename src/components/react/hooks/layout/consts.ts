export type LayoutTheme = "auto" | "light" | "dark";

export const defaultLayoutTheme: LayoutTheme = "auto";

export const LAYOUT_THEME_KEY = "theme";
export const LAYOUT_THEME_ATTR = "data-theme";

export const WindowSize = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
};

export type WindowSizeValue = typeof WindowSize[keyof typeof WindowSize];
