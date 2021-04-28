import styles from '../css/ActivityImage.module.css'
import scooter from '../assets/scooter.svg'
const ActivityImage = props => {
  return (
    <div className={styles.container}>
      <div className={styles.squareBackground}></div>
      <img src={props.image} className={styles.image} />
    </div>
  )
}

export default ActivityImage
