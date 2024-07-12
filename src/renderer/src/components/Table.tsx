import {
  selectedSettingAtom,
  updateDateSetting,
  updateLapTimeSetting,
  updateLowerLimit,
  updateSetting,
  updateTitleSetting,
  updateUpperLimit
} from '@renderer/store'
import { cn } from '@renderer/utils'
import { Setting, Setup } from '@shared/models'
import { useAtom } from 'jotai'
import { ComponentProps, forwardRef, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { TableTextField } from './TextField'
import { DatePicker } from './TextField/DatePicker'
import { LimitFields } from './TextField/LimitsFields'

const TableHeader = ({ title }: { title: string }) => {
  return <h4 className="text-sm text-left font-light truncate max-w-32 h-6">{title}</h4>
}

export type SettingTableProps = ComponentProps<'div'> & {
  setup?: Setup
}

const SettingTable = forwardRef<HTMLDivElement, SettingTableProps>(
  ({ className, children, setup, ...props }) => {
    const [, updateSettingValue] = useAtom(updateSetting)

    const settingChange = (event, outerIndex: number, innerIndex: number) => {
      updateSettingValue(event.target.value, outerIndex, innerIndex)
    }

    const [, updateUpperValue] = useAtom(updateUpperLimit)

    const upperChange = (event, index: number) => {
      updateUpperValue(event.target.value, index)
    }

    const [, updateLowerValue] = useAtom(updateLowerLimit)

    const lowerChange = (event, index: number) => {
      updateLowerValue(event.target.value, index)
    }

    const [selectedCol, setSelectedCol] = useAtom(selectedSettingAtom)

    const selectColumn = (index) => {
      setSelectedCol(index)
    }

    const handleTextFieldClick = (event) => {
      event.stopPropagation() // Prevent event propagation to the parent div
      setSelectedCol(null)
    }

    const menuRef = useRef<HTMLDivElement>(null)

    // var addMenu

    // const {remote} = require('electron')
    //      const {Menu, MenuItem} = remote

    //      const menu = new Menu()
    // const addMenu = new Menu()

    // addMenu.append(
    //   new MenuItem({
    //     label: 'doSomething',
    //     click: function () {
    //       // doSomething
    //     }
    //   })
    // )

    const openContextMenu = (e) => {
      // e.preventDefault()
      // addMenu.popup({ x: e.clientX, y: e.clientY })
    }

    // useEffect(() => {
    //   const handleClickOutside = (event: MouseEvent) => {
    //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    //       setSelectedCol(null)
    //       // Close the menu if clicked outside of it
    //     }
    //   }

    //   const handleEscKey = (event: KeyboardEvent) => {
    //     if (event.key === 'Escape') {
    //       setSelectedCol(null)
    //     }
    //   }

    //   // Attach event listeners when the menu is open
    //   if (selectedCol) {
    //     document.addEventListener('mousedown', handleClickOutside)
    //     document.addEventListener('keydown', handleEscKey)
    //   }

    //   // Remove event listeners when the menu is closed
    //   return () => {
    //     // document.removeEventListener('mousedown', handleClickOutside)
    //     // document.removeEventListener('keydown', handleEscKey)
    //   }
    // }, [selectedCol])

    return (
      <div
        id="settings"
        className={`overflow-x-auto grid grid-flow-col gap-x-0.5 ${className}`}
        // ref={menuRef}
        {...props}
      >
        {setup?.settings.map((settingCol: Setting, outerIndex: number) => (
          <div
            key={outerIndex}
            ref={menuRef}
            className={cn('pb-2 border border-[#00000000]', {
              'border-primary': selectedCol === outerIndex
            })}
            onContextMenu={(event) => openContextMenu(event)}
            onClick={handleTextFieldClick}
          >
            <TableHeader title={settingCol.title} />
            <div className="grid grid-flow-row space-y-1 mb-6">
              {settingCol.settings.map((value, innerIndex) => (
                <TableTextField
                  onClick={handleTextFieldClick}
                  key={innerIndex}
                  value={value}
                  onChange={(event) => settingChange(event, outerIndex, innerIndex)}
                />
              ))}
            </div>
            {settingCol.limit && (
              <LimitFields
                lowerLimit={settingCol.limit.lower ?? 0}
                onLowerChange={(event) => lowerChange(event, outerIndex)}
                upperLimit={settingCol.limit.upper ?? 0}
                onUpperChange={(event) => upperChange(event, outerIndex)}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
)

// SettingTable.displayName = 'Content'

const totalLength = 12

export const Table = ({ className, setup }: ComponentProps<'div'> & { setup: Setup }) => {
  const [, updateTitle] = useAtom(updateTitleSetting)
  const [, updateDate] = useAtom(updateDateSetting)
  const [, updateLapTime] = useAtom(updateLapTimeSetting)

  const titleSettingChange = (event, index: number) => {
    updateTitle(event.target.value, index)
  }

  const dateSettingChange = (event, index: number) => {
    updateDate(event.target.value, index)
  }

  const lapTimeSettingChange = (event, index: number) => {
    updateLapTime(event.target.value, index)
  }

  return (
    <div
      className={twMerge(
        'grid grid-cols-[min-content_minmax(auto,_max-content)_min-content] w-[100vw-220px] gap-1 h-full items-start',
        className
      )}
    >
      <div className="flex gap-1">
        <div>
          <TableHeader title="Title" />
          <div className="space-y-1">
            {setup.title.settings.map((setting: number | string, index: number) => (
              <TableTextField
                key={index}
                value={setting}
                onChange={(event) => titleSettingChange(event, index)}
              />
            ))}
          </div>
        </div>
        <div>
          <TableHeader title="Date" />
          <div className="space-y-1">
            {setup.date.settings.map((setting, index) => (
              <DatePicker
                key={index}
                value={new Date(setting).toISOString().split('T')[0]}
                hasDate={true}
                onChange={(event) => dateSettingChange(event, index)}
              />
            ))}
          </div>
        </div>
      </div>
      <SettingTable setup={setup} />
      <div>
        <TableHeader title="Lap Time" />
        <div className="space-y-1">
          {setup.lapTime.settings.map((setting: number | string, index) => (
            <TableTextField
              key={index}
              value={setting}
              onChange={(event) => lapTimeSettingChange(event, index)}
            />
          ))}
        </div>
      </div>

      {/* 
          {Array.from({ length: totalLength - setup.setup.length }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <TableTextField />
              </td>
              <td>
                <DatePicker hasDate={false} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SettingTable ref={ref} setup={setup} />
      <table className="">
        <thead>
          <tr>
            <TableHeader title="Lap Time" />
          </tr>
        </thead>
        <tbody>
          {setup.setup.map((session: Session, sessionIndex: number) => (
            <tr key={sessionIndex}>
              <td>
                <TableTextField value={session.lapTime} />
              </td>
            </tr>
          ))}
          {Array.from({ length: totalLength - setup.setup.length }).map((_, rowIndex) => (
            <tr>
              <td key={rowIndex}>
                <TableTextField />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

// export const Table = ({ className, setup, ref }: ComponentProps<'div'> & { setup: Setup }) => {
//   return (
//     <div
//       className={twMerge(
//         'grid grid-cols-[min-content_minmax(auto,_max-content)_min-content] w-[100vw-220px] gap-1 h-full items-start',
//         className
//       )}
//     >
//       <table className="">
//         <thead>
//           <tr className="">
//             <TableHeader title="Title" />
//             <TableHeader title="Date" />
//           </tr>
//         </thead>
//         <tbody>
//           {setup.setup.map((session: Session, sessionIndex: number) => (
//             <tr key={sessionIndex}>
//               <td className="">
//                 <TableTextField
//                   value={session.title}
//                   onChange={(event) => titleChange(event, session)}
//                 />
//               </td>
//               <td>
//                 <DatePicker
//                   value={new Date(session.date).toISOString().split('T')[0]}
//                   hasDate={true}
//                 />
//               </td>
//             </tr>
//           ))}
//           {Array.from({ length: totalLength - setup.setup.length }).map((_, rowIndex) => (
//             <tr key={rowIndex}>
//               <td>
//                 <TableTextField />
//               </td>
//               <td>
//                 <DatePicker hasDate={false} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <SettingTable ref={ref} setup={setup} />
//       <table className="">
//         <thead>
//           <tr>
//             <TableHeader title="Lap Time" />
//           </tr>
//         </thead>
//         <tbody>
//           {setup.setup.map((session: Session, sessionIndex: number) => (
//             <tr key={sessionIndex}>
//               <td>
//                 <TableTextField value={session.lapTime} />
//               </td>
//             </tr>
//           ))}
//           {Array.from({ length: totalLength - setup.setup.length }).map((_, rowIndex) => (
//             <tr>
//               <td key={rowIndex}>
//                 <TableTextField />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

export default Table
