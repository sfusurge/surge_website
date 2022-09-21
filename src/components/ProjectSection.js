import useMediaQuery from '../utils/useMediaQuery'
import upcomingApplications, { defaultRoles } from '../utils/upcomingApplications'
import { calculateTimeLeft, formatDoubleDigitTime } from '../utils/timeLeft'
import styles from '../css/ProjectSection.module.css'
import monitorProjects from '../assets/monitor-projects.svg'
import monitorProjectMobile from '../assets/monitor-project-mobile.svg'
import IntroBody from './IntroBody'
import React, { useEffect, useState } from 'react'

// NOTE: Looking to modify the application dates or add a new one?
//       Check under `src/utils/upcomingApplication.js`!

const getTime = dueDate => {
  const timeLeft = calculateTimeLeft(dueDate)
  const timeStrings = {}
  if (timeLeft) {
    timeStrings.days = formatDoubleDigitTime(timeLeft.days)
    timeStrings.hours = formatDoubleDigitTime(timeLeft.hours)
    timeStrings.minutes = formatDoubleDigitTime(timeLeft.minutes)
    timeStrings.seconds = formatDoubleDigitTime(timeLeft.seconds)
  }

  return timeLeft
}

const ProjectSection = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  // Get the current application.
  const now = Date.now();
  const application = upcomingApplications.find(app => now >= (new Date(app.from)) && now < (new Date(app.to)));
  const applicationOpen = application != null;

  // If there's no application open right now, look for the next application date.
  // TODO(eth-p): Implement this to show when the next round of applications are open.

  // if (!applicationOpen) {
  //   application = upcomingApplications
  //     .filter(app => now > (new Date(app.to)))
  //     .reduce((closestApp, app) => (new Date(app.from)) < (new Date(closestApp.from)) ? app : closestApp);
  // }

  const rolesOpen = application == null ? defaultRoles : application.roles;
  const dueDate = application == null ? '' : application.to;

  // Set up an effect to refresh for the countdown.
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(dueDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Render the component.
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
          {rolesOpen.map((role, i) => <React.Fragment key={i}>
              <span className={styles.boldText}>{role}</span>
              {i == (rolesOpen.length - 1) ? '' : i < (rolesOpen.length - 2) ? ', ' : ', and '}
          </React.Fragment>)}{' '}
          every semester.
        </p>
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          Currently, Projects applications are{' '}
          <span className={styles.boldText}>
            {applicationOpen ? 'OPEN' : 'CLOSED'}
          </span>
          .
        </p>
        {(timeLeft && application != null) && (
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
                href={application.button.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btn}>{application.button.text}</div>
              </a>
            </div>
          </>
        )}
      </IntroBody>
    </>
  )
}

export default ProjectSection
