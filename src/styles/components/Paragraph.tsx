import styled, { css } from 'styled-components'

interface ParagraphProps {
  empty?: boolean
  flex?: boolean
  flexVerticalCenter?: boolean
  flexHorizontalCenter?: boolean
  fontSize?: string
  lineHeight?: number
}

export const Paragraph = styled('p')<ParagraphProps>`
  ${(props) =>
    (props.flex &&
      css`
        display: flex;
      `) ||
    (props.flexVerticalCenter &&
      css`
        align-items: center;
      `) ||
    (props.flexHorizontalCenter &&
      css`
        justify-content: center;
      `) ||
    (props.fontSize &&
      css`
        font-size: ${props.fontSize};
      `) ||
    (props.lineHeight &&
      css`
        line-height: ${props.lineHeight};
      `)}
    }
`
