import s from './menu.module.scss'

export const Menu = () => {
  return (
    <nav className={s.menuContainer}>
      <ul>
        <li>
          <a href={''}>Home</a>
        </li>
        <li>
          <a href={''}>About</a>
        </li>
        <li>
          <a href={''}>Tech Stack</a>
        </li>
        <li>
          <a href={''}>Projects</a>
        </li>
        <li>
          <a href={''}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
