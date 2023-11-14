import s from './projects.module.scss'

import { Project } from './project/Project'

export const Projects = () => {
  return (
    <div className={s.projectsContainer}>
      <h2>Projects</h2>
      <span>Things I&apos;ve built so far</span>
      <div className={s.projectsFlex}>
        <Project
          about={
            'About project text about project. About project text about project. About project text about project. About project text about project. About project text about project.'
          }
          hrefCod={'#'}
          hrefWeb={'#'}
          name={'Name Project'}
          stack={'react, HTML, SCSS'}
        />
        <Project
          about={
            'About project text about project. About project text about project. About project text about project. About project text about project. About project text about project.'
          }
          hrefCod={'#'}
          hrefWeb={'#'}
          name={'Name Project'}
          src={'#'}
          stack={'react, HTML, SCSS'}
        />
        <Project
          about={
            'About project text about project. About project text about project. About project text about project. About project text about project. About project text about project.'
          }
          hrefCod={'#'}
          hrefWeb={'#'}
          name={'Name Project'}
          src={'#'}
          stack={'react, HTML, SCSS'}
        />
        <Project
          about={
            'About project text about project. About project text about project. About project text about project. About project text about project. About project text about project. '
          }
          hrefCod={'#'}
          hrefWeb={'#'}
          name={'Name Project'}
          src={'#'}
          stack={'react, HTML, SCSS'}
        />
      </div>
    </div>
  )
}
