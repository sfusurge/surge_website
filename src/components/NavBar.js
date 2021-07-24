import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/NavBar.module.css'

import { Link } from 'react-router-dom'

const NavBar = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div className={styles.container}>
      <ul className={styles.navLinks}>
        <li className={styles.spaceLinks}>
          <Link to="/path" className={styles.linkText}>
            Home
          </Link>
        </li>
        <li className={styles.spaceLinks}>
          <Link to="/about" className={styles.linkText}>
            About
          </Link>
        </li>
        <li className={styles.spaceLinks}>
          <Link to="/projects" className={styles.linkText}>
            Projects
          </Link>
        </li>
        <li className={styles.spaceLinks}>
          <Link to="/events" className={styles.linkText}>
            Events
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
