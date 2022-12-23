import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './css/App.module.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import EventsPage from './pages/EventsPage'
import PodcastPage from './pages/PodcastPage'
import { EventsProvider } from './utils/upcomingEvents'

const App = () => {
  return (
    <EventsProvider>
      <div id={styles.app}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
          </Routes>
        </Router>
      </div>
    </EventsProvider>
  )
}

export default App
