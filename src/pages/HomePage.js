import ActivityList from '../components/ActivityList'
import HomeSection from '../components/HomeSection'
import ShortUpcomingEvent from '../components/ShortUpcomingEvent'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const HomePage = props => {
  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <HomeSection />
      <ActivityList />
      <ShortUpcomingEvent />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default HomePage
