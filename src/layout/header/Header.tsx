import { useState } from 'react'

import s from './Header.module.scss'

import { BurgerButton } from '../../components/burger_button/BurgerButton'
import { LogoName } from '../../components/logo/LogoName'
import { SocialItems } from '../../components/socialItems/SocialItems'
import { Menu } from './menu/menu'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`${isOpen && s.headerOpenPhone}`}
      onClick={() => {
        isOpen && setIsOpen(false)
      }}
    >
      <LogoName />
      <BurgerButton isOpen={isOpen} onClick={onClickHandler} />
      <nav>
        <Menu phoneMode={isOpen} />
        <SocialItems phoneMode={isOpen} />
      </nav>
    </header>
  )
}
