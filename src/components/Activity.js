import ActivityImage from './ActivityImage.js'
import styles from '../css/Activity.module.css'
import spotifyIcon from '../assets/spotify-icon.svg'

const Activity = props => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ActivityImage
          image={props.image}
          styling={props.styling}
          alt={props.altText}
        ></ActivityImage>
      </div>
      <div className={styles.text}>
        <p className={styles.textTitle}>{props.textTitle}</p>
        <p className={styles.textBody}>{props.textBody}</p>
        {props.textTitle === 'Podcast' && (
          <>
            <div className={styles.btn}>
              <a
                className={styles.link}
                href="https://open.spotify.com/show/5GAuw7brERfbZSfnKpURvE?si=09bf7b886d3a448b"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.verticalAlign}>
                  <img
                    className={styles.spotifyIcon}
                    src={spotifyIcon}
                    alt="spotifyIcon"
                  ></img>
                  <p className={styles.btnContent}>Listen on Spotify</p>
                </div>
              </a>
            </div>
            <a
              className={styles.streamingLink}
              href="https://anchor.fm/sfu-surge"
              target="_blank"
              rel="noreferrer"
            >
              More Streaming Platforms
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default Activity
