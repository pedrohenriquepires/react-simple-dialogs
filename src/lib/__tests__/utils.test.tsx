import { render } from '@testing-library/react'
import { AlertProps } from '../dialogs/simple-alert'
import { SimpleDialogContainer } from '../simple-dialog-container'
import { getContainer, getOptions } from '../utils'

describe('Utils test', () => {
  test('getContainer should return the container if exists', () => {
    render(<SimpleDialogContainer />)
    const dialogContainer = getContainer()

    expect(dialogContainer).toBeDefined()
  })

  test('getContainer should throw an exception if container was not rendered', () => {
    expect(getContainer).toThrowError(/Dialog container not found/)
  })

  test('getOptions should return defaultOptions with message if props are string', () => {
    const defaultOptions = {
      closeLabel: 'Close',
      title: 'Attention',
    }
    const message = 'Message test' as AlertProps

    const result = getOptions(message, defaultOptions)

    expect(result).toStrictEqual({
      ...defaultOptions,
      message,
    })
  })

  test('getOptions should return all properties declared in prop object', () => {
    const defaultOptions = {
      closeLabel: 'Close',
      title: 'Attention',
    }
    const props = {
      message: 'Message test',
      closeLabel: 'Props Close Test',
    } as AlertProps

    const result = getOptions(props, defaultOptions)

    expect(result).toStrictEqual({
      ...defaultOptions,
      closeLabel: 'Props Close Test',
      message: 'Message test',
    })
  })
})
