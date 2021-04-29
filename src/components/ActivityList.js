import useMediaQuery from '../utils/useMediaQuery'
import Activity from './Activity.js'
import styles from '../css/ActivityList.module.css'
import scooter from '../assets/scooter.svg'
import robot from '../assets/robot.svg'
import microphone from '../assets/microphone.svg'

const activities = [
  {
    image: robot,
    textTitle: 'Events',
    textBody:
      'Our podcast, Surge Spotlight, welcomes SFU students and alumni to share their goals, struggles, and perspectives regarding their personal journeys within tech.'
  },
  {
    image: scooter,
    textTitle: 'Projects',
    textBody:
      'Surge Projects enables passionate and goal-oriented students in software development and design by allowing them to build innovative and practical projects in the span of a semester.'
  }
]

const ActivityList = props => {
  return (
    <div>
      <Activity
        image={scooter}
        textTitle="Projects"
        textBody="Our podcast, Surge Spotlight, welcomes SFU students and alumni to share their goals, struggles, and perspectives regarding their personal journeys within tech."
      />
      <Activity
        image={robot}
        textTitle="fdas"
        textBody="Our podcast, Surge Spotlight, welcomes SFU students and alumni to share their goals, struggles, and perspectives regarding their personal journeys within tech."
      />
    </div>
  )
}

export default ActivityList
