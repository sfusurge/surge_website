import styles from '../css/EventSelector.module.css'
import useMediaQuery from '../utils/useMediaQuery'
import allEvents from '../utils/upcomingEvents'
import UpcomingEvent from './UpcomingEvent'
import downArrowIcon from '../assets/downArrow.svg'
import { useState } from 'react'

const EventSelector = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const [filter, setFilter] = useState('Workshops')
  const [listOpen, setListOpen] = useState(false)

  const filterTypes = ['Workshops', 'TechTalks', 'Socials']

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
            {filterTypes.map((filterType, i) => (
              <button
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
                {filterTypes.map((filterType, i) => (
                  <>
                    <button
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
        {allEvents.map((event, i) => (
          <>
            {filter === event.filterSetting && (
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
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default EventSelector