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
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Base visible={show} onExitComplete={onClose} dataTestId="alert-dialog">
      <div className="rsd-flex rsd-w-full rsd-flex-col rsd-gap-2">
        <div className="rsd-text-lg rsd-font-semibold rsd-text-gray-900">{title}</div>
        <div className="rsd-text-sm rsd-text-gray-900">{message}</div>
      </div>

      <div className="rsd-h-px rsd-w-full rsd-bg-gray-200"></div>

      <Button onClick={handleClose}>{closeLabel}</Button>
    </Base>
  )
}
