import { Setup } from './models'

export type GetSetups = () => Promise<Setup[]>
export type ReadSetup = (title: Setup['driver']) => Promise<Setup>
export type WriteSetup = (title: Setup['driver'], content: Setup) => Promise<void>
export type CreateSetup = () => Promise<Setup['driver'] | false>
export type DeleteSetup = (title: Setup['driver']) => Promise<boolean>
