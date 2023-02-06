export const colors = {
  primary: "#ED4B9E",
  secondary: "#4B4DED",
  tertiary: "#F3D9DA",
  dark: "#0E0E2C",
  success: "#31D0AA",
  text: "#4A4A68",
  subtleText: "#8C8CA1",
  accent: "#ECF1F4",
  light: "#FAFCFE",
  white: "#FFFFFF",
}

type FontSizeAlias = 'extraSmall' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'extraLarge';
export type FontSizes<Type, Aliases extends string> = Array<Type> & Record<Aliases, Type>;
const fontSizes = ["10px", "12px", "14px", "16px", "24px", "40px", "64px"] as FontSizes<string, FontSizeAlias>
fontSizes.extraSmall = fontSizes[0];
fontSizes.smaller = fontSizes[1];
fontSizes.small = fontSizes[2];
fontSizes.medium = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.larger = fontSizes[5];
fontSizes.extraLarge = fontSizes[6];

export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'xl';
export type ThemeScale<Type, Aliases extends string> = Array<Type> & Record<Aliases, Type>;
const breakpoints = ["600px", "900px", "1200px", "1800px"] as ThemeScale<string, BreakpointAlias>;
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export type SpacesAlias = 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'extraLarge';
export type SpacesScale<Type, Aliases extends string> = Array<Type> & Record<Aliases, Type>;
const spaces = ["4px", "8px", "16px", "32px", "48px", "56px"] as SpacesScale<string, SpacesAlias>;
spaces.smaller = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.larger = spaces[4];
spaces.extraLarge = spaces[5];


export default {
  colors,
  fontSizes,
  breakpoints,
  spaces,
};
