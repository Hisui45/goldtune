import {
  Content,
  DraggableTopBar,
  EditColumn,
  RootLayout,
  SettingDialog,
  SetupColumn,
  SetupHeaderRow,
  Sidebar,
  Topbar
} from '@/components'
import { useEffect, useRef, useState } from 'react'
import { OptimizedButton } from './components/Button/OptimizeButton'

const App = () => {
  const [popUpMenu, setPopUpMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setPopUpMenu(false) // Close the menu if clicked outside of it
      }
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPopUpMenu(false) // Close the menu if the escape key is pressed
      }
    }

    // Attach event listeners when the menu is open
    if (popUpMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscKey)
    }

    // Remove event listeners when the menu is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [popUpMenu])

  const handleClick = () => {
    setPopUpMenu(!popUpMenu)
  }
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        {popUpMenu && <SettingDialog ref={menuRef} onCancelClick={handleClick} />}
        <Sidebar className="p-5 bg-container flex flex-col justify-between">
          <div className="space-y-8">
            <SetupColumn className="space-y-2" />
            <EditColumn className="space-y-2" onAddSettingClick={handleClick} />
          </div>
          <OptimizedButton />
        </Sidebar>
        <Content>
          <Topbar>
            <SetupHeaderRow className="flex h-full items-end" />
          </Topbar>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
