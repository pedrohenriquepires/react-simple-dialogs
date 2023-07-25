import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SimpleDialogContainer } from 'src/lib/simple-dialog-container'
import { describe, expect, test } from 'vitest'
import { simpleAlert } from '../simple-alert'

describe('simpleAlert test', () => {
  test('should render Alert component', async () => {
    const message = 'Testing alert'

    render(<SimpleDialogContainer />)

    act(() => {
      simpleAlert(message)
    })

    await waitFor(() => {
      const alertElement = screen.getByTestId('alert-dialog')
      expect(alertElement).toBeInTheDocument()
    })
  })

  test('should render Alert component with the default options', async () => {
    const message = 'Testing alert'
    const defaultOptions = {
      closeLabel: 'Close',
      title: 'Attention',
    }

    render(<SimpleDialogContainer />)

    act(() => {
      simpleAlert(message)
    })

    await waitFor(() => {
      const messageElement = screen.getByText(message)
      const titleElement = screen.getByText(defaultOptions.title)
      const closeButton = screen.getByText(defaultOptions.closeLabel)

      expect(messageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(closeButton).toBeInTheDocument()
    })
  })

  test('should render Alert component with the custimized options', async () => {
    const options = {
      message: 'Testing alert',
      closeLabel: 'Test Close',
      title: 'Test Title',
    }

    render(<SimpleDialogContainer />)

    act(() => {
      simpleAlert(options)
    })

    await waitFor(() => {
      const messageElement = screen.getByText(options.message)
      const titleElement = screen.getByText(options.title)
      const closeButton = screen.getByText(options.closeLabel)

      expect(messageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(closeButton).toBeInTheDocument()
    })
  })

  test('should resolve the returned promise on close the dialog', async () => {
    const message = 'Testing alert'
    let result

    render(<SimpleDialogContainer />)

    act(() => {
      result = simpleAlert(message)
    })

    await waitFor(() => {
      const closeButton = screen.getByText('Close')
      fireEvent.click(closeButton)
    })

    await waitForElementToBeRemoved(() => screen.getByTestId('alert-dialog'))

    expect(result).resolves.toBeUndefined()
  })
})
