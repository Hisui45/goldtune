import { FilledButton, FilledButtonProps } from '@/components'

export const AddSettingButton = ({ ...props }: FilledButtonProps) => {
  //   const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {}

  return (
    <FilledButton {...props}>
      <span>Add Setting</span>
    </FilledButton>
  )
}
