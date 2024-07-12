// export type Setup = {
//   id: string
//   driver: string
//   classString: string
//   track: string
//   settingTitle: string[]
//   limit: Limit[]
//   setup: Session[]
//   isOpen: boolean
//   isSelected: boolean
// }

// export type Session = {
//   title: string
//   date: number
//   lapTime: number
//   setting: number[]
// }

export type Setup = {
  id: string
  driver: string
  classString: string
  track: string
  title: Setting
  date: Setting
  settings: Setting[]
  lapTime: Setting
  isOpen: boolean
  isSelected: boolean
}

export type Setting = {
  title: string
  settings: number[] | string[]
  limit: { lower?: number; upper?: number } | undefined
}

export type Session = {
  title: string
  date: number
  lapTime: number
  setting: number[]
}

// export type Limit = {
//   lower: number
//   upper: number
// }
