import styles from '../css/EventSelector.module.css'
import useMediaQuery from '../utils/useMediaQuery'
import allEvents from '../utils/upcomingEvents'
import UpcomingEvent from './UpcomingEvent'

const EventSelector = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <p className={styles.title}>Upcoming Events</p>
        <div className={styles.filter}>
          <button className={styles.filterText}>Workshops</button>
          <button className={styles.filterText}>TechTalks</button>
          <button className={styles.filterText}>Socials</button>
        </div>
      </div>
      <div className={styles.eventsNotes}>
        {allEvents.map((event, i) => (
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
        ))}
      </div>
    </div>
  )
}

export default EventSelector
