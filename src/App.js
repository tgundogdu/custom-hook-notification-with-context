import './styles.scss'
import Parent from './components/parent'
import Notify from './components/notify'
import { NotifyProvider } from './hooks/useNotify'

/**
 * I used @mui/material for notification component.
 * If you want to use another component or your custom component,
 * please costumize "Notify" component.
 */

export default function App() {
  return (
    <NotifyProvider>
      <Parent />
      <Notify />
    </NotifyProvider>
  )
}
