import 'styled-components'

declare module 'styled-components' {
  interface FontSizes {
    base: string,
    medium: string,
    big: string
  }

  interface FontWeights {
    base: string,
    medium: string,
    bold: string
  }

  export interface DefaultTheme {
    colors: {
      primary: string,
      primaryRgb: string,
      secondary: string,
      secondaryRgb: string,
      black: string,
      blackRgb: string,
      negativePrimary: string,
      negativePrimaryRgb: string,
      negativeSecondary: string,
      negativeSecondaryRgb: string,
      purpleDark: string,
      purpleDarkRgb: string,
      white: string,
      whiteRgb: string,
      greyMedium: string,
      greyMediumRgb: string,
      yellow: string,
      yellowRgb: string,
      redSubtle: string,
      redSubtleRgb: string,
      purpleSlight: string,
      purpleSlightRgb: string,
      greenLight: string,
      greenLightRgb: string
    },
    fonts: {
      lato: string,
      monospace: string,
      worksans: string
    },
    typography: {
      sizes: FontSizes,
      weight: FontWeights,
      lineHeight: string,
    }
  }
}