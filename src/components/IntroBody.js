import styles from '../css/IntroBody.module.css'
import NavBar from './NavBar'
import triangle from '../assets/triangle.svg'
import useMediaQuery from '../utils/useMediaQuery'

const IntroBody = ({
  children,
  stylingImg,
  stylingImgMobile,
  stylingTextGroup,
  stylingTextMobile,
  imageSrc,
  scrollBar
}) => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return (
    <>
      {isDesktop ? (
        <div className={styles.container}>
          <NavBar />
          <div className={styles.innerContainer}>
            <img
              style={stylingImg}
              className={styles.image}
              src={imageSrc}
              alt={imageSrc}
            />
            <div style={stylingTextGroup} className={styles.mainText}>
              {children}
            </div>
          </div>
          <div
            style={scrollBar ? { opacity: 1 } : { opacity: 0 }}
            className={styles.scrollDown}
          >
            <p className={styles.scrollDownText}>SCROLL</p>
            <img alt="scroll down" src={triangle} />
          </div>
        </div>
      ) : (
        <div className={styles.imageBackground}>
          <div className={styles.mobileContainer}>
            <div className={styles.navBarMobile}>
              <NavBar />
            </div>
            <img
              style={stylingImgMobile}
              className={styles.imageMobile}
              src={imageSrc}
              alt={imageSrc}
            />
          </div>
          <div style={stylingTextMobile} className={styles.fontLines}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default IntroBody
