import { FC } from 'react'
import styles from './index.css?inline'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

type Color = RGB | RGBA | HEX

type Props = {
  primaryColor?: Color
  primaryHoverColor?: Color
}

export const SimpleDialogContainer: FC<Props> = ({ primaryColor = '#F00', primaryHoverColor = '#00F' }) => (
  <div className="simple-dialog">
    <style data-testid="simple-dialog-styles">
      {`
        :root {
          --rsd-primary-color: ${primaryColor};
          --rsd-primary-hover-color: ${primaryHoverColor};
        }
      `}

      {styles}
    </style>
    <div id="simple-dialog-container" data-testid="simple-dialog-container" />
  </div>
)
