import styled, { css } from 'styled-components'
import { Shape, Size, Color, Variant } from '@/components/types'

interface ButtonStyleProps {
  empty?: boolean,
  shape?: Shape
  color?: Color
  variant?: Variant
  size?: Size | undefined
  isActive?: boolean | undefined
}

export const Button = styled('button') <ButtonStyleProps>`
  --button-font-size: ${({ theme }) => theme.typography.sizes.base};
  --button-font-weight: ${({ theme }) => theme.typography.weight.base};
  --button-line-height: ${({ theme }) => theme.typography.lineHeight};
  --button-border-size: 1px;
  --button-color: ${({ theme }) => theme.colors.negativePrimary};
  --button-color-hover: var(--button-color);
  --button-border-color: transparent;
  --button-border-hover-color: transparent;
  --button-padding-x: 1rem;
  --button-padding-y: 0.425rem;

  // shapes

  ${(props) => {
    switch (props.shape) {
      case Shape.Circle:
        return css`
          --button-border-radius: 50%;
        `
      case Shape.Square:
        return css`
          --button-border-radius: 0;
        `
      default:
        return css`
          --button-border-radius: 4.0625rem;
        `
    }
  }}

  // colors

  ${(props) => {
    switch (props.color) {
      case Color.Primary:
        return css`
          --button-bg-color: ${({ theme }) => theme.colors.secondary};
          --button-bg-hover-color: ${({ theme }) => theme.colors.primary};
        `
      case Color.Dark:
      case Color.Secondary:
        return css`
          --button-color: ${({ theme }) => theme.colors.primary};
          --button-color-hover: ${({ theme }) => theme.colors.negativePrimary};
          --button-bg-color:  ${({ theme }) => theme.colors.negativePrimary};
          --button-bg-hover-color: ${({ theme }) => theme.colors.primary};
        `
      case Color.Success:
        return css`
          --button-bg-color: ${({ theme }) => theme.colors.greenLight};
          --button-bg-hover-color: rgba(${({ theme }) => theme.colors.greenLightRgb}, 0.6);
        `
      case Color.Danger:
        return css`
          --button-bg-color: ${({ theme }) => theme.colors.redSubtle};
          --button-bg-hover-color: rgba(${({ theme }) => theme.colors.redSubtleRgb}, 0.6);
        `
      case Color.Warning:
        return css`
          --button-bg-color: ${({ theme }) => theme.colors.yellow};
          --button-bg-hover-color: rgba(${({ theme }) => theme.colors.yellowRgb}, 0.6);
        `
      default:
        return css`
          --button-bg-color: transparent;
          --button-bg-hover-color: transparent;
        `
    }
  }}

  // sizes

  ${(props) => {
    switch (props.size) {
      case Size.Large:
        return css`
          font-size: calc(${({ theme }) => theme.typography.sizes.base} * 1.2);
          padding: calc(var(--button-padding-y) * 2) calc(var(--button-padding-x) * 2);
        `
      case Size.Small:
        return css`
          font-size: calc(${({ theme }) => theme.typography.sizes.base} / 1.35);
          padding: calc(var(--button-padding-y) / 1.35) calc(var(--button-padding-x) / 1.35);
        `
      default:
        return css`
          font-size: var(--button-font-size);
          padding: var(--button-padding-y) var(--button-padding-x);
        `
    }
  }}

  // variants

  ${(props) => {
    switch (props.variant) {
      case Variant.Translucent:
        return css`
          background-color: rgba(${({ theme }) => theme.colors.greenLightRgb}, 0.1);
        `
      case Variant.Transparent:
        return css`
          background-color: var(--button-bg-color);
          opacity: 0.6;
        `
      case Variant.Hollow:
        return css`
          background-color: transparent;
          border-color: var(--button-bg-color);
          color: var(--button-bg-color);
        `
      default:
        return css`
          background-color: var(--button-bg-color);
        `
    }
  }}

  color: ${(props) => props.variant === Variant.Hollow ? 'var(--button-bg-color)' : 'var(--button-color)'};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-weight: var(--button-font-weight);
  letter-spacing: 0.14rem;
  line-height: var(--button-line-height);
  border: 1px solid ${(props) => props.variant === Variant.Hollow ? 'var(--button-bg-color)' : 'transparent'};
  border-radius: var(--button-border-radius);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  user-select: none;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;

  &:hover {
    color: var(--button-color-hover);
    background-color: var(--button-bg-hover-color);
    border-color: transparent;
  }

  &[type='button']:not(:disabled),
  &[type='reset']:not(:disabled),
  &[type='submit']:not(:disabled),
  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled,
  &.disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
    stroke: currentcolor;
  }
`

export const ButtonIcon = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 8.5px;
  padding-left: 16.15px;
  padding-right: 16.15px;
  padding-top: 6.8px;
  width: 40px;
  height: 40px;

  ${(props) =>
  (props.isActive &&
    css`
        color: ${({ theme }) => theme.colors.negativePrimary};
      `)}
  }
`

export const ButtonSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 50%;
`
