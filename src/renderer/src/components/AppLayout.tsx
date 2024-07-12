import { setupMocks } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('min-w-[220px] mt-9 h-[100vh+10px] overflow-y-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Topbar = ({ className, children, ...props }: ComponentProps<'div'>) => {
  if (setupMocks.length === 0) {
    return (
      <div className={twMerge('h-9 overflow-hidden ', className)} {...props}>
        {children}
      </div>
    )
  } else {
    return (
      <div
        className={twMerge('h-9 overflow-hidden bg-container w-[100vw-220px]', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
}

// export const Table = ({ className, children, ...props }: ComponentProps<'table'>) => {
//   return (
//     <table className={twMerge('', className)} {...props}>
//       {children}
//     </table>
//   )
// }
