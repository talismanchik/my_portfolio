import './Header.module.scss'

import { LogoName } from '../../components/logo/LogoName.tsx'
import { Menu } from '../../components/menu/menu'
import { SocialItems } from '../../components/socialItems/SocialItems'

export const Header = () => {
  return (
    <header>
      <LogoName />
      <Menu />
      <SocialItems />
    </header>
  )
}
