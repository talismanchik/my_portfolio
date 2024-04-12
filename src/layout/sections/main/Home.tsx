import Tilt from 'react-parallax-tilt'

import s from './Home.module.scss'

import cv from '../../../assets/cv.pdf'
import avatar from '../../../assets/images/avatar.jpg'
export const Home = () => {
  return (
    <section className={s.homeContainer} id={'home'}>
      <div className={s.homeHeader}>
        <div className={s.textWrapper}>
          <h1>
            Hi there,
            <br />
            My name is
            <br />
            <span>Eugene Nesterenko</span>
            <br />I build things for web.
          </h1>
        </div>
        <Tilt className={s.avatarWrapper}>
          <img alt={'photo of a handsome developer'} className={s.avatar} src={avatar} />
        </Tilt>
      </div>
      <a href={cv} rel={'noreferrer'} target={'_blank'}>
        <button className={s.cvButton}>Show CV</button>
      </a>
    </section>
  )
}
