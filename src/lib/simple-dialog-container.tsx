import { FC } from 'react'
import styles from './index.css?inline'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

type Color = RGB | RGBA | HEX

type Props = {
  primaryColor?: Color
  primaryHoverColor?: Color
  backdropColor?: Color
}

export const SimpleDialogContainer: FC<Props> = ({
  primaryColor = 'rgb(3 105 161)',
  primaryHoverColor = 'rgb(2 132 199)',
  backdropColor = 'rgba(17, 24, 39, 0.9)',
}) => (
  <div className="simple-dialog">
    <style data-testid="simple-dialog-styles">
      {`:root {--rsd-primary-color: ${primaryColor};--rsd-primary-hover-color: ${primaryHoverColor};--rsd-backdrop-color: ${backdropColor};}`}
      {styles}
    </style>
    <div id="simple-dialog-container" data-testid="simple-dialog-container" />
  </div>
)
