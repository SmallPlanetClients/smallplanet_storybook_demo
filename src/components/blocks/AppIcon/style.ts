import styled, { css } from 'styled-components'
import { Size } from '@/components/types'

interface AppIconProps {
  empty?: boolean,
  size?: Size,
  pad?: boolean,
  backgroundColor?: string
}

export const AppIconWrapper = styled('div') <AppIconProps>`
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
  filter: drop-shadow(0 1.2px 6px rgba(0, 0, 0, 0.25));
  display: flex;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: -0.5rem;
  }
  
  ${(props) => {
    switch (props.size) {
      case Size.Small:
        return css`
          height: 25px;
          width: 25px;
        `
      case Size.Large:
        return css`
          height: 75px;
          width: 75px;
        `
      default:
        return css`
          height: 50px;
          width: 50px;
        `
    }
  }}
`

export const AppIconInner = styled('div') <AppIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const AppIconImage = styled('img') <AppIconProps>`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  outline: none;

  ${(props) => {
    switch (props.pad) {
      case true:
        return css`
          padding: 0.6rem;
        `
      default:
        return css`
          padding: 0.4rem;
        `
    }
  }}
`
