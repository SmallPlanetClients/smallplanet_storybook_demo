import LibraryAppCard from '../../../views/AppLibrary'
import type { Meta, StoryObj } from '@storybook/react'
import { Size } from '@/components/types'
import FormBricksLogo from '@/assets/images/formbricks-badge.webp'
import { DeploymentState } from '@/components/types'

const deployment = {
  id: 0,
  instanceName: 'FormBricks-01',
  appID: '0',
  appName: 'FormBricks',
  appLogoUrl: FormBricksLogo,
  hostingProvider: 'Clovyr Hosting',
  isPinned: true,
  isUpgradable: true,
  state: DeploymentState.Running,
}

const meta = {
  title: 'Blocks/LibraryAppCard',
  component: LibraryAppCard,
  tags: ['views'],
  argTypes: {
    deployment: {
      description: 'App deployment object',
      defaultValue: deployment
    },
  },
} satisfies Meta<typeof LibraryAppCard>

export default meta

type Story = StoryObj<typeof meta>

export const Deployment: Story = {
  args: {
    deployment: deployment
  },
}
