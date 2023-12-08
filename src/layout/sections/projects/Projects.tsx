import s from './projects.module.scss'

import portfolioIMG from '../../../assets/images/partfolio_screen.png'
import smailIMG from '../../../assets/images/smail_screen.png'
import { Project } from './project/Project'

export const Projects = () => {
  const projects = [
    {
      about:
        'Smail is a social network. It was written by me for educational purposes. Currently being added',
      hrefCod: 'https://github.com/talismanchik/smail',
      hrefWeb: '#',
      name: 'Smail',
      readiness: false,
      src: smailIMG,
      stack: 'TS, React, Redux, HTML, SCSS',
    },
    {
      about: 'This is the project you are seeing now.',
      hrefCod: 'https://github.com/talismanchik/my_portfolio',
      hrefWeb: '#',
      name: 'Portfolio',
      readiness: true,
      src: portfolioIMG,
      stack: 'TS, React, HTML, SCSS',
    },
    {
      about:
        'This is an assistant for recording daily activities.\n' +
        'It will help you not to keep a lot of unnecessary information in your head.',
      hrefCod: 'https://github.com/talismanchik/smail',
      hrefWeb: '#',
      name: 'Todo List',
      readiness: false,
      src: '',
      stack: 'TS, React, HTML, SCSS',
    },
    {
      about:
        'Taxi Manager is designed to help Uber drivers. With this application, the driver can easily track his working hours and income.',
      hrefCod: 'https://github.com/talismanchik/smail',
      hrefWeb: '#',
      name: 'Taxi Manager',
      readiness: false,
      src: '',
      stack: 'TS, React, Redux, HTML, SCSS',
    },
  ]

  const projectsMapped = projects.map((el, index) => {
    return (
      <Project
        about={el.about}
        hrefCod={el.hrefCod}
        hrefWeb={el.hrefWeb}
        key={index}
        name={el.name}
        readiness={el.readiness}
        src={`${el.src && el.src}`}
        stack={el.stack}
      />
    )
  })

  return (
    <section className={s.projectsContainer} id={'projects'}>
      <h2>Projects</h2>
      <span>Things I&apos;ve built so far</span>
      <div className={s.projectsFlex}>{projectsMapped}</div>
    </section>
  )
}
