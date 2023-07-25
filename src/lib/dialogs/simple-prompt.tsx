import { Prompt, PromptResult } from 'src/components/dialogs/prompt'
import { DialogProps, getOptions, getRoot } from '../utils'

export type PromptProps = DialogProps<{
  cancelLabel?: string
  confirmLabel?: string
  inputLabel?: string
}>

export const simplePrompt = (props: PromptProps) => {
  const defaultOptions = {
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    inputLabel: 'Value',
    title: 'Attention',
  } satisfies Partial<PromptProps>

  const options = getOptions(props, defaultOptions)

  const root = getRoot()

  return new Promise<PromptResult>(resolve => {
    const onClose = (value: PromptResult) => {
      root.unmount()
      resolve(value)
    }

    root.render(<Prompt onClose={onClose} {...options} />)
  })
}
