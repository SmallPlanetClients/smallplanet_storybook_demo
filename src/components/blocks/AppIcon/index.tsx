import { AppIconWrapper, AppIconInner, AppIconImage } from './style'
import { Size } from '@/components/types'

interface AppIconProps {
  size?: Size
  logoUrl: string
  pad?: boolean
  alt?: string
}

export default function AppIcon({
  size = Size.Medium,
  logoUrl,
  pad,
  alt,
}: AppIconProps) {
  return (
    <AppIconWrapper size={size}>
      <AppIconInner>
        <AppIconImage src={logoUrl} alt={alt} />
      </AppIconInner>
    </AppIconWrapper>
  )
}
