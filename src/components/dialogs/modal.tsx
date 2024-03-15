import { FC, ReactElement, useState } from 'react'
import { Base } from '../base'

type Props = {
  children: (closeFn: () => void) => ReactElement
  onClose: () => void
}

export const Modal: FC<Props> = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Base visible={isOpen} dataTestId="modal-dialog">
      {children(handleClose)}
    </Base>
  )
}
