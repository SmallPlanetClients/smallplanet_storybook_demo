import AppState from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { DeploymentState } from '@/components/types'

const meta = {
  title: 'Elements/AppState',
  component: AppState,
  tags: ['elements'],
  argTypes: {
    state: {
      description: 'App deployment states',
      options: DeploymentState,
    },
  },
} satisfies Meta<typeof AppState>

export default meta

type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    state: DeploymentState.Running
  },
}
