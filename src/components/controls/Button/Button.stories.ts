import type { Meta, StoryObj } from '@storybook/react'
import ActionButton from './ActionButton'
import { Shape, Size, Color, Variant } from '@/components/types'

const shapes = ['none', Shape.Circle, Shape.Pill, Shape.Square]
const size = [Size.Small, Size.Medium, Size.Large]
const variants = ['none', Variant.Hollow, Variant.Translucent, Variant.Transparent]

const meta = {
  title: 'Controls/Button',
  component: ActionButton,
  tags: ['controls', 'autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    disabled: {
      description: 'Disable button',
      type: 'boolean',
    },
    shape: {
      description: 'Button shape',
      options: shapes,
      defaultValue: 'pill',
    },
    size: {
      description: 'Button size',
      options: size,
    },
    label: {
      description: 'Input type label'
    },
    variant: {
      options: variants
    },
    children: {
      description: 'React node'
    },
  },
} satisfies Meta<typeof ActionButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: Color.Primary,
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    color: Color.Dark,
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    color: Color.Primary,
    size: Size.Large,
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    color: Color.Primary,
    size: Size.Small,
    children: 'Button',
  },
}
