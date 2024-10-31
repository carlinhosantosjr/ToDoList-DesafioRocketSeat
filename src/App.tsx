import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TaskAdd } from './components/TaskAdd'

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <TaskAdd/>
    </div>
  )
}

export default App
