import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Activity from './components/Activity.js'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <Activity />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
