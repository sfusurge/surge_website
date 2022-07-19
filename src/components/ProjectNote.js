import { useState } from 'react'
import useMediaQuery from '../utils/useMediaQuery'
import Note from './Note'
import styles from '../css/ProjectNote.module.css'

const projectResolver = require.context('../assets/projects', false, /.*\.svg/)

const ProjectNote = ({
  src,
  srcMobile,
  height,
  mobileHeight,
  title,
  text,
  mobileText,
  link
}) => {
  const [hovering, setHovering] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div
      onMouseEnter={() => {
        setHovering(true)
      }}
      onMouseLeave={() => {
        setHovering(false)
      }}
      style={isDesktop ? { width: '403px' } : { width: '263px' }}
    >
      <Note contentHeight={isDesktop ? '282px' : '270px'}>
        <div>
          {!hovering ? (
            <img
              style={isDesktop ? { width: '403px' } : { width: '263px' }}
              src={
                isDesktop
                  ? projectResolver(src)
                  : projectResolver(srcMobile)
              }
              alt="MealMovers"
            ></img>
          ) : (
            <div
              className={
                isDesktop ? styles.textContainer : styles.textMobileContainer
              }
            >
              <p
                style={isDesktop ? { margin: '15px 0' } : { margin: '5px 0' }}
                className={styles.noteTitle}
              >
                {' '}
                {title}
              </p>
              <p
                style={
                  isDesktop
                    ? { marginBottom: '29px' }
                    : { marginBottom: '15px' }
                }
                className={styles.noteText}
              >
                {mobileText ? mobileText : text}
              </p>
              <a
                className={styles.fbEventLink}
                target="_blank"
                rel="noreferrer"
                href={link}
              >
                <div className={styles.fbEvent}>Take me to the Github page</div>
              </a>
            </div>
          )}
        </div>
      </Note>
    </div>
  )
}

export default ProjectNote
