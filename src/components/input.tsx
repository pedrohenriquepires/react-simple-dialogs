import { FC, InputHTMLAttributes } from 'react'

type Props = {
  label: string
  name: string
  dataTestId?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<Props> = ({ label, name, onChange, dataTestId }) => {
  return (
    <div className="rsd-w-full">
      <label htmlFor={name} className="rsd-block rsd-text-xs rsd-font-medium rsd-text-gray-700">
        {label}
      </label>

      <input
        onChange={onChange}
        id={name}
        name={name}
        data-testid={dataTestId}
        className="rsd-mt-1 rsd-w-full rsd-rounded-md rsd-border rsd-border-solid rsd-border-gray-200 rsd-bg-white rsd-px-3 rsd-py-2 rsd-text-black rsd-outline-none"
      />
    </div>
  )
}
