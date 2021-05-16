import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/Podcast.module.css'
import PodcastTitle from './PodcastTitle'

const Podcast = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <>
      {isDesktop && (
        <div className={styles.container}>
          <div className={styles.title}>
            <PodcastTitle />
          </div>
        </div>
      )}
    </>
  )
}

export default Podcast
