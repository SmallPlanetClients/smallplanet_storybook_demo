import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import RadioBlock from './'
import AWSLogo from '@/assets/images/aws-logo.svg'
import DropletsLogo from '@/assets/images/droplets-logo.png'
import LinodeLogo from '@/assets/images/linode-logo.svg'

const logos = [
  {
    iconUrl: AWSLogo,
    iconPad: true
  },
  {
    iconUrl: DropletsLogo,
    iconPad: true
  },
  {
    iconUrl: LinodeLogo,
    iconPad: true
  }
]

const meta = {
  title: 'Controls/RadioBlock',
  component: RadioBlock,
  tags: ['controls', 'autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    name: {
      control: 'text'
    },
    fieldValue: {
      control: 'text'
    },
    logos: {
      control: 'object',
      defaultValue: logos
    },
    selected: {
      control: 'boolean'
    },
    onChange: {
      action: 'selected'
    }
  },
} satisfies Meta<typeof RadioBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Unselected: Story = {
  args: {
    name: 'some-id',
    fieldValue: 'some-value',
    logos: logos
  },
}

export const Selected: Story = {
  args: {
    name: 'some-id',
    fieldValue: 'some-value',
    logos: logos,
    selected: true
  },
}
