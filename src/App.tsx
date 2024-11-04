import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TaskAdd } from './components/TaskAdd'
import { TasksContainer } from './components/TasksContainer'
import { FormEvent, useState } from 'react'

interface taskFunctionTeste {
  onHandleCreateTask: () => void
}
function App() {

  const [newTask, setNewTask] = useState(1)
  
  function handleCreateTask(content: string) {
    event.preventDefault()
    const novoId = Date.now().toString(36) + Math.random().toString(36).substring(2)
    const newTask1 = {id:novoId, content: content, isChecked:false }
    setNewTask(newTask1)
  }

  return (
    
    <div className={styles.container}>
      <header>
        <Header/>
        <TaskAdd onHandleCreateTask = {handleCreateTask}/>
      </header>

      <main className={styles.mainContainer}>
        <TasksContainer NTask={newTask}/>
      </main>
    </div>
  )
}

export default App
