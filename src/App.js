import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormSheet from './components/FormSheet'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <FormSheet />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
