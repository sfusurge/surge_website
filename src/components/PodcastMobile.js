import styles from '../css/PodcastMobile.module.css'

const PodcastMobile = props => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <p className={styles.titleText}>{props.details.subTitle}</p>
          <p className={styles.titleNumber}>{props.details.num} </p>
        </div>
        <p className={styles.host}>{props.details.host}</p>
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

export default PodcastMobile
