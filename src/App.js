import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/path">
            <div style={{ height: '1240px' }}>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
              <div>Block</div>
            </div>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
