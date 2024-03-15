import { FC, PropsWithChildren } from 'react'

type Props = {
  visible: boolean
  dataTestId: string
}

export const Base: FC<PropsWithChildren<Props>> = ({ visible, children, dataTestId }) => {
  return (
    visible && (
      <div
        data-testid={dataTestId}
        className="rsd-fixed rsd-left-0 rsd-top-0 rsd-z-[9999] rsd-flex rsd-h-full rsd-w-full rsd-animate-fade-in rsd-items-start rsd-justify-center rsd-bg-backdrop rsd-bg-opacity-90"
      >
        <div className="rsd-flex rsd-max-w-md rsd-transform-gpu rsd-animate-slide-down rsd-flex-col rsd-items-center rsd-gap-4 rsd-break-words rsd-rounded-xl rsd-bg-white rsd-px-6 rsd-py-4 rsd-shadow-xl">
          {children}
        </div>
      </div>
    )
  )
}
