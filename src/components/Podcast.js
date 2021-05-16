import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/Podcast.module.css'
import PodcastTitle from './PodcastTitle'

const Podcast = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <>
      {isDesktop && (
        <div className={styles.container}>
          <div className={styles.text}>
            <div className={styles.title}>
              <PodcastTitle />
            </div>
            <p className={styles.subTitle}>Then vs Now: Surge's Dynamic Duo</p>
            <p className={styles.hosts}>{'with Vivian Wong & Noble Tan'}</p>
            <p className={styles.date}>Released on April 9, 2021 </p>
            <a href="https://www.facebook.com/sfusurge/">
              <div>Take me to the episode!</div>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Podcast
