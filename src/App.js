import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ActivityList from './components/ActivityList.js'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <ActivityList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
