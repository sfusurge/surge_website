import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/NavBar.module.css'
import sfuSurgeMobile from '../assets/sfu-surgeMobile.svg'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import { useState } from 'react'

const NavBar = props => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div className={styles.container}>
      {isDesktop ? (
        <ul className={styles.navLinks}>
          <li className={styles.spaceLinks}>
            <Link to="/" className={styles.linkText}>
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
          <li className={styles.spaceLinks}>
            <Link to="/podcast" className={styles.linkText}>
              Podcasts
            </Link>
          </li>
        </ul>
      ) : (
        <div
          className={styles.mobileContainer}
          style={
            open
              ? { backgroundColor: '#ffffff' }
              : { backgroundColor: 'transparent' }
          }
        >
          <div className={styles.menuGroup}>
            <img
              className={styles.navLogo}
              style={open ? { opacity: 1 } : { opacity: 0 }}
              src={sfuSurgeMobile}
              alt={sfuSurgeMobile}
            ></img>
            <Burger open={open} setOpen={setOpen} />
          </div>
          {open && (
            <>
              <ul className={styles.navLinksMobile}>
                <li className={styles.spaceLinksMobile}>
                  <Link to="/" className={styles.linkText}>
                    Home
                  </Link>
                </li>
                <li className={styles.spaceLinksMobile}>
                  <Link to="/about" className={styles.linkText}>
                    About
                  </Link>
                </li>
                <li className={styles.spaceLinksMobile}>
                  <Link to="/projects" className={styles.linkText}>
                    Projects
                  </Link>
                </li>
                <li className={styles.spaceLinksMobile}>
                  <Link to="/events" className={styles.linkText}>
                    Events
                  </Link>
                </li>
                <li className={styles.spaceLinksMobile}>
                  <Link to="/podcast" className={styles.linkText}>
                    Podcasts
                  </Link>
                </li>
              </ul>
              <div className={styles.socialsIcons}>
                <img src={facebook} id={styles.facebook} alt={facebook} />
                <img src={instagram} alt={instagram} />
                <img src={github} id={styles.github} alt={github} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default NavBar
