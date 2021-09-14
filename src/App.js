import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styles from './css/App.module.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import EventsPage from './pages/EventsPage'
import PodcastPage from './pages/PodcastPage'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/podcast">
            <PodcastPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
