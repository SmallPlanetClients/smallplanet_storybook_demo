import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: 'var(--action-primary)',
    primaryRgb: 'var(--action-primary-rgb)',
    secondary: 'var(--action-secondary)',
    secondaryRgb: 'var(--action-secondary-rgb)',
    black: 'var(--black-primary)',
    blackRgb: 'var(--black-primary-rgb)',
    negativePrimary: 'var(--negative-primary)',
    negativePrimaryRgb: 'var(--negative-primary-rgb)',
    negativeSecondary: 'var(--negative-secondary)',
    negativeSecondaryRgb: 'var(--negative-secondary-rgb)',
    purpleDark: 'var(--purple-dark)',
    purpleDarkRgb: 'var(--purple-dark-rgb)',
    white: 'var(--white-primary)',
    whiteRgb: 'var(--white-primary-rgb)',
    greyMedium: 'var(--gray-medium)',
    greyMediumRgb: 'var(--gray-medium-rgb)',
    yellow: 'var(--yellow)',
    yellowRgb: 'var(--yellow-rgb)',
    redSubtle: 'var(--red-subtle)',
    redSubtleRgb: 'var(--red-subtle-rgb)',
    purpleSlight: 'var(--purple-slight)',
    purpleSlightRgb: 'var(--purple-slight-rgb)',
    greenLight: 'var(--green-light)',
    greenLightRgb: 'var(--green-light-rgb)'
  },
  fonts: {
    lato: 'var(--font-family-lato)',
    monospace: 'var(--font-family-monospace)',
    worksans: 'var(--font-family-work-sans)'
  },
  typography: {
    sizes: {
      base: 'var(--theme-font-size)',
      medium: 'calc(var(--theme-font-size) * 1.65)',
      big: 'calc(var(--theme-font-size) * 2.25)'
    },
    weight: {
      base: 'var(--theme-font-weight)',
      medium: 'calc(var(--theme-font-weight) + 100)',
      bold: 'calc(var(--theme-font-weight) + 300)',
    },
    lineHeight: 'var(--theme-font-line-height)'
  }
}
