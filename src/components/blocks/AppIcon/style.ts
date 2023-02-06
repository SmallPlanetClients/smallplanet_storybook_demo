import styled, { css } from 'styled-components'
import { Size } from '@/components/types'

interface AppIconProps {
  empty?: boolean,
  size?: Size,
  pad?: boolean
}

export const AppIconWrapper = styled('div') <AppIconProps>`
  align-items: center;
  border-radius: 50%;
  filter: drop-shadow(0 1.2px 6px rgba(0, 0, 0, 0.25));
  display: flex;
  height: 50px;
  overflow: hidden;
  width: 50px;

  ${(props) =>
    (props.size === Size.Small &&
      css`
        height: 25px;
        width: 25px;
      `) ||
    (props.size === Size.Large &&
      css`
        height: 75px;
        width: 75px;
      `)}
    }
`

export const AppIconInner = styled('div') <AppIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
  (props.pad &&
    css`
      padding: 0.5rem;
    `)
  }
`

export const AppIconImage = styled.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  outline: none;
`
