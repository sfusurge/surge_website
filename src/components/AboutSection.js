import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/AboutSection.module.css'
import AboutMonitor from '../assets/monitor-about.svg'
import AboutMonitorMobile from '../assets/monitor-about-mobile.svg'
import IntroBody from './IntroBody'

const AboutSection = props => {
  const isLaptop = useMediaQuery('(min-width: 1200px)')
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <>
      <IntroBody
        stylingImg={
          isLaptop
            ? {
                width: '75%',
                paddingLeft: '6%',
                transform: 'translateY(0px)'
              }
            : { width: '65%', paddingLeft: '4%', transform: 'translateY(0px)' }
        }
        stylingTextGroup={
          isLaptop
            ? {
                position: 'absolute',
                top: '200px',
                left: '60%',
                lineHeight: '32px',
                padding: '0'
              }
            : { paddingLeft: '4%', paddingRight: '4%', lineHeight: '32px' }
        }
        stylingTextMobile={{
          margin: '0 8%',
          paddingBottom: '78px',
          lineHeight: '20px'
        }}
        imageSrc={isDesktop ? AboutMonitor : AboutMonitorMobile}
      >
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          The SFU Surge Executive Team is a team of 20 disciplinary students
          across 5+ SFU Programs. Together, we aim to: Empower, Innovate, and
          Inspire the local tech community with workshops, events, and projects.
        </p>
      </IntroBody>
    </>
  )
}

export default AboutSection
