import useLayoutChecks from '../utils/useLayoutChecks';
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
  const { isDesktop } = useLayoutChecks();

  // Get the current application.
  const now = Date.now();
  let application = upcomingApplications.find(app => now >= (new Date(app.from)) && now < (new Date(app.to)));
  let applicationOpen = application != null;
  let applicationQueued = false;
  let targetDate = application == null ? '' : application.to;

  // If there's no application open right now, look for the next application date.
  // If we find one, show a countdown for that instead.
  if (!applicationOpen) {
    application = upcomingApplications
      .filter(app => now < (new Date(app.from)))
      .reduce((closestApp, app) => {
        if (closestApp == null) return app;
        if ((new Date(app.from)) < (new Date(closestApp.from))) return app;
        return closestApp;
      }, null);

    if (application != null) {
      applicationQueued = true;
      targetDate = application.from;
    }
  }

  const rolesOpen = application == null ? defaultRoles : application.roles;

  // Set up an effect to refresh for the countdown.
  const [timeLeft, setTimeLeft] = useState(getTime(targetDate))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

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
            {i === (rolesOpen.length - 1) ? '' : i < (rolesOpen.length - 2) ? ', ' : ', and '}
          </React.Fragment>)}{' '}
          every semester.
        </p>
        <p
          style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '20px' }}
          className={styles.bodyText}
        >
          {
            applicationQueued ? 
              'Applications will open in:' :
              <>
                Currently, Projects applications are{' '}
                <span className={styles.boldText}>
                  {applicationOpen ? 'OPEN' : 'CLOSED'}
                </span>
                .
              </>
          }
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
              {timeLeft.hours.toString().padStart(2, '0')}
              {' : '}
              {timeLeft.minutes.toString().padStart(2, '0')}
              {' : '}
              {timeLeft.seconds.toString().padStart(2, '0')}
            </p>
            <div
              style={
                isDesktop ? { width: 'max(160px, 74%)' } : { width: '100%' }
              }
            >
              { applicationOpen && 
                <a
                  className={styles.link}
                  href={application.button.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.btn}>{application.button.text}</div>
                </a>
              }
            </div>
          </>
        )}
      </IntroBody>
    </>
  )
}

export default ProjectSection
