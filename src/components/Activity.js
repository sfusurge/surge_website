import useMediaQuery from '../utils/useMediaQuery'
import ActivityImage from './ActivityImage.js'
import styles from '../css/Activity.module.css'
import scooter from '../assets/scooter.svg'

const Activity = props => {
  return (
    <div>
      <div className={styles.container}>
        <ActivityImage image={scooter}></ActivityImage>
      </div>
      <div className={styles.text}>
        <p className={styles.textTitle}>Projects</p>
        <p className={styles.textBody}>
          Surge Projects enables passionate and goal-oriented students in
          software development and design by allowing them to build innovative
          and practical projects in the span of a semester.
        </p>
      </div>
    </div>
  )
}

export default Activity
