import styles from './TaskAdd.module.css'
import plus from '../assets/plus.svg'

export function TaskAdd() {
  return(
    <div className={styles.containerForm}>
      <form className={styles.formStyle}>
        <textarea placeholder="Adicione uma nova tarefa"/>
        <button className={styles.buttonCreate}>Criar<img src={plus}/></button>
      </form>
    </div>
  )
}