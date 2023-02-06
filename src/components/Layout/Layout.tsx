import {
  layout,
  LayoutProps,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system'
import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'
import GlobalStyles from '@/styles/global'

const Wrapper = styled.div<LayoutProps & SpaceProps>`
  ${space};
  ${layout};
  margin: 0 auto;
  goats: ${(props) => {
    console.log('props', props)
    return props.theme.colors.primary
  }};
`

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper
      width={[
        1, // 100% below the smallest breakpoint (all viewports)
        1 / 2, // 50% from the next breakpoint and up
      ]}
      padding={{ default: 3, sm: 2, lg: 1 }}
    >
      <GlobalStyles />
      <main>{children}</main>
    </Wrapper>
  )
}
