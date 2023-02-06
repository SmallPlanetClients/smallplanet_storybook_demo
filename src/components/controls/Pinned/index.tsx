import { ButtonIcon, ButtonSvg } from '@/components/controls/Button/style'
import { Shape, Color, Size, Variant } from '@/components/types'

interface PinnedProps {
  /**
   * Size of Pin
   * @default Medium
   */
  size?: Size
  /**
   * Color of Pin
   * @default Negative (dark)
   */
  color?: Color
  /**
   * Disable button
   * @default false
   */
  disabled?: boolean
  /**
   * Define variant of pin
   * @default none
   */
  variant?: Variant
  /**
   * Define if pin is actually pinned (for styling)
   * @default false
   */
  isPinned?: boolean
}

export default function Pinned({
  size = Size.Medium,
  color = Color.Dark,
  disabled,
  variant,
  isPinned = false,
}: PinnedProps) {
  return (
    <ButtonIcon
      size={size}
      color={isPinned ? Color.Primary : color}
      variant={variant}
      shape={Shape.Circle}
      disabled={disabled}
      isActive={isPinned}
    >
      <ButtonSvg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.76 2.38a.67.67 0 0 1 .94 0l1.34 1.33.02.02 2.2 2.2.03.03 1.33 1.34a.67.67 0 0 1-.94.94l-.72-.72-3.43 6.17 1 1a.67.67 0 0 1-.95.93l-1.34-1.34-.02-.02-2.07-2.06-3.42 3.42a.67.67 0 0 1-.94-.94l3.42-3.42-2.47-2.48-.02-.02-1.34-1.34a.67.67 0 0 1 .94-.94l1 1 6.16-3.44-.72-.72a.67.67 0 0 1 0-.94Zm1.7 2.64 1.52 1.52-3.43 6.17-4.26-4.26 6.17-3.43Z"
          clipRule="evenodd"
        />
      </ButtonSvg>
    </ButtonIcon>
  )
}
