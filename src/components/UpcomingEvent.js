import useMediaQuery from '../utils/useMediaQuery'
import Note from '../components/Note'
import styles from '../css/UpcomingEvent.module.css'
import mapMarker from '../assets/map-marker.svg'
import clock from '../assets/clock.svg'

const UpcomingEvent = ({
  primaryColor,
  secondaryColor,
  title,
  day,
  month,
  location,
  time,
  link,
  fbEvent
}) => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <Note primaryColor={primaryColor} secondaryColor={secondaryColor}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.date}>
            <h1>{day}</h1>
            <h2>{month}</h2>
          </div>
          <div className={styles.divider} />
          <div className={styles.detailsContainer}>
            <h1 className={styles.title}>{title}</h1>
            {isDesktop && (
              <>
                <div className={styles.details}>
                  <img src={mapMarker} alt="Location" />
                  <a className={styles.location} href={link}>
                    {location}
                  </a>
                </div>
                <div className={styles.details} style={{ marginTop: '8px' }}>
                  <img src={clock} alt="Time" />
                  <p className={styles.time}>{time}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.body}>
          {!isDesktop && (
            <div className={styles.detailsContainerMobile}>
              <div className={styles.details}>
                <img src={mapMarker} alt="Location" />
                <a className={styles.location} href={link}>
                  {location}
                </a>
              </div>
              <div className={styles.details} style={{ marginTop: '8px' }}>
                <img src={clock} alt="Time" />
                <p className={styles.time}>{time}</p>
              </div>
            </div>
          )}
          <a className={styles.fbEvent} href={fbEvent}>
            Facebook Event
          </a>
        </div>
      </div>
    </Note>
  )
}

export default UpcomingEvent
