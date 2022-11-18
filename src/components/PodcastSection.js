import useLayoutChecks from '../utils/useLayoutChecks';
import styles from '../css/PodcastSection.module.css'
import monitorPodcast from '../assets/monitor-podcast.svg'
import IntroBody from './IntroBody'

const PodcastSection = props => {
  const { isDesktop } = useLayoutChecks();

  return (
    <div className={styles.container}>
      <IntroBody
        stylingImg={{
          width: '53%',
          paddingLeft: '4%',
          transform: 'translateY(0px)'
        }}
        stylingTextGroup={{
          paddingLeft: '4%',
          paddingRight: '5%',
          marginTop: '200px'
        }}
        stylingImgMobile={{
          paddingTop: '46px'
        }}
        stylingTextMobile={{
          margin: '0 12%',
          paddingTop: '46px',
          paddingBottom: '49px'
        }}
        imageSrc={monitorPodcast}
        scrollBar={false}
      >
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          Brought to you by students of SFU Surge, our podcast aims to promote
          curiosity and excitement within the tech community! Each episode
          welcomes an SFU student or alumni to share their goals, struggles, and
          perspectives regarding their personal journeys within tech.
        </p>
        {!isDesktop && (
          <a
            className={styles.link}
            href="google.ca"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.btn}>See all our episodes on Spotify</div>
          </a>
        )}
      </IntroBody>
    </div>
  )
}

export default PodcastSection
