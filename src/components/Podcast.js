import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/Podcast.module.css'
import josh from '../assets/podcastHosts/josh.png'
import PodcastTitle from './PodcastTitle'

const Podcast = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <>
      <div className={styles.container}>
        <img className={styles.person} src={josh}></img>
        <div className={styles.text}>
          <div className={styles.title}>
            <PodcastTitle />
          </div>
          <p className={styles.subTitle}>Then vs Now: Surge's Dynamic Duo</p>
          <p className={styles.hosts}>{'with Vivian Wong & Noble Tan'}</p>
          <p className={styles.date}>Released on April 9, 2021 </p>
          <a>
            <div className={styles.btn}>Facebook Event</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Podcast
