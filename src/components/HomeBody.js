import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/HomeBody.module.css'
import rocketMonitor from '../assets/rocket-monitor.svg'
import sfuSurge from '../assets/sfu-surge.svg'

const HomeBody = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div className={styles.container}>
      <img className={styles.image} src={rocketMonitor} alt={rocketMonitor} />
      <div className={styles.mainText}>
        <img className={styles.logo} src={sfuSurge} alt={sfuSurge} />
        <p className={styles.header}>Engage • Empower • Innovate</p>
        <p className={styles.bodyText}>
          <span className={styles.boldText}>{'SFU Surge'}</span>
          is an all-inclusive organization to promote
          <span className={styles.boldText}>
            {' curiosity and excitement for a future in technology'}
          </span>
          , while guiding students on their paths to career success.
        </p>
      </div>
    </div>
  )
}

export default HomeBody
