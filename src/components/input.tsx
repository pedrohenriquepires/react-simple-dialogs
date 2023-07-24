import { FC, InputHTMLAttributes } from 'react'

type Props = {
  label: string
  name: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<Props> = ({ label, name, onChange }) => {
  return (
    <div className="rsd-w-full">
      <label htmlFor={name} className="rsd-block rsd-text-xs rsd-font-medium rsd-text-gray-700">
        {label}
      </label>

      <input
        onChange={onChange}
        id={name}
        name={name}
        className="rsd-mt-1 rsd-w-full rsd-rounded-md rsd-border rsd-border-gray-200 rsd-px-3 rsd-py-2 rsd-outline-none"
      />
    </div>
  )
}
