import styles from './TaskAdd.module.css'
import plus from '../assets/plus.svg'
import { ChangeEvent, useState } from 'react'

interface taskCreateFunction {
  onHandleCreateTask: (content:string) => void
}
export function TaskAdd({onHandleCreateTask}: taskCreateFunction) {


  const [newTaskText, setNewTaskText] = useState('')

  function enviarTask () {
    onHandleCreateTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewTaskText(event.target.value)
  }

  const isNewTask = newTaskText.trim().length === 0


  return(
    <div className={styles.containerForm}>
      <form 
       onSubmit={enviarTask}  
      className={styles.formStyle}>
        <textarea
        onChange={handleNewTaskChange}
        value={newTaskText}
        required
        placeholder="Adicione uma nova tarefa"/>
        <button
        type='submit'
        disabled={isNewTask}>Criar<img src={plus}/></button>
      </form>
    </div>
  )
}