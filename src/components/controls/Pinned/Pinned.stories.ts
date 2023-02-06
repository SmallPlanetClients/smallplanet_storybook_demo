import Pinned from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Size, Color, Variant } from '@/components/types'

const size = [Size.Small, Size.Medium, Size.Large]

const meta = {
  title: 'Controls/Pinned',
  component: Pinned,
  tags: ['controls', 'autodocs'],
  argTypes: {
    size: {
      description: 'Pinned button size',
      options: size,
    },
    disabled: {
      type: 'boolean'
    },
    color: {
      option: Color
    },
    isPinned: {
      type: 'boolean'
    }
  },
} satisfies Meta<typeof Pinned>

export default meta

type Story = StoryObj<typeof meta>

export const isUnpinned: Story = {
  args: {
    isPinned: false,
  },
}

export const isPinned: Story = {
  args: {
    isPinned: true,
  },
}
