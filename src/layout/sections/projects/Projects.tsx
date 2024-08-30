import s from './projects.module.scss'

import fishPlaceIMG from '../../../assets/images/Logo.png'
import elQueueIMG from '../../../assets/images/el-queue.png'
import portfolioIMG from '../../../assets/images/partfolio_screen.png'
import smailIMG from '../../../assets/images/smail_screen.png'
import smartCardsIMG from '../../../assets/images/smart_cards_screen.png'
import todoListIMG from '../../../assets/images/todolist_screen.png'
import { Project } from './project/Project'

export const Projects = () => {
  const projects = [
    {
      about:
        'Thanks to this application, anglers will be able to share their catches and find the best fishing spots.',
      hrefCod: '',
      hrefWeb: '',
      name: 'el-queue',
      readiness: true,
      src: fishPlaceIMG,
      stack: 'TS, React, RTK, Web Socket, HTML, SCSS',
    },
    {
      about:
        'This application is designed for hospitals, clinics, banks, etc., allowing the organization of customer service processes and facilitating the work of employees.',
      hrefCod: '',
      hrefWeb: 'http://el-queue.ru/',
      name: 'el-queue',
      readiness: true,
      src: elQueueIMG,
      stack: 'TS, React, RTK, Web Socket, HTML, SCSS',
    },
    {
      about:
        'Only desktop. This is a memory improvement application. It has decks with flashcards that you can browse through to test your knowledge.',
      hrefCod: 'https://github.com/talismanchik/SmartCards',
      hrefWeb: 'https://smart-cards-app.vercel.app/',
      name: 'Smart cards',
      readiness: true,
      src: smartCardsIMG,
      stack: 'TS, RTK Query, React, HTML, SCSS',
    },

    {
      about: 'This is the project you are seeing now.',
      hrefCod: 'https://github.com/talismanchik/my_portfolio',
      hrefWeb: '',
      name: 'Portfolio',
      readiness: true,
      src: portfolioIMG,
      stack: 'TS, React, HTML, SCSS',
    },
    {
      about:
        'This is an assistant for recording daily activities.\n' +
        'It will help you not to keep a lot of unnecessary information in your head.',
      hrefCod: 'https://github.com/talismanchik/simple_todo_list',
      hrefWeb: 'https://simple-todolist-by-talismanchik.vercel.app/',
      name: 'Todo List',
      readiness: true,
      src: todoListIMG,
      stack: 'TS, React, RTK, HTML, SCSS',
    },
    {
      about:
        'Smail is a social network. It was written by me for educational purposes. Currently being added',
      hrefCod: 'https://github.com/talismanchik/smail',
      hrefWeb: '',
      name: 'Smail',
      readiness: false,
      src: smailIMG,
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
