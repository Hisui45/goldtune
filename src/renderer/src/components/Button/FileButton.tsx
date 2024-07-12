import { Menu, TextButton, TextButtonProps } from '@/components'
import { createEmptySetupAtom, deleteSetupAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'

export const FileButton = ({ ...props }: TextButtonProps) => {
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

  const createEmptySetup = useSetAtom(createEmptySetupAtom)
  const deleteSetup = useSetAtom(deleteSetupAtom)

  const handleNew = () => {
    createEmptySetup()
  }

  const handleDelete = () => {
    deleteSetup()
  }

  return (
    <div>
      <TextButton onClick={handleClick} {...props}>
        <span>File</span>
      </TextButton>
      {popUpMenu && (
        <Menu className="absolute" ref={menuRef}>
          <TextButton className="w-full text-left hover:bg-[#18181846] rounded" onClick={handleNew}>
            <span>New</span>
          </TextButton>
          <TextButton
            className="w-full text-left hover:bg-[#18181846] rounded"
            onClick={handleDelete}
          >
            <span>Delete</span>
          </TextButton>
        </Menu>
      )}
    </div>
  )
}
