import { LibraryContainer, LibraryBackground } from './style'
import LibraryAppCard from '@/components/blocks/LibraryAppCard'
import FormBricksLogo from '@/assets/images/formbricks-badge.webp'
import { DeploymentState } from '@/components/types'

export default function Library({}) {
  const deployments = [
    {
      id: 0,
      instanceName: 'FormBricks-01',
      appID: '0',
      appName: 'FormBricks',
      appLogoUrl: FormBricksLogo,
      hostingProvider: 'Clovyr Hosting',
      isPinned: true,
      isUpgradable: true,
      state: DeploymentState.Running,
    },
  ]

  return (
    <LibraryContainer>
      {deployments.map((deployment) => {
        return <LibraryAppCard deployment={deployment} key={deployment.appID} />
      })}

      <LibraryBackground />
    </LibraryContainer>
  )
}
