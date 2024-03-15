import { FC, useState } from 'react'
import { Base } from '../base'
import { Button } from '../button'

type Props = {
  message: string
  title: string
  closeLabel: string
  onClose: () => void
}

export const Alert: FC<Props> = ({ message, title, onClose, closeLabel }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Base visible={isOpen} dataTestId="alert-dialog">
      <div className="rsd-flex rsd-w-full rsd-flex-col rsd-gap-2">
        <div className="rsd-text-lg rsd-font-semibold rsd-text-gray-900">{title}</div>
        <div className="rsd-text-sm rsd-text-gray-900">{message}</div>
      </div>

      <div className="rsd-h-px rsd-w-full rsd-bg-gray-200"></div>

      <Button onClick={handleClose}>{closeLabel}</Button>
    </Base>
  )
}
