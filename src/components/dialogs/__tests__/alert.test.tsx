import { fireEvent, render, screen } from '@testing-library/react'
import { Alert } from '../alert'

describe('Alert test', () => {
  test('should render component correctly', () => {
    const message = 'This is a test message'
    const title = 'Test Alert'
    const closeLabel = 'Close'
    const onClose = vitest.fn()

    render(<Alert message={message} title={title} closeLabel={closeLabel} onClose={onClose} />)

    const titleElement = screen.getByText(title)
    const messageElement = screen.getByText(message)
    const closeButton = screen.getByText(closeLabel)

    expect(titleElement).toBeInTheDocument()
    expect(messageElement).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  })

  test('should call onClose on button click', async () => {
    const message = 'This is a test message'
    const title = 'Test Alert'
    const closeLabel = 'Close'
    const onClose = vitest.fn()

    render(<Alert message={message} title={title} closeLabel={closeLabel} onClose={onClose} />)

    const closeButton = screen.getByText(closeLabel)

    fireEvent.click(closeButton)

    const titleElement = screen.queryByText(title)

    expect(titleElement).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledOnce()
  })
})
