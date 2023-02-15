import { AppIconWrapper, AppIconInner, AppIconImage } from './style'
import { Size, Icon } from '@/components/types'

interface AppIconProps {
  size?: Size
  icon: Icon
  alt?: string
}

export default function AppIcon({
  size = Size.Medium,
  icon,
  alt,
}: AppIconProps) {
  return (
    <AppIconWrapper
      size={size}
      style={{
        backgroundColor: icon.iconBackgroundColor
          ? icon.iconBackgroundColor
          : '#fff',
      }}
    >
      <AppIconInner>
        <AppIconImage
          pad={icon?.iconPad}
          src={icon.iconUrl}
          alt={icon?.iconAlt}
        />
      </AppIconInner>
    </AppIconWrapper>
  )
}
