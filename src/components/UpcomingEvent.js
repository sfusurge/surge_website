import useLayoutChecks from '../utils/useLayoutChecks';
import Note from '../components/Note'
import styles from '../css/UpcomingEvent.module.css'
import mapMarker from '../assets/map-marker.svg'
import clock from '../assets/clock.svg'

const UpcomingEvent = ({
  title,
  day,
  month,
  location,
  time,
  links,
  ...props
}) => {
  const { isDesktop } = useLayoutChecks();

  // Default properties.
  const colors = Object.assign({}, props.colors);

  // Use an ndash instead of a hyphen in the time string.
  const timeString = time.replace("-", "\u2013" /* ndash */);

  // Render.
  return (
    <Note primaryColor={colors.primary} secondaryColor={colors.secondary}>
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
                  <EventLocation text={location} href={links.location} alt="Event location" />
                </div>
                <div className={styles.details} style={{ marginTop: '8px' }}>
                  <img src={clock} alt="Time" />
                  <p className={styles.time}>{timeString}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.body}>
          {!isDesktop && (
            <div className={styles.detailsContainerMobile}>
              <div className={styles.details}>
                <EventLocation text={location} href={links.location} alt="Event location" />
              </div>
              <div className={styles.details} style={{ marginTop: '8px' }}>
                <img src={clock} alt="Time" />
                <p className={styles.time}>{timeString}</p>
              </div>
            </div>
          )}
          {links.register && <EventLink type="register" text="Register Here" href={links.register} />}
          {(links.facebook && links.facebook !== links.register) && <EventLink type="facebook" text="Facebook" href={links.facebook} />}
          {(links.discord && links.discord !== links.register) && <EventLink type="discord" text="Discord" href={links.discord} />}
          {links.other && <EventLink type="other" text={links.other.text} href={links.other.href} />}
        </div>
      </div>
    </Note>
  )
}

/**
 * The event location.
 *
 * If a mapHref is provided, it will turn the location into a link.
 *
 * @param {string} props.text The location name.
 * @param {string} props.mapHref The link destination.
 */
function EventLocation({text, href: mapHref}) {
  // Render the link itself.
  // If we don't have an href, don't insert an <a> tag.
  const aLink = mapHref == null ?
    (<span className={styles.location}>{text}</span>) :
    (<a className={styles.location} href={mapHref} target="_blank" rel="noreferrer">{text}</a>);

  // Render with the map marker image before it.
  return (
    <>
      <img src={mapMarker} alt="Location" />
      {aLink}
    </>
  );
}

/**
 * A link for the event.
 * @param {string} props.text The link text.
 * @param {string} props.href The link destination.
 */
function EventLink({type, text, href}) {
  // Render with the map marker image before it.
  return (
    <a className={styles.eventLinkButton} href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default UpcomingEvent
