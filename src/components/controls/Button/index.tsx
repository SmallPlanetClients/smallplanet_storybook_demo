import ActionButton from './ActionButton'
import LinkButton from './LinkButton'
import { Shape, Size, Color } from '../../types'
import { ButtonProps } from './types'

export default function Button({
  label,
  color = Color.Primary,
  variant,
  linkUrl,
  disabled,
  shape = Shape.Pill,
  size = Size.Medium,
  ariaLabel,
  htmlType = 'button',
  htmlTarget = '_self',
  children,
}: ButtonProps) {
  const isExternalLink = linkUrl && linkUrl.startsWith('http')

  return (
    <>
      {isExternalLink ? (
        <LinkButton />
      ) : (
        <ActionButton
          label={label}
          color={color}
          variant={variant}
          disabled={disabled}
          shape={shape}
          size={size}
          ariaLabel={ariaLabel}
          htmlType={htmlType}
        >
          {children}
        </ActionButton>
      )}
    </>
  )
}
