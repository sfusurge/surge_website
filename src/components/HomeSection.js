import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/HomeSection.module.css'
import rocketMonitor from '../assets/rocket-monitor.svg'
import rocketMonitorMobile from '../assets/rocket-monitor-mobile.svg'
import sfuSurge from '../assets/sfu-surge.svg'
import sfuSurgeMobile from '../assets/sfu-surgeMobile.svg'
import { Link } from 'react-router-dom'

import IntroBody from './IntroBody'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'

const HomeSection = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const [scrollBar, setScrollBar] = useState(true)
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollBar(false)
    } else {
      setScrollBar(true)
    }
  }

  return (
    <>
      {isDesktop ? (
        <IntroBody
          imageSrc={rocketMonitor}
          stylingTextGroup={{
            marginTop: '25px'
          }}
          scrollBar={scrollBar}
        >
          <img className={styles.logo} src={sfuSurge} alt={sfuSurge} />
          <p className={styles.header}>Engage • Empower • Innovate</p>
          <p
            style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
            className={styles.bodyText}
          >
            <span className={styles.boldText}>{'SFU Surge '}</span>
            is an all-inclusive organization to promote
            <span className={styles.boldText}>
              {' curiosity and excitement for a future in technology'}
            </span>
            , while guiding students on their paths to career success.
          </p>
          <Link to="/about" className={styles.link}>
            <div className={styles.btn}>Learn More</div>
          </Link>
        </IntroBody>
      ) : (
        <div className={styles.mobileContainer}>
          <div className={styles.navBarMobile}>
            <NavBar />
          </div>
          <div className={styles.mobileText}>
            <img
              className={styles.mobileLogo}
              src={sfuSurgeMobile}
              alt={sfuSurgeMobile}
            />
            <p className={styles.header}>Engage • Empower • Innovate</p>
            <p className={styles.bodyText}>
              <span className={styles.boldTextMobile}>{'SFU Surge '}</span>
              is an all-inclusive organization to promote
              <span className={styles.boldTextMobile}>
                {' curiosity and excitement for a future in technology'}
              </span>
              , while guiding students on their paths to career success.
            </p>
            <Link to="/about" className={styles.link}>
              <div className={styles.btn}>Learn More</div>
            </Link>
          </div>
          <img
            src={rocketMonitorMobile}
            alt={rocketMonitorMobile}
            className={styles.rocketMonitorMobile}
          />
        </div>
      )}
    </>
  )
}

export default HomeSection
