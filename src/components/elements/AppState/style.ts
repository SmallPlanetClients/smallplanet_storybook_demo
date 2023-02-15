import styled, { css } from 'styled-components'
import { DeploymentState } from '@/components/types'

interface AppStateProps {
  empty?: boolean,
  state?: DeploymentState
}

export const AppStateWrapper = styled('div') <AppStateProps>`
  border-radius: 50%;
  display: flex;

  ${(props) =>
    (props.state === DeploymentState.Running &&
      css`
        color: ${({ theme }) => theme.colors.primary};
      `) ||
    (props.state === DeploymentState.Created &&
      css`
        color: ${({ theme }) => theme.colors.greyMedium};
      `) ||
    (props.state === DeploymentState.Expiring &&
      css`
        color: ${({ theme }) => theme.colors.yellow};
      `) ||
    (props.state === DeploymentState.Sleeping &&
      css`
        color: ${({ theme }) => theme.colors.purpleSlight};
      `) ||
    (props.state === DeploymentState.Expiring &&
      css`
        color: ${({ theme }) => theme.colors.redSubtle};
      `)
  }
`

export const AppStateIcon = styled.svg`
  filter: drop-shadow(0 0 8px currentColor);
`
