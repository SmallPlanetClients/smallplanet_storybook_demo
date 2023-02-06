import { createGlobalStyle } from "styled-components"
import { Colors } from './colors'
import { Variables } from './variables'
import { Reset } from './reset'
import { Fonts } from './fonts'
import { Typography } from './typography'

export default createGlobalStyle`
  ${Colors}
  ${Variables}
  ${Fonts}
  ${Typography}
  ${Reset}
`
