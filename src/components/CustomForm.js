import { useState } from 'react'
import useLayoutChecks from '../utils/useLayoutChecks'
import styles from '../css/CustomForm.module.css'
import CheckMarkBox from './CheckMarkBox'

const CustomForm = ({ status, message, onValidated }) => {
  const { isDesktop } = useLayoutChecks();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    onValidated({
      EMAIL: email,
      MERGE1: name
    })
    setSubmitted(true)
  }

  return (
    <>
      {status === 'success' && submitted ? (
        <CheckMarkBox
          setName={setName}
          setEmail={setEmail}
          setSubmitted={setSubmitted}
        />
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
          <div
            style={
              isDesktop ? { marginBottom: '74px' } : { marginBottom: '43px' }
            }
            className={styles.textBox}
          >
            <input
              id="Name"
              className={styles.signUpInput}
              type="text"
              value={name}
              onChange={handleNameChange}
              name="NAME"
              placeholder="Name"
              required
            />
            <label htmlFor="Name" className={styles.formLabel}>
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
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="EMAIL"
              placeholder="Email"
              required
            />
            <label htmlFor="Email" className={styles.formLabel}>
              Email
            </label>
          </div>
          <button
            className={styles.signUpButton}
            label="subscribe"
            type="submit"
          >
            <p className={styles.signUpText}>Sign up for mailing list</p>
          </button>
          {status === 'sending' && <p className={styles.sendMsg}>Sending...</p>}
          {status === 'error' && (
            <p className={styles.errorMsg}>
              Invalid email or email already exists!
            </p>
          )}
        </form>
      )}
    </>
  )
}

export default CustomForm
