import { Button } from 'src/components/button'
import { simpleAlert } from './lib/dialogs/simple-alert'
import { simpleConfirm } from './lib/dialogs/simple-confirm'
import { simpleModal } from './lib/dialogs/simple-modal'
import { simplePrompt } from './lib/dialogs/simple-prompt'

export const App = () => {
  const handleAlert = async () => {
    await simpleAlert('Ipsum commodo exercitation ut velit in consectetur ex quis.')

    console.log('Alert Closed')
  }

  const handleConfirm = async () => {
    if (await simpleConfirm('Ipsum commodo exercitation ut velit in consectetur ex quis?')) {
      console.log('Confirmed')
    } else {
      console.log('Canceled')
    }
  }

  const handlePrompt = async () => {
    const value = await simplePrompt('Ipsum commodo exercitation ut velit in consectetur ex quis.')

    console.log(value)
  }

  const handleModal = async () => {
    await simpleModal(closeFn => (
      <div className="rsd-flex rsd-flex-col rsd-items-center rsd-gap-5">
        <h1 className="rsd-text-2xl rsd-font-bold">Custom modal</h1>
        <Button onClick={closeFn}>Close</Button>
      </div>
    ))

    console.log('Modal closed')
  }

  return (
    <div className="rsd-flex rsd-gap-2 rsd-p-5">
      <Button onClick={handleAlert}>Alert</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
      <Button onClick={handlePrompt}>Prompt</Button>
      <Button onClick={handleModal}>Modal</Button>
    </div>
  )
}
