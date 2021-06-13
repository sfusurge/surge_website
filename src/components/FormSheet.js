import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/FormSheet.module.css'

const FormSheet = () => {
  return (
    <div>
      <p>Keep up to date with our events</p>
      <form
        action="https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&amp;id=736d801cb8"
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <div className={styles.textBox}>
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
        <div className={styles.textBox}>
          <input
            id="Naz"
            className={styles.signUpInput}
            type="text"
            required
            name="Name"
          />
          <label for="Naz" className={styles.formLabel}>
            Name
          </label>
        </div>
      </form>
    </div>
  )
}

export default FormSheet
