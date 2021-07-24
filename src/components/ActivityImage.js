import styles from '../css/ActivityImage.module.css'
const ActivityImage = props => {
  return (
    <div className={styles.container}>
      <div className={styles.squareBackground}></div>
      <img
        src={props.image}
        className={styles.image}
        style={props.styling}
        alt={props.altText}
      />
    </div>
  )
}

export default ActivityImage
