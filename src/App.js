import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewsLetter from './components/NewsLetter'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <NewsLetter />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
