import styles from '../css/ShortUpcomingEvent.module.css'
import useMediaQuery from '../utils/useMediaQuery'
import allEvents from '../utils/upcomingEvents'
import UpcomingEvent from './UpcomingEvent'

const EventSelector = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div
      className={styles.container}
      style={isDesktop ? { paddingBottom: '119px' } : { paddingBottom: '72px' }}
    >
      <div
        className={isDesktop ? styles.titleSection : styles.mobileTitleSection}
      >
        <p className={styles.title}>Upcoming Events</p>
      </div>
      <div
        className={isDesktop ? styles.eventsNotes : styles.eventsNotesMobile}
      >
        {allEvents.map((event, i) => (
          <>
            {/* TODO for future devs: uncomment below line when there are events*/}
            {/* {i < 3 && (
              <div className={!isDesktop && styles.notesMargin}>
                <UpcomingEvent
                  primaryColor={event.primaryColor && event.primaryColor}
                  secondaryColor={event.secondaryColor && event.secondaryColor}
                  title={event.title}
                  day={event.day}
                  month={event.month}
                  location={event.location}
                  time={event.time}
                  link={event.link}
                  fbEvent={event.fbEvent}
                />
              </div>
            )} */}
          </>
        ))}
        <p
          style={isDesktop ? { fontSize: '30px' } : { fontSize: '18px' }}
          className={styles.title}
        >
          Stay tuned for future events
        </p>
      </div>
    </div>
  )
}

export default EventSelector
