import { FC, useState } from 'react'
import { Base } from './base'
import { Button } from './button'

type Props = {
  message: string
  title?: string
  cancelLabel: string
  confirmLabel: string
  onClose: (value: boolean) => void
}

export const Confirmation: FC<Props> = ({ message, title, onClose, cancelLabel, confirmLabel }) => {
  const [value, setValue] = useState<boolean>()

  const handleClose = (value: boolean) => {
    setValue(value)
  }

  return (
    <Base visible={value === undefined} onExitComplete={() => onClose(value!)}>
      <div className="flex flex-col gap-2">
        {title && <div className="text-lg font-semibold text-gray-900">{title}</div>}
        <div className="text-sm text-gray-900">{message}</div>
      </div>

      <div className="h-px w-full bg-gray-200"></div>

      <div className="flex gap-2">
        <Button onClick={() => handleClose(true)}>
          {confirmLabel}
        </Button>

        <Button onClick={() => handleClose(false)} intent="ghost">
          {cancelLabel}
        </Button>
      </div>
    </Base>
  )
}
