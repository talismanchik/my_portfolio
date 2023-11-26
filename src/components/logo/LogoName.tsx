import { animateScroll as scroll } from 'react-scroll'

import s from './LogoName.module.scss'

export const LogoName = () => {
  return (
    <a
      className={s.logoContainer}
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <span>
        Eugene
        <br />
        Nesterenko
      </span>
    </a>
  )
}
