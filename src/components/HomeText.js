import styles from '../css/HomeText.module.css'
import sfuSurge from '../assets/sfu-surge.svg'

const HomeText = props => {
  return (
    <>
      <img className={styles.logo} src={sfuSurge} alt={sfuSurge} />
      <p className={styles.header}>Engage • Empower • Innovate</p>
      <p className={styles.bodyText}>
        <span className={styles.boldText}>{'SFU Surge '}</span>
        is an all-inclusive organization to promote
        <span className={styles.boldText}>
          {' curiosity and excitement for a future in technology'}
        </span>
        , while guiding students on their paths to career success.
      </p>
    </>
  )
}

export default HomeText
