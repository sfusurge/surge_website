import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Podcast from './components/Podcast'

import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <Podcast />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
