import { Button } from 'src/components/button'
import { simpleAlert } from './lib/dialogs/simple-alert'
import { simpleConfirm } from './lib/dialogs/simple-confirm'
import { simplePrompt } from './lib/dialogs/simple-prompt'

export const App = () => {
  const handleAlert = async () => {
    await simpleAlert(
      'Ipsum commodo exercitation ut velit in consectetur ex quis. Culpa ex officia nulla sunt cupidatat pariatur in ullamco tempor ex cillum aliqua anim ipsum. Id incididunt enim veniam Lorem duis aliqua consectetur in sit proident est commodo sunt aute. Cupidatat exercitation officia enim fugiat nostrud magna adipisicing.',
    )

    console.log('Alert Closed')
  }

  const handleConfirm = async () => {
    if (
      await simpleConfirm(
        'Ipsum commodo exercitation ut velit in consectetur ex quis. Culpa ex officia nulla sunt cupidatat pariatur in ullamco tempor ex cillum aliqua anim ipsum. Id incididunt enim veniam Lorem duis aliqua consectetur in sit proident est commodo sunt aute. Cupidatat exercitation officia enim fugiat nostrud magna adipisicing.',
      )
    ) {
      console.log('Confirmed')
    } else {
      console.log('Canceled')
    }
  }

  const handlePrompt = async () => {
    const value = await simplePrompt(
      'Ipsum commodo exercitation ut velit in consectetur ex quis. Culpa ex officia nulla sunt cupidatat pariatur in ullamco tempor ex cillum aliqua anim ipsum. Id incididunt enim veniam Lorem duis aliqua consectetur in sit proident est commodo sunt aute. Cupidatat exercitation officia enim fugiat nostrud magna adipisicing.',
    )

    console.log(value)
  }

  return (
    <div>
      <Button onClick={handleAlert}>Alert</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
      <Button onClick={handlePrompt}>Prompt</Button>
    </div>
  )
}
