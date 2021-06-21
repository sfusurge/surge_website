import { useState } from 'react'
import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/NewsLetter.module.css'

import FormSheet from './FormSheet'
import CheckMarkBox from './CheckMarkBox'
import mail from '../assets/mail-with-background.svg'

const NewsLetter = () => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {isDesktop ? (
        <div className={styles.container}>
          <div className={styles.formSheet}>
            {submitted ? (
              <CheckMarkBox setSubmitted={setSubmitted} />
            ) : (
              <FormSheet setSubmitted={setSubmitted} />
            )}
          </div>
          <img src={mail} className={styles.letter}></img>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <img src={mail} className={styles.mobileLetter}></img>
          <div className={styles.mobileFormSheet}>
            {submitted ? (
              <CheckMarkBox setSubmitted={setSubmitted} />
            ) : (
              <FormSheet setSubmitted={setSubmitted} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default NewsLetter
