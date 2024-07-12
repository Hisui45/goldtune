import { addSettingAtom } from '@renderer/store'
import { useAtom } from 'jotai'
import { ComponentProps, forwardRef, useState } from 'react'
import { TextButton } from '../Button'
import { TextField } from '../TextField'
import { Dialog } from './Dialog'

export type SettingDialogProps = {
  onCancelClick: () => void
} & ComponentProps<'div'>

export const SettingDialog = forwardRef<HTMLDivElement, SettingDialogProps>(
  ({ onCancelClick, className, children, ...props }, ref) => {
    const [setting, setSetting] = useState('')
    const [, addSetting] = useAtom(addSettingAtom)

    const onSettingChange = (event) => {
      setSetting(event.target.value)
    }

    const onDoneClick = () => {
      addSetting(setting)
      setSetting('')
      onCancelClick()
    }

    return (
      <Dialog ref={ref} className="p-4 space-y-2" {...props}>
        <h2 className="font-light text-lg">Name Setting:</h2>
        <TextField className="w-full text-background" onChange={onSettingChange} />
        <div className="w-full flex justify-end">
          <TextButton onClick={onCancelClick}>
            <span>Cancel</span>
          </TextButton>
          <TextButton onClick={onDoneClick}>
            <span>Done</span>
          </TextButton>
        </div>
      </Dialog>
    )
  }
)
