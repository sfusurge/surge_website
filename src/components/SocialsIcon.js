import styles from '../css/SocialsIcon.module.css'
import facebook from '../assets/socialMediaIcons/facebook.svg'
import instagram from '../assets/socialMediaIcons/instagram.svg'
import github from '../assets/socialMediaIcons/github.svg'
import discord from '../assets/socialMediaIcons/discord.svg'
import linkedin from '../assets/socialMediaIcons/linkedin.svg'

const socials = [
  { link: 'https://ca.linkedin.com/company/sfu-surge', img: linkedin },
  { link: 'https://www.facebook.com/sfusurge', img: facebook },
  { link: 'https://www.instagram.com/sfusurge/', img: instagram },
  { link: 'https://discord.com/invite/hxnB5JPxZF', img: discord },
  { link: 'https://github.com/sfusurge', img: github },
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
