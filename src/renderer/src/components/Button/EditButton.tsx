import { TextButton, TextButtonProps } from '@/components'

export const EditButton = ({ ...props }: TextButtonProps) => {
  //   const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    console.log('iron')
  }

  return (
    <TextButton onClick={handleCreation} {...props}>
      <span>Edit</span>
    </TextButton>
  )
}
