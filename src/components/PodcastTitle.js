import styles from '../css/PodcastTitle.module.css'

const PodcastTitle = props => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>{props.number}</div>
      <div className={styles.title}>
        <div id={styles.title1}>SURGE</div>
        <div id={styles.title2}>SPOTLIGHT</div>
      </div>
    </div>
  )
}

export default PodcastTitle
