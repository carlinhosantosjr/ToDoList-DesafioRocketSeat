import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TaskAdd } from './components/TaskAdd'
import { TasksContainer } from './components/TasksContainer'
import { useState } from 'react'

interface TaskType {
  id: string;
  content: string;
  isChecked: boolean;
}

function App() {

  const [newTask, setNewTask] = useState<TaskType | 1>(1)
  
  function handleCreateTask(content: string) {
    event?.preventDefault()
    const novoId = Date.now().toString(36) + Math.random().toString(36).substring(2)
    const newTaskToAdd = {id:novoId, content: content, isChecked:false }
    setNewTask(newTaskToAdd)
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
