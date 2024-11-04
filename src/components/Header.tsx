import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
  return(
    <div className={styles.header}>
      <div className={styles.content}>
        <img src={rocket} />
        <span className={styles.styleTo}>to</span><span className={styles.styleDo}>do</span>
      </div>
    </div>
  )
}