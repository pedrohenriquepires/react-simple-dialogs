import { FC, useState } from 'react'
import { Base } from '../base'
import { Button } from '../button'
import { Input } from '../input'

export type PromptResult = string | null

type Props = {
  message: string
  title?: string
  cancelLabel: string
  confirmLabel: string
  inputLabel: string
  onClose: (result: PromptResult) => void
}

export const Prompt: FC<Props> = ({ message, title, onClose, cancelLabel, confirmLabel, inputLabel }) => {
  const [show, setShow] = useState(true)
  const [result, setResult] = useState<PromptResult>('')

  const handleConfirm = () => {
    setShow(false)
  }

  const handleCancel = () => {
    setResult(null)
    setShow(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    setResult(currentTarget.value)
  }

  return (
    <Base visible={show} onExitComplete={() => onClose(result!)}>
      <div className="rsd-flex rsd-w-full rsd-flex-col rsd-gap-2">
        {title && <div className="rsd-text-lg rsd-font-semibold rsd-text-gray-900">{title}</div>}
        <div className="rsd-text-sm rsd-text-gray-900">{message}</div>
      </div>

      <div className="rsd-w-full">
        <Input onChange={handleChange} label={inputLabel} name="value" />
      </div>

      <div className="rsd-h-px rsd-w-full rsd-bg-gray-200"></div>

      <div className="rsd-flex rsd-gap-2">
        <Button onClick={() => handleConfirm()}>{confirmLabel}</Button>

        <Button onClick={() => handleCancel()} intent="ghost">
          {cancelLabel}
        </Button>
      </div>
    </Base>
  )
}
