import ProjectSection from '../components/ProjectSection'
import AllProjects from '../components/AllProjects'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const ProjectPage = props => {
  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <ProjectSection />
      <AllProjects />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProjectPage
