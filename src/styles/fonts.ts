import { css } from 'styled-components'
import LatoRegularTTF from '@/assets/fonts/Lato-Regular.ttf'
import LatoItalicTTF from '@/assets/fonts/Lato-Italic.ttf'
import LatoBoldTTF from '@/assets/fonts/Lato-Bold.ttf'
import WorkSansMediumTTF from '@/assets/fonts/WorkSans-Medium.ttf'
import WorkSansBoldTTF from '@/assets/fonts/WorkSans-Bold.ttf'
import IBMPlexMonoRegularTTF from '@/assets/fonts/IBMPlexMono-Regular.ttf'

export const Fonts = css`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${LatoRegularTTF});
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${LatoItalicTTF});
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${LatoBoldTTF});
  }

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans'), local('WorkSans'),
      url(${WorkSansMediumTTF}) format('ttf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans'), local('WorkSans'),
      url(${WorkSansBoldTTF}) format('ttf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${IBMPlexMonoRegularTTF});
  }
`
