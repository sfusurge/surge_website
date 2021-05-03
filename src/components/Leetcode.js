import LeetcodeText from './LeetcodeText.js'
import laptopMonitor from '../assets/laptop-monitor.svg'
import styles from '../css/Leetcode.module.css'

const Leetcode = props => {
  return (
    <div>
      <div className={styles.container}>
        <LeetcodeText />
      </div>
      <div className={styles.innerContainer}>
        <img
          src={laptopMonitor}
          className={styles.image}
          alt="Laptop Monitor"
        ></img>
      </div>
    </div>
  )
}

export default Leetcode
