import AppIcon from '@/components/blocks/AppIcon'
import Button from '@/components/controls/Button'
import Bookmark from '@/components/controls/Bookmark'
import AppState from '@/components/elements/AppState'
import { Paragraph } from '@/styles/components/Paragraph'
import { Deployment } from '@/components/types'
import {
  LibraryAppCardContainer,
  CardInner,
  CardDescription,
  InstanceMuted,
  InstanceName,
  CardButtonGroup,
  CardHeader,
} from './style'

interface LibraryAppCard {
  deployment: Deployment
}

export default function LibraryAppCard({ deployment }: LibraryAppCard) {
  return (
    <LibraryAppCardContainer>
      <CardInner>
        <CardHeader>
          <AppIcon logoUrl={deployment.appLogoUrl} alt={deployment.appName} />
          <Bookmark />
        </CardHeader>

        <CardDescription>
          <InstanceMuted>{deployment.appName}</InstanceMuted>
          <InstanceName>{deployment.instanceName}</InstanceName>

          <Paragraph flex flexVerticalCenter>
            <AppState state={deployment.state} /> App is {deployment.state}
          </Paragraph>

          <InstanceMuted>Hosted on {deployment.hostingProvider}</InstanceMuted>
        </CardDescription>

        <CardButtonGroup>
          <Button>Open</Button>
        </CardButtonGroup>
      </CardInner>
    </LibraryAppCardContainer>
  )
}
