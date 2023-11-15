import s from './projects.module.scss'

import portfolioIMG from '../../../assets/images/partfolio_screen.png'
import smailIMG from '../../../assets/images/smail_screen.png'
import { Project } from './project/Project'

export const Projects = () => {
  return (
    <div className={s.projectsContainer}>
      <h2>Projects</h2>
      <span>Things I&apos;ve built so far</span>
      <div className={s.projectsFlex}>
        <Project
          about={
            ' The form element to associate the button with its form owner. The value of this attribute must be the id of a form in the same document. (If this attribute is not set, the button is associated with its ancestor form element, if any.)'
          }
          classNameImg={'s.smail'}
          hrefCod={'https://github.com/talismanchik/smail'}
          hrefWeb={'#'}
          name={'Smail'}
          src={smailIMG}
          stack={'react, HTML, SCSS'}
        />
        <Project
          about={
            ' The form element  its form owner. The value of this attribute must be the id of a form in the same document. (If this attribute is not set, the button is associated with its ancestor form element, if any.)'
          }
          classNameImg={'s.smail'}
          hrefCod={'https://github.com/talismanchik/my_portfolio'}
          hrefWeb={'#'}
          name={'Portfolio'}
          src={portfolioIMG}
          stack={'react, HTML, SCSS'}
        />
        <Project
          about={
            ' The form  associate the button with its form owner. The value of this attribute must be the id of a form in the same document. (If this attribute is not set, the button is associated with its ancestor form element, if any.)'
          }
          hrefCod={'#'}
          hrefWeb={'#'}
          name={'Name Project'}
          //src={'#'}
          stack={'react, HTML, SCSS'}
        />
        <Project
          about={
            ' The form element to  its form owner. The value of this attribute must be the id of a form in the same document. (If this attribute is not set, the button is associated with its ancestor form element, if any.)'
          }
          hrefCod={'#'}
          hrefWeb={'#'}
          name={'Name Project'}
          //src={'#'}
          stack={'react, HTML, SCSS'}
        />
      </div>
    </div>
  )
}
