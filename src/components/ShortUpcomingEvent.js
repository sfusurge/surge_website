import styles from '../css/ShortUpcomingEvent.module.css'
import useMediaQuery from '../utils/useMediaQuery'
import {byDate} from '../utils/upcomingEvents'
import UpcomingEvent from './UpcomingEvent'

const EventSelector = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const events = byDate.slice(0, 3);

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
        {events.map((event, i) => (
          <>
            {
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
                  noteProps={{expandable: true}}
                />
              </div>
            }
          </>
        ))}
        <p
          style={isDesktop ? { fontSize: '30px' } : { fontSize: '18px' }}
          className={styles.title}
        >
          {events.length > 0 ? '' : 'Stay tuned for future events'}
        </p>
      </div>
    </div>
  )
}

export default EventSelector
