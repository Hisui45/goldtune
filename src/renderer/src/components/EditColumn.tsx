import { selectedSettingAtom, selectedSetupAtom, updateSettingTitle } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { AddSessionButton } from './Button/AddSessionButton'
import { AddSettingButton } from './Button/AddSettingButton'
import { SettingTextField } from './TextField/SettingTextField'

export type EditColumnProps = {
  onAddSettingClick?: () => void
  onAddSessionClick?: () => void
} & ComponentProps<'div'>

export const EditColumn = ({ onAddSettingClick, onAddSessionClick, ...props }: EditColumnProps) => {
  const selectedSetup = useAtomValue(selectedSetupAtom)

  const [selectedSetting, setSelectedSetting] = useAtom(selectedSettingAtom)
  const [setting, setSetting] = useAtom(updateSettingTitle)

  const handleSettingChange = (event) => {
    const newSetting = event.target.value
    setSetting(newSetting) // Update the driver value using the atom update function
  }

  if (selectedSetting != null) {
    return (
      <div {...props}>
        <p>Edit Setting</p>
        <SettingTextField
          value={selectedSetup?.settings[selectedSetting].title ?? ''}
          onChange={handleSettingChange}
        />
        {/* <AddSettingButton onClick={onAddSettingClick} /> */}
        <AddSessionButton onClick={onAddSessionClick} />
      </div>
    )
  } else {
    return (
      <div {...props}>
        <p>Edit</p>
        <AddSettingButton onClick={onAddSettingClick} />
        <AddSessionButton onClick={onAddSessionClick} />
      </div>
    )
  }
}

export default EditColumn
