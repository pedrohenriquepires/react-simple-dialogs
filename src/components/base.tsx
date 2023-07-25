import { AnimatePresence, motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

type Props = {
  visible: boolean
  onExitComplete: () => void
  dataTestId: string
}

export const Base: FC<PropsWithChildren<Props>> = ({ visible, onExitComplete, children, dataTestId }) => {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {visible && (
        <motion.div
          data-testid={dataTestId}
          className="rsd-fixed rsd-left-0 rsd-top-0 rsd-z-[9999] rsd-flex rsd-h-full rsd-w-full rsd-items-start rsd-justify-center rsd-bg-gray-900 rsd-bg-opacity-90"
          initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
          animate={{ backdropFilter: 'blur(2px)', opacity: 1 }}
          exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
        >
          <motion.div
            className="rsd-flex rsd-max-w-md rsd-flex-col rsd-items-center rsd-gap-4 rsd-break-words rsd-rounded-xl rsd-bg-white rsd-px-6 rsd-py-4 rsd-shadow-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
