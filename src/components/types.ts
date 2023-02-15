export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum Shape {
  Pill = 'pill',
  Circle = 'circle',
  Square = 'square'
}

export enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link'
}

export enum Variant {
  /**
   * Reduced opacity of element
   */
  Transparent = 'transparent',
  /**
   * blurred element
   */
  Translucent = 'translucent',
  /**
   * See through element
   */
  Hollow = 'hollow'
}

export enum IconPosition {
  Right = 'right',
  Left = 'left',
}

export enum DeploymentState {
  Created = "created",
  Starting = "starting",
  CreatingDNS = "creating-dns",
  LaunchingInstance = "launching-instance",
  WaitingInstance = "waiting-for-instance",
  LaunchedInstance = "launched",
  UpdatingDNS = "updating-dns",
  Deploying = "deploying",
  Running = "running",
  Sleeping = "sleeping",
  Destroying = "destroying",
  Destroyed = "destroyed",
  Expiring = 'expiring'
}

export interface Icon {
  iconUrl?: string
  iconBackgroundColor?: string
  iconPad?: boolean
  iconAlt?: string
}

export interface Deployment {
  id: number,
  instanceName: string,
  appID: string,
  appName: string,
  appLogo: Icon,
  hostingProvider: string,
  isPinned: boolean,
  isUpgradable: boolean,
  state: DeploymentState
}
