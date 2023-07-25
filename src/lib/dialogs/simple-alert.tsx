import { Alert } from 'src/components/dialogs/alert'
import { DialogProps, getOptions, getRoot } from '../utils'

export type AlertProps = DialogProps<{
  closeLabel?: string
}>

export const simpleAlert = (props: AlertProps) => {
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
}
