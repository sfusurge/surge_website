import styles from '../css/EventsSelector.module.css'
import useMediaQuery from '../utils/useMediaQuery'
import allEvents from '../utils/upcomingEvents'
import UpcomingEvent from './UpcomingEvent'

const Footer = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <p className={styles.title}>Upcoming Events</p>
        <div className={styles.filter}>
          <p className={styles.filterText}>Workshops</p>
          <p className={styles.filterText}>TechTalks</p>
          <p className={styles.filterText}>Other</p>
        </div>
      </div>
      <div className={styles.eventsNotes}>
        {allEvents.map((event, i) => (
          <UpcomingEvent />
        ))}
      </div>
    </div>
  )
}

export default Footer
