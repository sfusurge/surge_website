import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Leetcode from './components/Leetcode'

import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <Leetcode />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
