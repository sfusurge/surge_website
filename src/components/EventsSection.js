import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/EventSection.module.css'
import monitorEvents from '../assets/monitor-events.svg'
import monitorEventsMobile from '../assets/monitor-events-mobile.svg'
import IntroBody from './IntroBody'

const EventSection = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div className={styles.container}>
      <IntroBody
        stylingImg={{
          width: '53%',
          paddingLeft: '4%',
          transform: 'translateY(0px)'
        }}
        stylingTextGroup={{
          paddingLeft: '3%',
          paddingRight: '9%'
        }}
        stylingTextMobile={{
          margin: '0 12%',
          paddingBottom: '49px'
        }}
        imageSrc={isDesktop ? monitorEvents : monitorEventsMobile}
        scrollBar={false}
      >
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          Events are a core component of our semesterly activities. On a regular
          basis, we host talks, workshops, socials, and more. Together, we also
          tend to do a lot of Leetcode problems. Scroll down below to see what
          events we have coming up. We hope to see you there!
        </p>
      </IntroBody>
    </div>
  )
}

export default EventSection
