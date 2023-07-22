import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

const buttonVariants = cva(
  'rounded relative shadow font-normal inline-flex items-center text-sm transition-colors duration-75 disabled:pointer-events-none h-8 px-5',
  {
    variants: {
      intent: {
        primary: 'bg-sky-700 text-white hover:bg-sky-600 active:bg-sky-700',
        ghost: 'shadow-none',
      },
    },
  }
)

type Props = VariantProps<typeof buttonVariants> &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  intent = 'primary',
  onClick,
}) => {
  const variantStyles = buttonVariants({ intent })

  return (
    <button type="button" onClick={onClick} className={variantStyles}>
      {children}
    </button>
  )
}
