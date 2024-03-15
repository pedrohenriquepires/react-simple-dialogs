import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SimpleDialogContainer } from 'src/lib/simple-dialog-container'
import { describe, expect, test } from 'vitest'
import { simplePrompt } from '../simple-prompt'

describe('simplePrompt test', () => {
  test('should render Prompt component', async () => {
    const message = 'Testing prompt'

    render(<SimpleDialogContainer />)

    act(() => {
      simplePrompt(message)
    })

    await waitFor(() => {
      const confirmationElement = screen.getByTestId('prompt-dialog')
      expect(confirmationElement).toBeInTheDocument()
    })
  })

  test('should render Prompt component with the default options', async () => {
    const message = 'Testing prompt'
    const defaultOptions = {
      cancelLabel: 'Cancel',
      confirmLabel: 'Confirm',
      inputLabel: 'Value',
      title: 'Attention',
    }

    render(<SimpleDialogContainer />)

    act(() => {
      simplePrompt(message)
    })

    await waitFor(() => {
      const messageElement = screen.getByText(message)
      const titleElement = screen.getByText(defaultOptions.title)
      const confirmButton = screen.getByText(defaultOptions.confirmLabel)
      const cancelButton = screen.getByText(defaultOptions.cancelLabel)
      const labelElement = screen.getByText(defaultOptions.inputLabel)

      expect(messageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(confirmButton).toBeInTheDocument()
      expect(cancelButton).toBeInTheDocument()
      expect(labelElement).toBeInTheDocument()
    })
  })

  test('should render Prompt component with the custimized options', async () => {
    const options = {
      message: 'Testing confirmation',
      confirmLabel: 'Test Confirm',
      cancelLabel: 'Test Cancel',
      inputLabel: 'Testing Label',
      title: 'Test Title',
    }

    render(<SimpleDialogContainer />)

    act(() => {
      simplePrompt(options)
    })

    await waitFor(() => {
      const messageElement = screen.getByText(options.message)
      const titleElement = screen.getByText(options.title)
      const confirmButton = screen.getByText(options.confirmLabel)
      const cancelButton = screen.getByText(options.cancelLabel)
      const labelElement = screen.getByText(options.inputLabel)

      expect(messageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(confirmButton).toBeInTheDocument()
      expect(cancelButton).toBeInTheDocument()
      expect(labelElement).toBeInTheDocument()
    })
  })

  test('should resolve the returned promise with the input value on confirm the dialog', async () => {
    const message = 'Testing alert'
    const inputValue = 'Testing value'
    let result

    render(<SimpleDialogContainer />)

    act(() => {
      result = simplePrompt(message)
    })

    await waitFor(() => {
      const inputElement = screen.getByTestId('prompt-input')
      fireEvent.change(inputElement, { target: { value: inputValue } })

      const confirmButton = screen.getByText('Confirm')
      fireEvent.click(confirmButton)
    })

    const titleElement = screen.queryByText('prompt-dialog')

    expect(titleElement).not.toBeInTheDocument()
    expect(result).resolves.toBe(inputValue)
  })

  test('should resolve the returned promise with value null on cancel the dialog', async () => {
    const message = 'Testing alert'
    let result

    render(<SimpleDialogContainer />)

    act(() => {
      result = simplePrompt(message)
    })

    await waitFor(() => {
      const confirmButton = screen.getByText('Cancel')
      fireEvent.click(confirmButton)
    })

    const titleElement = screen.queryByText('prompt-dialog')

    expect(titleElement).not.toBeInTheDocument()
    expect(result).resolves.toBeNull()
  })
})
