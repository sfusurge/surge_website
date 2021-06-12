import styles from '../css/SocialsIcon.module.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'

const socials = [
  { link: 'https://github.com/sfusurge', img: github },
  { link: 'https://www.instagram.com/sfusurge/', img: instagram },
  { link: 'https://www.facebook.com/sfusurge', img: facebook }
]
const SocialsIcons = props => {
  return (
    <div className={styles.container}>
      {socials.map(({ link, img }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
        >
          <img className={styles.img} src={img} />
        </a>
      ))}
    </div>
  )
}

export default SocialsIcons
