import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/CheckMarkBox.module.css'
import checkMark from '../assets/checkmark.svg'

const CheckMarkBox = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div className={styles.container}>
      <p
        style={isDesktop ? { marginBottom: '39px' } : { marginBottom: '26px' }}
        className={styles.title}
      >
        Keep up to date with our events
      </p>
      <img
        style={isDesktop ? { width: '200px' } : { width: '100px' }}
        src={checkMark}
        alt="Check Mark"
      ></img>
      <button
        style={isDesktop ? { marginTop: '39px' } : { marginTop: '26px' }}
        className={styles.btn}
        onClick={() => {
          props.setSubmitted(false)
        }}
      >
        <p className={styles.btnText}>Thanks for Subscribing!</p>
      </button>
    </div>
  )
}

export default CheckMarkBox
