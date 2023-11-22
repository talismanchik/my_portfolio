import s from './Home.module.scss'

import avatar from '../../../assets/images/avatar.jpg'
export const Home = () => {
  return (
    <section className={s.homeContainer}>
      <div className={s.myInform}>
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
        <div className={s.avatarWrapper}>
          <img alt={'photo of a handsome developer'} className={s.avatar} src={avatar} />
        </div>
      </div>
      <div></div>
    </section>
  )
}
