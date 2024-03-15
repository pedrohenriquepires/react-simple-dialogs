import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vitest } from 'vitest'
import { Confirmation } from '../confirmation'

describe('Confirmation test', () => {
  test('sould render component correctly', () => {
    const message = 'This is a test message'
    const title = 'Test Confirmation'
    const cancelLabel = 'Cancel'
    const confirmLabel = 'Confirm'
    const onClose = vitest.fn()

    render(
      <Confirmation
        message={message}
        title={title}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        onClose={onClose}
      />,
    )

    const titleElement = screen.getByText(title)
    const messageElement = screen.getByText(message)
    const cancelButton = screen.getByText(cancelLabel)
    const confirmButton = screen.getByText(confirmLabel)

    expect(titleElement).toBeInTheDocument()
    expect(messageElement).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
  })

  test('should call onClose with false on cancel button click', async () => {
    const message = 'This is a test message'
    const title = 'Test Confirmation'
    const cancelLabel = 'Cancel'
    const confirmLabel = 'Confirm'
    const onClose = vitest.fn()

    render(
      <Confirmation
        message={message}
        title={title}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        onClose={onClose}
      />,
    )

    const cancelButton = screen.getByText(cancelLabel)
    fireEvent.click(cancelButton)

    const titleElement = screen.queryByText(title)

    expect(titleElement).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledWith(false)
  })

  test('should call onClose with true on confirm button click', async () => {
    const message = 'This is a test message'
    const title = 'Test Confirmation'
    const cancelLabel = 'Cancel'
    const confirmLabel = 'Confirm'
    const onClose = vitest.fn()

    render(
      <Confirmation
        message={message}
        title={title}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        onClose={onClose}
      />,
    )

    const confirmButton = screen.getByText(confirmLabel)
    fireEvent.click(confirmButton)

    const titleElement = screen.queryByText(title)

    expect(titleElement).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledWith(true)
  })
})
