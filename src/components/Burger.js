/** @format */

import styles from '../css/Burger.module.css'

const Burger = props => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.setOpen(!props.open)
      }}
    >
      <div
        className={styles.lines}
        style={
          props.open
            ? {
                transform: 'rotate(45deg)',
                backgroundColor: 'var(--color-text-body)'
              }
            : { transform: 'rotate(0)', backgroundColor: '#ffffff' }
        }
      />
      <div
        style={
          props.open
            ? {
                transform: 'translateX(50%)',
                opacity: 0,
                backgroundColor: 'var(--color-text-body)'
              }
            : {
                transform: 'translateX(0)',
                opacity: 1,
                backgroundColor: '#ffffff'
              }
        }
        className={styles.lines}
      />
      <div
        style={
          props.open
            ? {
                transform: 'rotate(-45deg)',
                backgroundColor: 'var(--color-text-body)'
              }
            : { transform: 'rotate(0)', backgroundColor: '#ffffff' }
        }
        className={styles.lines}
      />
    </div>
  )
}

export default Burger
