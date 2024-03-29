import useLayoutChecks from '../utils/useLayoutChecks'
import styles from '../css/LeetcodeText.module.css'

const LeetcodeText = props => {
  const { isDesktop } = useLayoutChecks();
  return (
    <div className={styles.container}>
      <p
        style={{ marginBottom: isDesktop ? '7px' : '5px' }}
        className={styles.title}
      >
        Leetcode
      </p>
      <p
        className={styles.bodyText}
        style={isDesktop ? { lineHeight: '32px' } : { lineHeight: '16px' }}
      >
        Leetcode is an online platform that serves as a gateway to entering the
        professional world of the tech industry. It is an essential tool that
        helps students to excel in technical interviews.
      </p>

      <a
        className={styles.clearLinks}
        href="https://www.facebook.com/events/1085453905185159"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.btnContainer}>
          <p className={styles.btnText}>Facebook Event</p>
        </div>
      </a>
    </div>
  )
}
export default LeetcodeText
