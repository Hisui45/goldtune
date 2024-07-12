import { CreateSetup, DeleteSetup, GetSetups, ReadSetup, WriteSetup } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

export type Channels = 'minimizeApp' | 'maximizeApp' | 'closeApp' | 'maximizedStateChanged'

const electronHandler = {
  locale: navigator.language,
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args)
    },
    on(channel: Channels, listener: (...args: any[]) => void): () => void {
      ipcRenderer.on(channel, listener)
      return () => {
        ipcRenderer.removeListener(channel, listener)
      }
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args))
    },
    getSetups(...args: Parameters<GetSetups>) {
      ipcRenderer.invoke('getSetups', ...args)
    },
    readSetup: (...args: Parameters<ReadSetup>) => ipcRenderer.invoke('readSetup', ...args),
    writeSetup: (...args: Parameters<WriteSetup>) => ipcRenderer.invoke('writeSetup', ...args),
    createSetup: (...args: Parameters<CreateSetup>) => ipcRenderer.invoke('createSetup', ...args),
    deleteSetup: (...args: Parameters<DeleteSetup>) => ipcRenderer.invoke('deleteSetup', ...args)
  }
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler
