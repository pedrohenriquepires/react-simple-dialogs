import ReactDOM from 'react-dom/client'

export const getContainer = () => {
  const container = document.getElementById('dialog-container')

  if (!container) {
    throw new Error('[useDialog] Dialog container not found')
  }

  return container
}

export const getRoot = () => {
  return ReactDOM.createRoot(getContainer())
}

export const getOptions = <T, K extends Required<Exclude<T, string>>>(props: T, defaultOptions: Partial<T>) => {
  return (
    typeof props === 'string'
      ? {
          ...defaultOptions,
          message: props,
        }
      : {
          ...defaultOptions,
          ...props,
        }
  ) as K
}

export type DialogProps<T> =
  | string
  | ({
      message: string
      title?: string
    } & T)
