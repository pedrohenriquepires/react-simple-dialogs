import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { SimpleDialogContainer } from 'src/lib/simple-dialog-container'
import { describe, expect, test } from 'vitest'
import { simpleModal } from '../simple-modal'

describe('simpleModal test', () => {
  test('should render Modal component', async () => {
    render(<SimpleDialogContainer />)

    act(() => {
      simpleModal(() => <div>Testing</div>)
    })

    await waitFor(() => {
      const alertElement = screen.getByTestId('modal-dialog')
      expect(alertElement).toBeInTheDocument()
    })
  })

  test('should resolve the returned promise on close the dialog', async () => {
    let result

    render(<SimpleDialogContainer />)

    act(() => {
      result = simpleModal(closeFn => <button onClick={closeFn} data-testid="close-btn" />)
    })

    await waitFor(() => {
      const closeButton = screen.getByTestId('close-btn')
      fireEvent.click(closeButton)
    })

    const alertDialogElement = screen.queryByText('modal-dialog')

    expect(alertDialogElement).not.toBeInTheDocument()
    expect(result).resolves.toBeUndefined()
  })
})
