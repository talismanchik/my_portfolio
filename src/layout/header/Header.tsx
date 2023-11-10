//import styled from 'styled-components'

import './Header.module.scss'

import { LogoName } from '../../components/logo/Logo'
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

// const StyledHeader = styled.header`
//   background-color: antiquewhite;
//   display: flex;
//   justify-content: space-between;
// `
