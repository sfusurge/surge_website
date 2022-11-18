import styles from '../css/ShortUpcomingEvent.module.css'
import useLayoutChecks from '../utils/useLayoutChecks';
import allEvents from '../utils/upcomingEvents'
import UpcomingEvent from './UpcomingEvent'

const EventSelector = props => {
  const { isDesktop } = useLayoutChecks();

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
            {i < 3 && (
              <div className={!isDesktop && styles.notesMargin}>
                <UpcomingEvent
                  colors={event.colors}
                  title={event.title}
                  day={event.day}
                  month={event.month}
                  location={event.location}
                  time={event.time}
                  links={event.links}
                />
              </div>
            )}
          </>
        ))}
        {allEvents.length <= 0 && 
          <p
            style={isDesktop ? { fontSize: '2rem' } : { fontSize: '1rem' }}
            className={styles.title}
          >
            Stay tuned for future events
          </p>
        }
      </div>
    </div>
  )
}

export default EventSelector
