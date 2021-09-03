import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory'
import SocialsIcons from '../components/SocialsIcon'

const AboutPage = props => {
  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <AboutSection />
      <OurStory />
      <Footer />
    </div>
  )
}

export default AboutPage
