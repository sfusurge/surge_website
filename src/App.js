import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllProjects from './components/AllProjects'
import ProjectNote from './components/ProjectNote'

import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <AllProjects />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
