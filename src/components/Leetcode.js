import useMediaQuery from '../utils/useMediaQuery'
import LeetcodeText from './LeetcodeText.js'
import laptopMonitor from '../assets/laptop-monitor.svg'
import styles from '../css/Leetcode.module.css'

const Leetcode = props => {
  return (
    <div className={styles.container}>
      <LeetcodeText />
      <div>
        <img className={styles.image} src={laptopMonitor} className></img>
      </div>
    </div>
  )
}

export default Leetcode
