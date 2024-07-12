import { FilledButton, FilledButtonProps } from '@/components'

export const AddSessionButton = ({ ...props }: FilledButtonProps) => {
  //   const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    console.log('iron')
  }

  return (
    <FilledButton onClick={handleCreation} {...props}>
      <span>Add Session</span>
    </FilledButton>
  )
}
