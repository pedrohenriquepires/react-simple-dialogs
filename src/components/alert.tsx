import { FC, useState } from 'react'
import { Base } from './base'
import { Button } from './button'

type Props = {
  message: string
  title?: string
  closeLabel: string
  onClose: () => void
}

export const Alert: FC<Props> = ({ message, title, onClose, closeLabel }) => {
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Base visible={show} onExitComplete={onClose}>
      <div className="flex flex-col gap-2">
        {title && <div className="text-lg font-semibold text-gray-900">{title}</div>}
        <div className="text-sm text-gray-900">{message}</div>
      </div>

      <div className="h-px w-full bg-gray-200"></div>

      <Button onClick={handleClose}>
        {closeLabel}
      </Button>
    </Base>
  )
}
