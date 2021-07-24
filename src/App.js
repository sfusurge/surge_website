import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeBody from './components/HomeBody'
import NavBar from './components/NavBar'

import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <HomeBody />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
