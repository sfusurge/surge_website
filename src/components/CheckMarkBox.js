import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/CheckMarkBox.module.css'
import checkMark from '../assets/checkmark.svg'

const CheckMarkBox = () => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div className={styles.container}>
      <p className={styles.title}>Keep up to date with our events</p>
      <img
        style={isDesktop ? { width: '200px' } : { width: '100px' }}
        src={checkMark}
      ></img>
      <button className={styles.btn}>
        <p className={styles.btnText}>Thanks for Subscribing!</p>
      </button>
    </div>
  )
}

export default CheckMarkBox
