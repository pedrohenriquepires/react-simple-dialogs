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
    render(<SimpleDialogContainer />)
    const stylesElement = screen.getByTestId('simple-dialog-styles')

    expect(stylesElement).toBeInTheDocument()
    expect(stylesElement.innerHTML).toBe(styles)
  })
})
