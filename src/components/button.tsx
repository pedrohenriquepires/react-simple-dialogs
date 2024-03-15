import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

const buttonVariants = cva(
  'rsd-border-none rsd-rounded rsd-relative rsd-cursor-pointer rsd-shadow rsd-font-normal rsd-inline-flex rsd-items-center rsd-text-sm rsd-transition-colors rsd-duration-75 disabled:rsd-pointer-events-none rsd-h-8 rsd-px-5',
  {
    variants: {
      intent: {
        primary: 'rsd-bg-primary rsd-text-white hover:rsd-bg-primary-hover',
        ghost: 'rsd-shadow-none rsd-bg-white rsd-text-gray-900',
      },
    },
  },
)

type Props = VariantProps<typeof buttonVariants> & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<PropsWithChildren<Props>> = ({ children, intent = 'primary', onClick }) => {
  const variantStyles = buttonVariants({ intent })

  return (
    <button type="button" onClick={onClick} className={variantStyles}>
      {children}
    </button>
  )
}
