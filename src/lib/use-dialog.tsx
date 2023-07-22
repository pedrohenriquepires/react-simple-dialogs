import { Alert } from '../components/alert'
import { Confirmation } from '../components/confirmation'
import { DialogProps, getOptions, getRoot } from './utils'

type AlertProps = DialogProps<{
  closeLabel?: string
}>

type ConfirmProps = DialogProps<{
  cancelLabel?: string
  confirmLabel?: string
}>

export const useDialog = () => {
  return {
    showAlert(props: AlertProps) {
      const defaultOptions = {
        closeLabel: 'Close',
        title: 'Attention',
      }

      const options = getOptions(props, defaultOptions)

      const root = getRoot()

      return new Promise<void>(resolve => {
        const onClose = () => {
          root.unmount()
          resolve()
        }

        root.render(<Alert onClose={onClose} {...options} />)
      })
    },
    showConfirm(props: ConfirmProps) {
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
    },
  }
}
