import { Confirmation } from 'src/components/dialogs/confirmation'
import { DialogProps, getOptions, getRoot } from '../../utils'

export type ConfirmProps = DialogProps<{
  cancelLabel?: string
  confirmLabel?: string
}>

export const simpleConfirm = (props: ConfirmProps) => {
  const defaultOptions = {
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    title: 'Attention',
  }

  const options = getOptions(props, defaultOptions)

  const root = getRoot()

  return new Promise<boolean>(resolve => {
    const onClose = (value: boolean) => {
      root.unmount()
      resolve(value)
    }

    root.render(<Confirmation onClose={onClose} {...options} />)
  })
}
