import LeetcodeText from './LeetcodeText.js'
import laptopMonitor from '../assets/laptop-monitor.svg'
import styles from '../css/Leetcode.module.css'

const Leetcode = props => {
  return (
    <>
      <div className={styles.textContainer}>
        <LeetcodeText />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={laptopMonitor}
          className={styles.image}
          alt="Laptop Monitor"
        ></img>
      </div>
    </>
  )
}

export default Leetcode
