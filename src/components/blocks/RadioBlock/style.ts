import styled, { css } from 'styled-components'
import { Size } from '@/components/types'

interface RadioBlockWrapperProps {
  logoSize?: Size;
  logoPad?: boolean;
  selected?: boolean;
}

export const RadioBlockWrapper = styled('div') <RadioBlockWrapperProps>`
  margin-top: 2rem;
`

export const RadioInputLabel = styled('label') <RadioBlockWrapperProps>`
  background: ${({ theme }) => theme.background.gradient.primary};
  border-radius: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  justify-content: space-between;
  padding: 1.25rem 1.875rem;
  cursor: pointer;

  ${(props) => {
    switch (props.selected) {
      case true:
        return css`
          border-color: ${({ theme }) => theme.colors.primary};
        `
      default:
        return css`
          border-color: rgba(${({ theme }) => theme.colors.purpleDarkerRgb}, 0.6);
        `
    }
  }}
`

export const RadioBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 2rem;
`

export const RadioBlockColumn = styled.div``

export const RadioBlockBody = styled.div``

const selectedState = css`
  + div {
    background: radial-gradient(${({ theme }) => theme.colors.primary} 50%, rgba(255, 0, 0, 0) 51%);
  }
`

export const RadioInput = styled('input') <RadioBlockWrapperProps>`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked {
    ${selectedState}
  }

  ${(props) => (props.selected && selectedState)}
`

export const RadioControl = styled.div`
  display: block;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin-top: 0.25rem;
`
