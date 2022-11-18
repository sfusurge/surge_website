import useLayoutChecks from '../utils/useLayoutChecks'
import styles from '../css/NewsLetter.module.css'

import FormSheet from './FormSheet'
import mail from '../assets/mail-with-background.svg'

const NewsLetter = () => {
  const { isDesktop } = useLayoutChecks();

  return (
    <>
      {isDesktop ? (
        <div className={styles.container}>
          <div className={styles.formSheet}>
            <FormSheet />
          </div>
          <img src={mail} className={styles.letter} alt="Letter"></img>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <img src={mail} className={styles.mobileLetter} alt="Letter"></img>
          <div className={styles.mobileFormSheet}>
            <FormSheet />
          </div>
        </div>
      )}
    </>
  )
}

export default NewsLetter
