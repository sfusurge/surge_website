import styles from '../css/Execs.module.css'
import execs from '../utils/execList'
const execResolver = require.context('../assets/execs', false, /.*\.png/)

const Execs = props => {
  return (
    <div className={styles.outerContainer}>
      <p className={styles.title}>Our Story</p>
      <p className={styles.storyText}>
        SFU Surge is an all-inclusive organization to promote
        <span className={styles.boldText}>
          {' curiosity and excitement for a future in technology'}
        </span>
        , while guiding students on their paths to{' '}
        <span className={styles.boldText}>{' career success'}</span>. An
        innovative community which empowers students to gain access to readily
        available networking, and connect their shared experiences with
        designers, engineers, programmers and developers alike.
      </p>

      <p className={styles.storyText}>
        We want to make an impact to offer resources, support, and opportunities
        to ensure each <span className={styles.boldText}>{' project '}</span> is
        presentable to potential employers – and give students more experience
        before they head out into the real world. The{' '}
        <span className={styles.boldText}>{' events '}</span> challenge
        participants to be ambitious about their process and end goals, with
        plenty of room to improve and accelerate. Guidance in{' '}
        <span className={styles.boldText}>{' mentorship sessions'}</span>,
        <span className={styles.boldText}>{' mixers'}</span>, and{' '}
        <span className={styles.boldText}>{' talks'}</span> help students
        succeed and encourage them through personal and inspirational
        connections.
      </p>

      <p className={styles.secondBody}>
        You can get in contact with us by emailing{' '}
        <a
          className={styles.hyperLink}
          href="mailto:sfusurge@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.hyperLinks}>{'sfusurge@gmail.com'}</span>
        </a>
        , or by messaging us on{' '}
        <a
          className={styles.hyperLink}
          href="https://www.facebook.com/sfusurge"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.hyperLinks}>{'Facebook'}</span>
        </a>
        ,{' '}
        <a
          className={styles.hyperLink}
          href="https://www.instagram.com/sfusurge/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.hyperLinks}>{'Instagram'}</span>
        </a>
        , or{' '}
        <a
          className={styles.hyperLink}
          href="https://twitter.com/sfusurge?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.hyperLinks}>{'Twitter'}</span>
        </a>
        . Also, be sure to sign up for our Newsletter to stay up to date with
        all our events!
      </p>

      <p className={styles.title}>Our Team</p>
      <div className={styles.innerContainer}>
        {execs.map((exec, i) => (
          <img
            src={execResolver(exec.src).default}
            width={exec.width}
            alt={exec.src}
          />
        ))}
      </div>
      <p className={styles.text}>
        SFU Surge is always looking for partners! Feel free to contact us at
        sfusurge@gmail.com if you are interested in collaborating.
      </p>
    </div>
  )
}

export default Execs
