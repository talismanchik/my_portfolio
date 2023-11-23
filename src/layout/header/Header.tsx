import { useState } from 'react'

import './Header.module.scss'

import { BurgerButton } from '../../components/burger_button/BurgerButton'
import { LogoName } from '../../components/logo/LogoName'
import { SocialItems } from '../../components/socialItems/SocialItems'
import { Menu } from './menu/menu'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  const onClickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <LogoName />
      <Menu />
      <SocialItems />
      <BurgerButton isOpen={isOpen} onClick={onClickHandler} />
    </header>
  )
}
