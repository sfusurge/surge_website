import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/FormSheet.module.css'

const FormSheet = () => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div>
      <p
        style={isDesktop ? { marginBottom: '60px' } : { marginBottom: '17px' }}
        className={styles.title}
      >
        Keep up to date with our events
      </p>
      <form
        action="https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&amp;id=736d801cb8"
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <div
          style={
            isDesktop ? { marginBottom: '74px' } : { marginBottom: '43px' }
          }
          className={styles.textBox}
        >
          <input
            id="name"
            className={styles.signUpInput}
            type="text"
            name="Name"
            required
          />
          <label for="name" className={styles.formLabel}>
            Name
          </label>
        </div>
        <div
          style={
            isDesktop ? { marginBottom: '54px' } : { marginBottom: '33px' }
          }
          className={styles.textBox}
        >
          <input
            id="Email"
            className={styles.signUpInput}
            type="text"
            required
            name="Email"
          />
          <label for="Email" className={styles.formLabel}>
            Email
          </label>
        </div>
      </form>
      <button className={styles.signUpButton} type="submit">
        <p className={styles.signUpText}>Sign up for mailing list</p>
      </button>
    </div>
  )
}

export default FormSheet
