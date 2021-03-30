import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/UpcomingEvent.module.css'
import mapMarker from '../assets/map-marker.svg'
import clock from '../assets/clock.svg'

const UpcomingEvent = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div id={styles.container}>
      <div className={styles.background}>
        <svg
          className={styles.backgroundBody}
          width="260"
          height="275"
          viewBox="0 0 260 275"
          fill="none"
          preserveAspectRatio="none"
        >
          <rect
            fill={props.fill?.accent || '#2B5699'}
            width="260"
            height="7.09677"
          />
          <rect
            fill={props.fill?.body || '#3D73C7'}
            y="7"
            width="260"
            height="268"
          />
        </svg>
        <svg
          className={styles.backgroundEdge}
          width="47"
          height="275"
          viewBox="0 0 47 275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={props.fill?.body || '#3D73C7'}
            d="M0 7H46L46.5 241L0 275V7Z"
          />
          <path
            fill={props.fill?.accent || '#2B5699'}
            d="M46.4516 241L0 275C1.99307 266.118 2.506 261.361 0 250.355C18.8197 250.943 28.9012 248.339 46.4516 241Z"
          />
          <rect fill={props.fill?.accent || '#2B5699'} width="46" height="7" />
        </svg>
      </div>
      <div className={styles.header}>
        <div className={styles.date}>
          <h1>{props.date}</h1>
          <h2>{props.month}</h2>
        </div>
        <span className={styles.divider} />
        <div className={styles.detailsContainer}>
          <h1 className={styles.title}>{props.title}</h1>
          {isDesktop && (
            <>
              <div className={styles.details} style={{ marginBottom: '10px' }}>
                <img src={mapMarker} alt="Location" />
                <a href={props.location.link}>{props.location.title}</a>
              </div>
              <div className={styles.details}>
                <img src={clock} alt="Time" />
                <p>{props.time}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.body}>
        {!isDesktop && (
          <>
            <div className={styles.details} style={{ marginBottom: '10px' }}>
              <img src={mapMarker} alt="Location" />
              <a href={props.location.link}>{props.location.title}</a>
            </div>
            <div className={styles.details}>
              <img src={clock} alt="Time" />
              <p>{props.time}</p>
            </div>
          </>
        )}
        <a className={styles.fbEvent} href={props.link}>
          {props.title}
        </a>
      </div>
    </div>
  )
}

export default UpcomingEvent
