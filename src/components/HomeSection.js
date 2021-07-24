import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/HomeBody.module.css'
import rocketMonitor from '../assets/rocket-monitor.svg'
import sfuSurge from '../assets/sfu-surge.svg'

const HomeBody = props => {
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

export default HomeBody
