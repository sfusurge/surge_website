import styles from '../css/EventSelector.module.css'
import useLayoutChecks from '../utils/useLayoutChecks';
import UpcomingEvent from './UpcomingEvent'
import downArrowIcon from '../assets/downArrow.svg'
import { Fragment, useEffect, useState } from 'react'
import { EventsLoaded, useEvents } from '../utils/upcomingEvents';

const EventSelectorFilters = [
  'Socials',
  'Workshops',
  'TechTalks',
]

const EventSelector = props => {
  const { isDesktop } = useLayoutChecks();
  const { events, status } = useEvents({returnEmpty: true});

  const [listOpen, setListOpen] = useState(false)
  const [filter, setFilter] = useState('');

  // Select the default category.
  useEffect(() => {
    if (filter !== '' || status !== EventsLoaded) {
      return;
    }

    for (const filterType of EventSelectorFilters) {
      if (events.some(event => event.type === filterType)) {
        setFilter(filterType);
        return;
      }
    }
  }, [filter, events, status])

  // TODO: Loading screen?

  const filteredEvents = events.filter(event => event.type === filter);
  return (
    <div
      className={styles.container}
      style={isDesktop ? { paddingBottom: '119px' } : { paddingBottom: '72px' }}
    >
      <div
        className={isDesktop ? styles.titleSection : styles.mobileTitleSection}
      >
        <p className={styles.title}>Upcoming Events</p>
        {isDesktop ? (
          <div className={styles.filter}>
            {EventSelectorFilters.map(filterType => (
              <button
                key={filterType}
                className={styles.filterText}
                style={
                  filter === filterType
                    ? { fontWeight: '800' }
                    : { fontWeight: '600' }
                }
                onClick={() => {
                  setFilter(filterType)
                }}
              >
                {filterType}
              </button>
            ))}
          </div>
        ) : (
          <div className={styles.listGroup}>
            {!listOpen ? (
              <button
                className={styles.filterText}
                onClick={() => {
                  setListOpen(true)
                }}
              >
                {filter} <img src={downArrowIcon} alt={downArrowIcon}></img>
              </button>
            ) : (
              <div className={styles.filterMobile}>
                {EventSelectorFilters.map(filterType => (
                  <>
                    <button
                      key={filterType}
                      className={styles.filterText}
                      style={
                        filter === filterType
                          ? {
                              backgroundColor: 'var(--color-button-dropdown)',
                              width: '100%',
                              padding: 0,
                              paddingLeft: '5px'
                            }
                          : {
                              backgroundColor: 'var(--color-text-white)',
                              width: '100%',
                              padding: 0,
                              paddingLeft: '5px'
                            }
                      }
                      onClick={() => {
                        setFilter(filterType)
                        setListOpen(false)
                      }}
                    >
                      {filterType}
                    </button>
                  </>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={isDesktop ? styles.eventsNotes : styles.eventsNotesMobile}
      >
        {filteredEvents.map(event => (
          <div key={event.title} {...!isDesktop && {className: styles.notesMargin}}>
            <UpcomingEvent
              title={event.title}
              start={event.start}
              end={event.end}
              location={event.location}
              links={event.links}
              colors={event.colors}
            />
          </div>
        ))}
        {filteredEvents.length > 0 || (<p
          style={isDesktop ? { fontSize: '2rem' } : { fontSize: '1rem' }}
          className={styles.title}
        >
          Stay tuned for future events!
        </p>)}
      </div>
    </div>
  )
}

export default EventSelector
