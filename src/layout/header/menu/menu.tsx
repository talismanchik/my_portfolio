import { Link } from 'react-scroll'

import s from './menu.module.scss'
type MenuType = {
  onClick: () => void
  phoneMode: boolean
}
export const Menu = (props: MenuType) => {
  const items = [
    {
      href: 'home',
      title: 'Home',
    },
    {
      href: 'about',
      title: 'About',
    },
    {
      href: 'techStack',
      title: 'Tech Stack',
    },
    {
      href: 'projects',
      title: 'Projects',
    },
    {
      href: 'contacts',
      title: 'Contacts',
    },
  ]

  const menuMapped = items.map((el, index) => {
    const offSetCondition = el.title === 'Contacts' ? -450 : -100

    return (
      <li className={s.itemWrapper} key={index}>
        <Link
          activeClass={s.active}
          className={s.menuItem}
          offset={offSetCondition}
          onClick={props.onClick}
          smooth
          spy
          to={el.href}
        >
          {el.title}
        </Link>
      </li>
    )
  })

  return <ul className={props.phoneMode ? s.menuPhoneContainer : s.menuContainer}>{menuMapped}</ul>
}
