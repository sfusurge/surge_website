import styles from '../css/Podcast.module.css'
import PodcastTitle from './PodcastTitle'

const podcastResolver = require.context(
  '../assets/podcastHosts',
  false,
  /.*\.png/
)

const Podcast = props => {
  return (
    <div className={styles.container}>
      <img
        className={styles.person}
        src={podcastResolver(props.details.image)}
        alt={props.details.image}
      ></img>
      <div className={styles.text}>
        <div className={styles.title}>
          <PodcastTitle number={props.details.num} />
        </div>
        <p style={props.details.font} className={styles.subTitle}>
          {props.details.subTitle}
        </p>
        <p className={styles.hosts}>{props.details.host}</p>
        <p className={styles.date}>{props.details.date}</p>
        <a
          className={styles.link}
          href={props.details.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.btn}>Take me to the episode!</div>
        </a>
      </div>
    </div>
  )
}

export default Podcast
