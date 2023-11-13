import s from './AboutMe.module.scss'

import { About } from './about/About'
import { Education } from './education/Education'
import { Experience } from './experience/Experience'

export const AboutMe = () => {
  return (
    <div className={s.informationContainer}>
      <About />
      <Experience />
      <Education />
    </div>
  )
}
