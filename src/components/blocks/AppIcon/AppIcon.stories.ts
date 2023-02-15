import AppIcon from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Size } from '@/components/types'
import AWSLogo from '@/assets/images/aws-logo.svg'

const size = [Size.Small, Size.Medium, Size.Large]

const meta = {
  title: 'Blocks/AppIcon',
  component: AppIcon,
  tags: ['blocks', 'autodocs'],
  argTypes: {
    size: {
      description: 'Component size',
      options: size,
    },
    icon: {
      description: 'Logo object',
      iconUrl: {
        options: [AWSLogo],
      },
      iconBackgroundColor: {
        control: 'color'
      },
      iconPad: {
        control: 'boolean'
      },
      iconAlt: {
        control: 'text'
      }
    }
  },
} satisfies Meta<typeof AppIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    size: Size.Medium,
    icon: {
      iconUrl: AWSLogo,
      iconBackgroundColor: '#fff',
    }
  }
}
