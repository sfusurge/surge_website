import PodcastSection from '../components/PodcastSection'
import AllPodcasts from '../components/AllPodcasts'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const ProjectPage = props => {
  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <PodcastSection />
      <AllPodcasts />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProjectPage
