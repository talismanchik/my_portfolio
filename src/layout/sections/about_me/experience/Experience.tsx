import s from '../AboutMe.module.scss'

import { Icon } from '../../../../components/icon/Icon'

export const Experience = () => {
  return (
    <div className={s.section}>
      <h2>Work Experience</h2>
      <div className={s.workExperienceWrapper}>
        <div className={s.workExperience}>
          <div className={s.jobInformTop}>
            <h3>Junior Web Developer</h3>
            <span>
              <b>Part Time</b>
            </span>
          </div>
          <div className={s.jobInformBottom}>
            <div className={s.workLocation}>
              <div>
                <Icon height={'12'} iconId={'work'} viewBox={'0 0 16 12'} width={'16'} />
                Own project
              </div>
              <div>
                <Icon height={'12'} iconId={'location'} viewBox={'0 0 16 12'} width={'16'} />
                Minsk
              </div>
            </div>
            <div className={s.period}>October 2023 - now</div>
          </div>
        </div>
        <div className={s.workExperience}>
          <div className={s.jobInformTop}>
            <h3>Frontend Developer Internship</h3>
            <span>
              <b>Part Time</b>
            </span>
          </div>
          <div className={s.jobInformBottom}>
            <div className={s.workLocation}>
              <div>
                <Icon height={'12'} iconId={'work'} viewBox={'0 0 16 12'} width={'16'} />
                ITincubator
              </div>
              <div>
                <Icon height={'12'} iconId={'location'} viewBox={'0 0 16 12'} width={'16'} />
                Vilnius
              </div>
            </div>
            <div className={s.period}>June 2023 - now</div>
          </div>
        </div>
      </div>
    </div>
  )
}
