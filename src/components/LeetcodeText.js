import styles from '../css/LeetcodeText.module.css'

const LeetcodeText = props => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Leetcode</p>
      <p className={styles.bodyText}>
        Leetcode is an online platform that serves as a gateway to entering the
        professional world of the tech industry. It is an essential tool that
        helps students to excel in technical interviews.
      </p>
      <div className={styles.linkContainer}>
        <a
          className={styles.clearLinks}
          href="https://www.facebook.com/sfusurge/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.btnContainer}>
            <p className={styles.btnText}>Facebook Event</p>
          </div>
        </a>
      </div>
    </div>
  )
}
export default LeetcodeText
