import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'
import './style.css'

export const parameters = {
  actions: {
    argTypesRegex: '^on.*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: '#221a33',
      },
      {
        name: 'light',
        value: '#fff',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  ),
]
