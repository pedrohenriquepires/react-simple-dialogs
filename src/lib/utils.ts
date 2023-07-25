import ReactDOM from 'react-dom/client'

export const getContainer = () => {
  const container = document.getElementById('simple-dialog-container')

  if (!container) {
    throw new Error(
      '[React Simple Dialogs] Dialog container not found, see: https://github.com/pedrohenriquepires/react-simple-dialogs/wiki/Dialog-Container',
    )
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
