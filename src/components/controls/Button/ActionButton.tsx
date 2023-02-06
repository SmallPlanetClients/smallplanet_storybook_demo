import { Button } from './style'
import { ButtonProps } from './types'

export default function ActionButton({
  color,
  htmlType = 'button',
  ariaLabel,
  disabled,
  children,
  shape,
  size,
  variant,
}: ButtonProps) {
  return (
    <Button
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      type={htmlType}
      size={size}
      disabled={disabled}
      color={color}
      shape={shape}
      variant={variant}
    >
      {children}
    </Button>
  )
}
