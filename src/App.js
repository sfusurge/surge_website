import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EventSelector from './components/EventSelector'

import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <EventSelector />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
