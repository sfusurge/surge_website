import EventsSection from '../components/EventsSection'
import Leetcode from '../components/Leetcode'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import EventSelector from '../components/ShortUpcomingEvent'

const EventsPage = props => {
  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <EventsSection />
      <EventSelector />
      <Leetcode />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default EventsPage
