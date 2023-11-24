import s from './menu.module.scss'
type MenuType = {
  phoneMode: boolean
}
export const Menu = (props: MenuType) => {
  return (
    <ul className={props.phoneMode ? s.menuPhoneContainer : s.menuContainer}>
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
  )
}
