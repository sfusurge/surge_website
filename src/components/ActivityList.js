import Activity from './Activity.js'
import styles from '../css/ActivityList.module.css'
import scooter from '../assets/scooter.svg'
import robot from '../assets/robot.svg'
import microphone from '../assets/microphone.svg'

const activities = [
  {
    image: scooter,
    altText: 'Scooter',
    textTitle: 'Projects',
    textBody:
      'Surge Projects enables passionate and goal-oriented students in software development and design by allowing them to build innovative and practical projects in the span of a semester.'
  },
  {
    image: robot,
    altText: 'Robot',
    textTitle: 'Events',
    style: { top: 'auto', bottom: '0%' },
    textBody:
      'We aim to give all students interested in tech the ability to learn, by bringing in senior tech students and industry professionals to teach hands-on workshops.'
  },
  {
    image: microphone,
    altText: 'Microphone',
    textTitle: 'Podcast',
    style: { right: '7%', top: '12%' },
    textBody:
      'Our podcast, Surge Spotlight, welcomes SFU students and alumni to share their goals, struggles, and perspectives regarding their personal journeys within tech.'
  }
]

const ActivityList = props => {
  return (
    <>
      <p className={styles.title}>Here's what we're up to!</p>
      {activities.map((label, i) => (
        <Activity
          image={label.image}
          altText={label.altText}
          textTitle={label.textTitle}
          textBody={label.textBody}
          styling={label.style}
        />
      ))}
    </>
  )
}

export default ActivityList
