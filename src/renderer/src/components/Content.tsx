import logo from '@/assets/logo-transparent-crop.png'
import { Table } from '@/components'
import { selectedSetupAtom } from '@renderer/store'
import { useAtom } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextButton } from './Button'

export const Content = ({ className, children, ...props }: ComponentProps<'div'>) => {
  const selectedSetup = useAtom(selectedSetupAtom)

  if (selectedSetup[0]) {
    return (
      <div className={twMerge('flex-1 w-[100vw-220px] mt-9', className)} {...props}>
        {children}
        <Table setup={selectedSetup[0]} className="m-4" />
      </div>
    )
  } else {
    return (
      <div
        className={twMerge(
          'flex-1 w-[100vw-220px] h-[100vh+10px] mt-9 grid justify-items-center',
          className
        )}
        {...props}
      >
        <img src={logo} className="w-32 h-auto self-end" />
        <TextButton className="self-start">
          <span>Open File</span>
        </TextButton>
      </div>
    )
  }
}
