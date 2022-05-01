import styles from '../css/Footer.module.css'
import useMediaQuery from '../utils/useMediaQuery'
import SocialsIcon from './SocialsIcon'
import scooter from '../assets/scooter.svg'
import robot from '../assets/robot-standing.svg'
import notepad from '../assets/notepad.svg'

const Footer = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <div
      className={styles.container}
      style={{ justifyContent: isDesktop ? 'space-between' : 'center' }}
    >
      <div className={isDesktop ? styles.icons : styles.mobileIcons}>
        <SocialsIcon />
      </div>
    </div>
  )
}

export default Footer
