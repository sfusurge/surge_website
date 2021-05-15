import useMediaQuery from '../utils/useMediaQuery'
import styles from '../css/Note.module.css'

const Note = ({ children, primaryColor, secondaryColor }) => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <div
      className={styles.container}
      style={{
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor
      }}
    >
      <div className={styles.main}>{children}</div>
      <div className={styles.pageCurl}>
        {isDesktop ? (
          <svg
            className={styles.borderEdge}
            width="73"
            height="54"
            viewBox="0 0 73 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.2627 0.610107L0.262695 53.6101C3.35196 39.8428 4.147 32.1699 0.262695 15.1101C29.4332 16.0221 45.0596 11.9848 72.2627 0.610107Z"
              fill={secondaryColor || '#2B5699'}
            />
          </svg>
        ) : (
          <svg
            className={styles.borderEdge}
            width="48"
            height="36"
            viewBox="0 0 48 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.4272 0.845703L0.975586 35.0393C2.96866 26.1571 3.48159 21.2069 0.975586 10.2005C19.7953 10.7889 29.8768 8.18422 47.4272 0.845703Z"
              fill={secondaryColor || '#2B5699'}
            />
          </svg>
        )}
      </div>
      <div
        className={styles.hiddenTriangle}
        style={
          isDesktop
            ? {
                borderLeft: '74px solid transparent',
                borderBottom: '54px solid var(--color-background-primary)'
              }
            : {
                borderLeft: '47px solid transparent',
                borderBottom: '35px solid var(--color-background-primary)'
              }
        }
      />
    </div>
  )
}

export default Note
