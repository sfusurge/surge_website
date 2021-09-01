import ActivityList from '../components/ActivityList'
import ProjectSection from '../components/ProjectSection'
import ShortUpcomingEvent from '../components/ShortUpcomingEvent'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const ProjectPage = props => {
  return (
    <div>
      <ProjectSection />
      <ActivityList />
      <ShortUpcomingEvent />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProjectPage
