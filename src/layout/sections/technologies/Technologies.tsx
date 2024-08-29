import { Fade } from 'react-awesome-reveal'
import Tilt from 'react-parallax-tilt'

import s from './Technologies.module.scss'

import { Icon } from '../../../components/icon/Icon'

export const Technologies = () => {
  const technologies = [
    { iconId: 'html', viewBox: '0 0 120 120' },
    { iconId: 'css', viewBox: '0 0 120 120' },
    { iconId: 'js', viewBox: '0 0 120 120' },
    { iconId: 'react', viewBox: '-3.5 -10 120 120' },
    { iconId: 'redux', viewBox: '-8 -10 120 120' },
    { iconId: 'ts', viewBox: '-8 -8 135 135' },
    { iconId: 'sass', viewBox: '0 -15 120 120' },
    { iconId: 'styled', viewBox: '0 0 120 120' },
    { iconId: 'figma', viewBox: '-15 0 90 90' },
    { iconId: 'git', viewBox: '-2 -1 108 108' },
    { iconId: 'github', viewBox: '-1 -1 90 90' },
    { iconId: 'swagger', viewBox: '-0 -0 256 256' },
    { iconId: 'rhf', viewBox: '-0 -0 200 200' },
    { iconId: 'MUI', viewBox: '-0 -0 600 457' },
    { iconId: 'ant', viewBox: '-0 -0 256 256' },
    { iconId: 'mapbox', viewBox: '250 250 530 530' },
  ]

  const technologiesMapped = technologies.map((el, index) => {
    return (
      <Tilt gyroscope key={index} tiltMaxAngleX={30} tiltMaxAngleY={30}>
        <Icon height={'120'} iconId={el.iconId} viewBox={el.viewBox} width={'120'} />
      </Tilt>
    )
  })

  return (
    <section className={s.techContainer} id={'techStack'}>
      <h2> Tech Stack</h2>
      <span>Technologies I&apos;ve been working with recently</span>
      <div className={s.techFlex}>
        <Fade cascade damping={0.08} direction={'up'}>
          {' '}
          {technologiesMapped}
        </Fade>
      </div>
    </section>
  )
}
