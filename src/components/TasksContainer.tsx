import { Task } from "./Task";
import styles from "./TasksContainer.module.css"
import { useState, useEffect, FormEvent } from 'react'
import clipboard from '../assets/clipboard.svg'
import {TaskType} from './Task'

export function TasksContainer({NTask}) {

  const tasksMocked = [
    {
      id:1,
      content: 'Estudar programação (Primeira modulo do react).',
      isChecked: false
    },
    {
      id:2,
      content: 'Fazer exercicios físicos. Flexão e abdominal.',
      isChecked: true
    },
    {
      id:3,
      content: 'Grindar poker na parte da tarde, das 13:00 as 21:00.',
      isChecked: false
    },
    {
      id:4,
      content: 'Ligar para o dentista e marcar um horário.',
      isChecked: true
    },    {
      id:5,
      content: 'Terminar o projeto proposto no desafio da rocketseat para estudantes de react.',
      isChecked: true
    }
  ]

  const [tasks, setTasks] = useState(tasksMocked) 

  const [isCheckedCount, setIsCheckedCount] = useState(tasks)

  function isCheckedCountFunction() {
    const isCheckedArray = tasks.filter(task => {
      return task.isChecked == true
    })
    setIsCheckedCount(isCheckedArray)
  }
 
  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })    
    setTasks(tasksWithoutDeletedOne) 
  }

  function handleCreateTask(data: TaskType) {
    setTasks([...tasks, data])
  } 


  useEffect(() => {
    isCheckedCountFunction();
  }, [tasks])

  useEffect(() => {
    if(NTask != 1)
    handleCreateTask(NTask);  
  }, [NTask]) 

  function changeCheck(id:number){
    const newArrayChecked = tasks.map((task) => {
      if( task.id === id ) {
      return {...task, isChecked: !task.isChecked};
      }
      return task;
    })
    setTasks(newArrayChecked)
  }
  

  return(
    <div className={styles.container}>
      <header className={styles.headerMainContainer}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>{isCheckedCount.length} de {tasks.length}</span>
        </div>
      </header>
      { tasks.length > 0 ? (tasks.map(task => {
          return <Task key={task.id} id={task.id} content={task.content} onDeleteTask={deleteTask} isChecked={task.isChecked} changeCheckFunction={changeCheck}/>
        })) : 
        <div className={styles.emptyTasks}>
          <hr className={styles.lineStyle}/>
          <img src={clipboard}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        }

    </div>
  )
}