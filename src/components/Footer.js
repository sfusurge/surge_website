import styles from '../css/Footer.module.css'
import useLayoutChecks from '../utils/useLayoutChecks'
import SocialsIcon from './SocialsIcon'
// import scooter from '../assets/scooter.svg'
// import robot from '../assets/robot-standing.svg'
// import notepad from '../assets/notepad.svg'

const Footer = props => {
  const { isDesktop } = useLayoutChecks();
  return (
    <div
      className={styles.container}
      style={{ justifyContent: isDesktop ? 'space-between' : 'center' }}
    >
      <div className={isDesktop ? styles.icons : styles.mobileIcons}>
        <SocialsIcon />
      </div>
      {/* TODO: Try to incorporate these images in the footer without increasing height*/}
      {/* {isDesktop && (
        <div className={styles.images}>
          <img className={styles.scooter} src={scooter} alt="scooter"></img>
          <img className={styles.robot} src={robot} alt="robot"></img>
          <img className={styles.notepad} src={notepad} alt="notepad"></img>
        </div>
      )} */}
    </div>
  )
}

export default Footer
