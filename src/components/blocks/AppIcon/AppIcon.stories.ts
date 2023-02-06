import AppIcon from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Size } from '@/components/types'
import FormBricksLogo from '@/assets/images/formbricks-badge.webp'

const size = [Size.Small, Size.Medium, Size.Large]

const meta = {
  title: 'Blocks/AppIcon',
  component: AppIcon,
  tags: ['blocks'],
  argTypes: {
    size: {
      description: 'Component size',
      options: size,
    },
    logoUrl: {
      description: 'Logo URL prop',
      type: 'string',
      defaultValue: FormBricksLogo
    }
  },
} satisfies Meta<typeof AppIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    size: Size.Medium,
    logoUrl: FormBricksLogo
  },
}
