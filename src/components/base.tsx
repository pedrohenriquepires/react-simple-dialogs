import { AnimatePresence, motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

type Props = {
  visible: boolean
  onExitComplete: () => void
}

export const Base: FC<PropsWithChildren<Props>> = ({ visible, onExitComplete, children }) => {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {visible && (
        <motion.div
          className="fixed left-0 top-0 z-[999] flex h-full w-full items-start justify-center bg-gray-900 bg-opacity-90"
          initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
          animate={{ backdropFilter: 'blur(2px)', opacity: 1 }}
          exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
        >
          <motion.div
            className="flex max-w-md flex-col items-center gap-4 break-all rounded-xl bg-white px-6 py-4 shadow-xl"
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
