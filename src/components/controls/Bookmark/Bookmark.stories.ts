import Bookmark from './'
import type { Meta, StoryObj } from '@storybook/react'
import { Size, Color, Variant } from '@/components/types'

const size = [Size.Small, Size.Medium, Size.Large]

const meta = {
  title: 'Controls/Bookmark',
  component: Bookmark,
  tags: ['controls', 'autodocs'],
  argTypes: {
    size: {
      description: 'Bookmark button size',
      options: size,
    },
    disabled: {
      type: 'boolean'
    },
    color: {
      option: Color
    }
  },
} satisfies Meta<typeof Bookmark>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: Color.Dark,
    size: Size.Medium
  },
}
