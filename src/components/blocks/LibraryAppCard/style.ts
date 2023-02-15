import styled from 'styled-components'

export const LibraryAppCardContainer = styled('div')`
  backdrop-filter: blur(1.125rem);
  background: linear-gradient(180deg, rgba(${({ theme }) => theme.colors.purpleDarkRgb}, 0.4) 0%, rgba(${({ theme }) => theme.colors.purpleDarkRgb}, 0.6) 92%);
  border-style: solid;
  border-color: transparent;
  border-radius: 1rem;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    background: rgba(${({ theme }) => theme.colors.primaryRgb}, 0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const CardHeader = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CardInner = styled('div')`
  font-size: calc(${({ theme }) => theme.typography.sizes.base} / 1.2);
  padding: 2rem;
`

export const CardDescription = styled('div')`
  margin-top: 2rem;
`

export const InstanceMuted = styled('div')`
  color: ${({ theme }) => theme.colors.greyMedium};
`

export const InstanceName = styled('div')`
  font-family: ${({ theme }) => theme.fonts.worksans};
  font-size: ${({ theme }) => theme.typography.sizes.big};
  margin-bottom: 1rem;
  letter-spacing: -0.0375em;
  line-height: 1.2;
`

export const CardButtonGroup = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
`
