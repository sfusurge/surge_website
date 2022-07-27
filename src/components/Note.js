import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/Note.module.css'
import { ReactComponent as CurlSVG } from '../assets/note-curl.svg'
import { ReactComponent as CurlMobileSVG } from '../assets/note-curl-mobile.svg'

const Note = ({
  children,
  primaryColor = '#3D73C7',
  secondaryColor = '#2B5699',
  contentHeight,
  expandable,
  setHovering
}) => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const classes = [
    styles.container,
    expandable ? styles.containerExpandable : null,
  ]

  return (
    <div
      className={classes.filter(x => x != null).join(' ')}
      style={{
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
        height: contentHeight
      }}
    >
      {children}
      <div className={styles.pageCurl}>
        {isDesktop ? (
          <CurlSVG fill={secondaryColor} className={styles.borderEdge} />
        ) : (
          <CurlMobileSVG fill={secondaryColor} className={styles.borderEdge} />
        )}
      </div>
      <div className={styles.hiddenTriangle} />
    </div>
  )
}

export default Note
