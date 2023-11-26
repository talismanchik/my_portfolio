import s from './Technologies.module.scss'

import { Icon } from '../../../components/icon/Icon'

export const Technologies = () => {
  return (
    <section className={s.techContainer} id={'techStack'}>
      <h2> Tech Stack</h2>
      <span>Technologies I&apos;ve been working with recently</span>
      <div className={s.techFlex}>
        <Icon height={'120'} iconId={'html'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'css'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'js'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'react'} viewBox={'-3.5 -10 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'redux'} viewBox={'-8 -10 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'ts'} viewBox={'-8 -8 135 135'} width={'120'} />
        <Icon height={'120'} iconId={'sass'} viewBox={'0 -15 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'styled'} viewBox={'0 0 120 120'} width={'120'} />
        <Icon height={'120'} iconId={'figma'} viewBox={'-15 0 90 90'} width={'120'} />
        <Icon height={'120'} iconId={'git'} viewBox={'-2 -1 108 108'} width={'120'} />
        <Icon height={'120'} iconId={'github'} viewBox={'-1 -1 90 90'} width={'120'} />
      </div>
    </section>
  )
}
