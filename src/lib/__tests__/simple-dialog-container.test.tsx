import { render, screen } from '@testing-library/react'
import styles from '../index.css?inline'
import { SimpleDialogContainer } from '../simple-dialog-container'

describe('SimpleDialogContainer test', () => {
  test('should render the container correctly', () => {
    render(<SimpleDialogContainer />)
    const dialogContainer = screen.getByTestId('simple-dialog-container')

    expect(dialogContainer).toBeInTheDocument()
  })

  test('should render the styles correctly', () => {
    const variableStyles = `:root {--rsd-primary-color: rgb(3 105 161);--rsd-primary-hover-color: rgb(2 132 199);--rsd-backdrop-color: rgba(17, 24, 39, 0.9);}`

    render(<SimpleDialogContainer />)
    const stylesElement = screen.getByTestId('simple-dialog-styles')

    expect(stylesElement).toBeInTheDocument()
    expect(stylesElement.innerHTML).toBe(variableStyles + styles)
  })
})
