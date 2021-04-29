import useMediaQuery from '../utils/useMediaQuery'
import ActivityImage from './ActivityImage.js'
import styles from '../css/Activity.module.css'

const Activity = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ActivityImage image={props.image}></ActivityImage>
      </div>
      <div className={styles.text}>
        <p className={styles.textTitle}>{props.textTitle}</p>
        <p className={styles.textBody}>{props.textBody}</p>
      </div>
    </div>
  )
}

export default Activity
