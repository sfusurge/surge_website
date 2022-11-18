import useLayoutChecks from '../utils/useLayoutChecks';
import styles from '../css/CheckMarkBox.module.css'
import checkMark from '../assets/checkmark.svg'

const CheckMarkBox = props => {
  const { isDesktop } = useLayoutChecks();

  return (
    <div className={styles.container}>
      <img
        style={isDesktop ? { width: '200px' } : { width: '100px' }}
        src={checkMark}
        alt="Check Mark"
      ></img>
      <button
        style={isDesktop ? { marginTop: '39px' } : { marginTop: '26px' }}
        className={styles.btn}
        onClick={() => {
          props.setName('')
          props.setEmail('')
          props.setSubmitted(false)
        }}
      >
        <p className={styles.btnText}>Thanks for Subscribing!</p>
      </button>
    </div>
  )
}

export default CheckMarkBox
