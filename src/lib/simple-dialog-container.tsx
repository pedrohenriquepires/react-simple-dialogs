import styles from './index.css?inline'

export const SimpleDialogContainer = () => (
  <div className="simple-dialog">
    <style data-testid="simple-dialog-styles">{styles}</style>
    <div id="simple-dialog-container" data-testid="simple-dialog-container" />
  </div>
)
