import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from '../modal'

describe('Modal test', () => {
  test('should render component correctly', () => {
    const onClose = vitest.fn()

    render(<Modal children={() => <div>Testing</div>} onClose={onClose} />)

    const textElement = screen.getByText('Testing')

    expect(textElement).toBeInTheDocument()
  })

  test('should call onClose on button click', async () => {
    const onClose = vitest.fn()

    render(
      <Modal
        children={closeFn => (
          <div>
            <span>Testing</span>

            <button onClick={closeFn}>Close</button>
          </div>
        )}
        onClose={onClose}
      />,
    )

    const closeButton = screen.getByText('Close')

    fireEvent.click(closeButton)

    const textElement = screen.queryByText('Testing')

    expect(textElement).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledOnce()
  })
})
