import { ReactNode } from 'react'
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Shape, Size, Color, Variant } from '@/components/types'

export interface ButtonProps {
  label?: string
  children?: ReactNode
  color?: Color
  variant?: Variant
  linkUrl?: string
  linkTarget?: string
  disabled?: boolean
  shape?: Shape
  size?: Size
  ariaLabel?: string
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
  htmlTarget?: AnchorHTMLAttributes<HTMLLinkElement>['target']
}
