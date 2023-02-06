import { AppStateWrapper, AppStateIcon } from './style'
import { DeploymentState } from '@/components/types'

interface AppStateProps {
  state: DeploymentState
}

export default function AppState({ state }: AppStateProps) {
  return (
    <AppStateWrapper state={state}>
      <AppStateIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
      >
        <g>
          <circle cx="12" cy="12" r="3.6" fill="currentColor"></circle>
        </g>
      </AppStateIcon>
    </AppStateWrapper>
  )
}
