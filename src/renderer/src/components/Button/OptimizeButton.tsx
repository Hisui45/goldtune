import { FilledButton, FilledButtonProps } from '@/components'

export const OptimizedButton = ({ ...props }: FilledButtonProps) => {
  //   const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    console.log('iron')
  }

  return (
    <FilledButton
      className="bg-primary hover:bg-[#f3ed3ddf] text-background font-bold"
      onClick={handleCreation}
      {...props}
    >
      <span>Optimize</span>
    </FilledButton>
  )
}
