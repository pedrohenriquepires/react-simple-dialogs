import { FC, useState } from 'react'
import { Base } from '../base'
import { Button } from '../button'

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
    <Base visible={value === undefined} onExitComplete={() => onClose(value!)} dataTestId="confirmation-dialog">
      <div className="rsd-flex rsd-w-full rsd-flex-col rsd-gap-2">
        <div className="rsd-text-lg rsd-font-semibold rsd-text-gray-900">{title}</div>
        <div className="rsd-text-sm rsd-text-gray-900">{message}</div>
      </div>

      <div className="rsd-h-px rsd-w-full rsd-bg-gray-200"></div>

      <div className="rsd-flex rsd-gap-2">
        <Button onClick={() => handleClose(true)}>{confirmLabel}</Button>

        <Button onClick={() => handleClose(false)} intent="ghost">
          {cancelLabel}
        </Button>
      </div>
    </Base>
  )
}
