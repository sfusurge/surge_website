import useMediaQuery from '../utils/useMediaQuery'
import { calculateTimeLeft, formatDoubleDigitTime } from '../utils/timeLeft'
import styles from '../css/ProjectSection.module.css'
import monitorProjects from '../assets/monitor-projects.svg'
import monitorProjectMobile from '../assets/monitor-project-mobile.svg'
import IntroBody from './IntroBody'
import { useEffect, useState } from 'react'

const getTime = dueDate => {
  const timeLeft = calculateTimeLeft(dueDate)

  if (timeLeft) {
    timeLeft.days = formatDoubleDigitTime(timeLeft.days)
    timeLeft.hours = formatDoubleDigitTime(timeLeft.hours)
    timeLeft.minutes = formatDoubleDigitTime(timeLeft.minutes)
    timeLeft.seconds = formatDoubleDigitTime(timeLeft.seconds)
  }

  return timeLeft
}

const ProjectSection = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const dueDate = '2022-07-23T06:59:59Z'
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(dueDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <>
      <IntroBody
        stylingImg={{
          paddingLeft: '4%',
          transform: 'translateY(0px)'
        }}
        stylingImgMobile={{
          paddingTop: '46px'
        }}
        stylingTextGroup={{
          paddingLeft: '7%',
          paddingRight: '7%',
          marginTop: '71px'
        }}
        stylingTextMobile={{
          margin: '0 16%',
          paddingTop: '23px',
          paddingBottom: '49px'
        }}
        imageSrc={isDesktop ? monitorProjects : monitorProjectMobile}
      >
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          Projects Teams are comprised of 4 team members and a team lead. All
          teams are supported by mentors that specialize in different areas of
          the product lifecycle.
        </p>
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          We open applications for{' '}
          <span className={styles.boldText}>Project Team Members</span>,{' '}
          <span className={styles.boldText}>Team</span>
          <span className={styles.boldText}>Leads</span>, and
          <span className={styles.boldText}>{' Mentors'} </span> every semester.
        </p>
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          Currently, Projects applications are{' '}
          <span className={styles.boldText}>
            {timeLeft ? 'OPEN' : 'CLOSED'}{' '}
          </span>
        </p>
        {timeLeft && (
          <>
            <p
              style={
                isDesktop ? { textAlign: 'left' } : { textAlign: 'center' }
              }
              className={styles.timer}
            >
              {timeLeft.days}
              {' : '}
              {timeLeft.hours}
              {' : '}
              {timeLeft.minutes}
              {' : '}
              {timeLeft.seconds}
            </p>
            <div
              style={
                isDesktop ? { width: 'max(160px, 74%)' } : { width: '100%' }
              }
            >
              <a
                className={styles.link}
                href="https://docs.google.com/forms/d/1uppE0jiHmQX0uqxFeaKFfd5mP2-4IMMMTAUsx47sYz8/edit"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btn}>Apply Now</div>
              </a>
            </div>
          </>
        )}
      </IntroBody>
    </>
  )
}

export default ProjectSection
