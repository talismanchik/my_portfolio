import s from './Technologies.module.scss'

import { Icon } from '../../../components/icon/Icon'

export const Technologies = () => {
  return (
    <div className={s.techContainer}>
      <h2> Tech Stack</h2>
      <span>Technologies I&apos;ve been working with recently</span>
      <div className={s.techFlex}>
        <Icon height={'120'} iconId={'html'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'css'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'js'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'react'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'redux'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'sass'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'git'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'github'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'figma'} viewBox={'0 0 120 120'} width={'120'} />
      </div>
    </div>
  )
}
