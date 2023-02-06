import styled from 'styled-components'
import NatureBg from '@/assets/images/nature-bg.png'

export const LibraryContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

export const LibraryBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  max-height: 1000px;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
  }

  &:before {
    background-image: url(${NatureBg});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    z-index: 1;
  }

  &:after {
    background: rgba(${({ theme }) => theme.colors.greyMedium}, 0.4);
    backdrop-filter: blur(10px);
    z-index: 2;
  }
`
