import './AddButton.css'

export const ClickLogger = () => {
  const logClick = () => {
    console.log('Button clicked')
  }
  return (
  <button
  className="addButton"
    onClick={logClick}>Hinzufügen</button>
  )
}