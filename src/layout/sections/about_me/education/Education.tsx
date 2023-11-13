import s from '../AboutMe.module.scss'

import { Icon } from '../../../../components/icon/Icon'

export const Education = () => {
  return (
    <div className={s.section}>
      <h2>Education</h2>
      <div className={s.workExperienceWrapper}>
        <div className={s.workExperience}>
          <div className={s.jobInformTop}>
            <h3>Frontend Developer</h3>
            <span>
              <b>Full Time</b>
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
            <div>
              <Icon height={'12'} iconId={'calendar'} viewBox={'0 0 16 12'} width={'16'} />
              November 2022 - now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
