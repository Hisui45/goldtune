import { ReactNode, useEffect, useState } from 'react'
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeRestore
} from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'
import TopBarButtonRow from './TopBarButtonRow'

type TitlebarButtonProps = {
  message: 'minimizeApp' | 'maximizeApp' | 'closeApp'
  children: ReactNode
  className
}

const WindowControlButton = ({ className, message, children }: TitlebarButtonProps) => (
  <button
    className={twMerge('h-9 w-10 flex items-center justify-center', className)}
    onClick={() => {
      window.electron.ipcRenderer.sendMessage(message, [message])
    }}
  >
    {children}
  </button>
)

export const DraggableTopBar = () => {
  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {
    const maximizedStateChangedListener = (_event, isMaximized) => {
      setIsMaximized(isMaximized)
    }

    window.electron.ipcRenderer.on('maximizedStateChanged', maximizedStateChangedListener)
  }, [])

  return (
    <header className="absolute inset-0 h-9 w-screen grid grid-cols-3 justify-between items-center bg-container border-b border-background">
      <TopBarButtonRow className="flex items-center" />
      <span className="justify-self-center text-primary">GoldTune</span>
      <div className="flex items-center justify-self-end">
        <WindowControlButton
          className={'hover:bg-bgHover'}
          message={'minimizeApp'}
          children={<VscChromeMinimize />}
        ></WindowControlButton>
        <WindowControlButton className={'hover:bg-bgHover'} message={'maximizeApp'}>
          {isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}
        </WindowControlButton>
        <WindowControlButton
          className={'hover:bg-[#E81123]'}
          message={'closeApp'}
          children={<VscChromeClose />}
        ></WindowControlButton>
      </div>
    </header>
  )
}

export default DraggableTopBar
