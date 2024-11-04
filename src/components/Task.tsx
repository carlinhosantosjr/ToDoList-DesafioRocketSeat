import styles from './Task.module.css'
import { Trash, CheckCircle, Circle } from '@phosphor-icons/react'
import { useState } from 'react'

  export interface TaskType {
  id: number;
  content: string;
  isChecked: boolean;
  onDeleteTask: (id: number) => void;
  changeCheckFunction: (id: number) => void;
}

export function Task({id, content, isChecked, onDeleteTask, changeCheckFunction }: TaskType) {
  
const [checkButtonState, setCheckButtonState] = useState(isChecked)

function handleClickChecked() {
  if(checkButtonState == false){
    setCheckButtonState(true)
    isChecked = true
    changeCheckFunction(id)
  }else if(checkButtonState == true){
      setCheckButtonState(false)
      isChecked = false
      changeCheckFunction(id)
      }
    }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return(
    <div className={styles.taskDiv}>
      <button
      onClick={handleClickChecked}
      className={checkButtonState ? styles.buttonChecked : styles.buttonUnChecked}
      >
        {checkButtonState ? <CheckCircle size='24px' weight='fill' /> : <Circle size='24px' weight='fill'/>}
      </button>
        <p className={checkButtonState ? styles.contentTaskChecked : styles.contentTaskUnChecked}>{content}</p>
      <button className={styles.buttonTrash}>
        <Trash 
        onClick={handleDeleteTask}
        size='24px' />
      </button> 
    </div>
  )
}