import s from './projects.module.scss'

export const Projects = () => {
  return (
    <div className={s.projectsContainer}>
      <h2>Projects</h2>
      <span>Things I&apos;ve built so far</span>
      <div className={s.projectsFlex}></div>
    </div>
  )
}
