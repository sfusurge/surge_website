import useLayoutChecks from '../utils/useLayoutChecks';
import styles from '../css/Note.module.css'
import { ReactComponent as CurlSVG } from '../assets/note-curl.svg'
import { ReactComponent as CurlMobileSVG } from '../assets/note-curl-mobile.svg'

const Note = ({
  children,
  primaryColor = '#3D73C7',
  secondaryColor = '#2B5699',
  contentHeight,
  setHovering
}) => {
  const { isDesktop } = useLayoutChecks();

  return (
    <div
      className={styles.container}
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
