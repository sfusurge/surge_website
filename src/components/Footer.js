import styles from '../css/Footer.module.css'
import SocialsIcon from './SocialsIcon'
import scooter from '../assets/scooter.svg'
import robot from '../assets/robot-standing.svg'
import notepad from '../assets/notepad.svg'

const Footer = props => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <SocialsIcon />
      </div>
      <div className={styles.images}>
        <img className={styles.scooter} src={scooter}></img>
        <img className={styles.robot} src={robot}></img>
        <img className={styles.notepad} src={notepad}></img>
      </div>
    </div>
  )
}

export default Footer
