import {
  changeSelectedSetupAtom,
  closeSetupAtom,
  closeSetupIdAtom,
  selectedSetupAtom,
  selectedSetupIdAtom,
  setupsAtom
} from '@/store'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

export const useSetupsList = (
  { onSelect }: { onSelect?: () => void },
  { onClose }: { onClose?: () => void }
) => {
  const setups = useAtomValue(setupsAtom)

  const [selectedSetupId, setSelectedSetupId] = useAtom(selectedSetupIdAtom)
  const [closeSetupId, setCloseSetupId] = useAtom(closeSetupIdAtom)

  const selectedSetup = useAtom(selectedSetupAtom)

  const changeSelectedSetup = useSetAtom(changeSelectedSetupAtom)
  const closeSelectedSetup = useSetAtom(closeSetupAtom)

  const handleSetupSelect = (id: string) => async () => {
    setSelectedSetupId(id)
    changeSelectedSetup()
    if (onSelect) {
      onSelect()
    }
  }

  const handleSetupClose =
    (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation()
      setCloseSetupId(id)
      console.log(id)
      closeSelectedSetup()
      if (onClose) {
        onClose()
      }
    }

  return {
    setups,
    selectedSetupId,
    handleSetupSelect,
    handleSetupClose,
    selectedSetup
  }
}
