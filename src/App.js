import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OurStory from './components/OurStory'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <OurStory />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
