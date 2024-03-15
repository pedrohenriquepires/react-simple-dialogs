import { type ReactElement } from 'react'
import { Modal } from 'src/components/dialogs/modal'
import { getRoot } from '../utils'

export const simpleModal = (modalComponent: (closeFn: () => void) => ReactElement) => {
  const root = getRoot()

  return new Promise<void>(resolve => {
    const onClose = () => {
      root.unmount()
      resolve()
    }

    root.render(<Modal onClose={onClose} children={modalComponent} />)
  })
}
