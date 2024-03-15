import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vitest } from 'vitest'
import { Prompt } from '../prompt'

describe('Prompt test', () => {
  test('should render component correctly', () => {
    const message = 'This is a test message'
    const title = 'Test Prompt'
    const cancelLabel = 'Cancel'
    const confirmLabel = 'Confirm'
    const inputLabel = 'Label'
    const onClose = vitest.fn()

    render(
      <Prompt
        inputLabel={inputLabel}
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
    const labelElement = screen.getByText(inputLabel)
    const inputElement = screen.getByTestId('prompt-input')

    expect(titleElement).toBeInTheDocument()
    expect(messageElement).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })

  test('should call onClose with null on cancel button click', async () => {
    const message = 'This is a test message'
    const title = 'Test Prompt'
    const cancelLabel = 'Cancel'
    const confirmLabel = 'Confirm'
    const inputLabel = 'Label'
    const onClose = vitest.fn()

    render(
      <Prompt
        inputLabel={inputLabel}
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
    expect(onClose).toHaveBeenCalledWith(null)
  })

  test('should call onClose with input value on confirm button click', async () => {
    const message = 'This is a test message'
    const title = 'Test Prompt'
    const cancelLabel = 'Cancel'
    const confirmLabel = 'Confirm'
    const inputLabel = 'Label'
    const inputValue = 'Testing value'
    const onClose = vitest.fn()

    render(
      <Prompt
        inputLabel={inputLabel}
        message={message}
        title={title}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        onClose={onClose}
      />,
    )

    const inputElement = screen.getByTestId('prompt-input')
    fireEvent.change(inputElement, { target: { value: inputValue } })

    const confirmButton = screen.getByText(confirmLabel)
    fireEvent.click(confirmButton)

    const titleElement = screen.queryByText(title)

    expect(titleElement).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledWith(inputValue)
  })
})
