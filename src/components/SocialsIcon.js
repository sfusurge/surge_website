import styles from '../css/SocialsIcon.module.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'

const socials = [
  { link: 'https://www.facebook.com/sfusurge', img: facebook },
  { link: 'https://www.instagram.com/sfusurge/', img: instagram },
  { link: 'https://github.com/sfusurge', img: github }
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
          <img className={styles.img} src={img} alt={img} />
        </a>
      ))}
    </div>
  )
}

export default SocialsIcons
