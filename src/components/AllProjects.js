import useLayoutChecks from '../utils/useLayoutChecks';
import styles from '../css/AllProjects.module.css'
import projectTitles from '../utils/projectTitles'
import ProjectNote from './ProjectNote'

const AllProjects = props => {
  const { isDesktop } = useLayoutChecks();
  return (
    <div className={isDesktop ? styles.container : styles.mobileContainer}>
      <p
        style={
          isDesktop
            ? { marginBottom: '8px' }
            : { marginBottom: '25px', textAlign: 'center' }
        }
        className={styles.title}
      >
        Past Projects
      </p>
      <div
        className={isDesktop ? styles.projectList : styles.projectListMobile}
      >
        {projectTitles.map((project, i) => (
          <div
            key={project.src}
            style={isDesktop ? { margin: '0' } : { marginBottom: '39px' }}
            className={styles.gridSpacing}
          >
            <ProjectNote
              src={project.src}
              srcMobile={project.srcMobile}
              title={project.title}
              text={project.text}
              height={project.height}
              mobileHeight={project.mobileHeight}
              mobileText={project.mobileText}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProjects
