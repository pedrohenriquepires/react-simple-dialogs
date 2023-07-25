import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SimpleDialogContainer } from 'src/lib/simple-dialog-container'
import { describe, expect, test } from 'vitest'
import { simpleConfirm } from '../simple-confirm'

describe('simpleConfirm test', () => {
  test('should render Confirmation component', async () => {
    const message = 'Testing confirm'

    render(<SimpleDialogContainer />)

    act(() => {
      simpleConfirm(message)
    })

    await waitFor(() => {
      const confirmationElement = screen.getByTestId('confirmation-dialog')
      expect(confirmationElement).toBeInTheDocument()
    })
  })

  test('should render Confirmation component with the default options', async () => {
    const message = 'Testing confirmation'
    const defaultOptions = {
      cancelLabel: 'Cancel',
      confirmLabel: 'Confirm',
      title: 'Attention',
    }

    render(<SimpleDialogContainer />)

    act(() => {
      simpleConfirm(message)
    })

    await waitFor(() => {
      const messageElement = screen.getByText(message)
      const titleElement = screen.getByText(defaultOptions.title)
      const confirmButton = screen.getByText(defaultOptions.confirmLabel)
      const cancelButton = screen.getByText(defaultOptions.cancelLabel)

      expect(messageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(confirmButton).toBeInTheDocument()
      expect(cancelButton).toBeInTheDocument()
    })
  })

  test('should render Confirmation component with the custimized options', async () => {
    const options = {
      message: 'Testing confirmation',
      confirmLabel: 'Test Confirm',
      cancelLabel: 'Test Cancel',
      title: 'Test Title',
    }

    render(<SimpleDialogContainer />)

    act(() => {
      simpleConfirm(options)
    })

    await waitFor(() => {
      const messageElement = screen.getByText(options.message)
      const titleElement = screen.getByText(options.title)
      const confirmButton = screen.getByText(options.confirmLabel)
      const cancelButton = screen.getByText(options.cancelLabel)

      expect(messageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(confirmButton).toBeInTheDocument()
      expect(cancelButton).toBeInTheDocument()
    })
  })

  test('should resolve the returned promise with value true on confirm the dialog', async () => {
    const message = 'Testing alert'
    let result

    render(<SimpleDialogContainer />)

    act(() => {
      result = simpleConfirm(message)
    })

    await waitFor(() => {
      const confirmButton = screen.getByText('Confirm')
      fireEvent.click(confirmButton)
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('confirmation-dialog'))

    expect(result).resolves.toBe(true)
  })

  test('should resolve the returned promise with value false on cancel the dialog', async () => {
    const message = 'Testing alert'
    let result

    render(<SimpleDialogContainer />)

    act(() => {
      result = simpleConfirm(message)
    })

    await waitFor(() => {
      const confirmButton = screen.getByText('Cancel')
      fireEvent.click(confirmButton)
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('confirmation-dialog'))

    expect(result).resolves.toBe(false)
  })
})
