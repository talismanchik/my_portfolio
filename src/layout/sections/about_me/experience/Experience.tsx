import s from '../AboutMe.module.scss'

import { Icon } from '../../../../components/icon/Icon'

export const Experience = () => {
  return (
    <div className={s.section}>
      <h2>Work Experience</h2>
      <div className={s.workExperienceWrapper}>
        <div className={s.workExperience}>
          <div className={s.jobInformTop}>
            <h3>Founder, Front-end developer</h3>
            <span>
              <b>Part Time</b>
            </span>
          </div>
          <div className={s.jobInformBottom}>
            <div className={s.workLocation}>
              <div>
                <Icon height={'12'} iconId={'work'} viewBox={'0 0 16 12'} width={'16'} />
                Fish Place
              </div>
              <div>
                <Icon height={'12'} iconId={'location'} viewBox={'0 0 16 12'} width={'16'} />
                Minsk
              </div>
            </div>
            <div className={s.period}>February 2024 - now</div>
          </div>
        </div>
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
                EL-QUEUE
              </div>
              <div>
                <Icon height={'12'} iconId={'location'} viewBox={'0 0 16 12'} width={'16'} />
                Moscow
              </div>
            </div>
            <div className={s.period}>May 2023 - august 2024</div>
          </div>
        </div>
        <div className={s.workExperience}>
          <div className={s.jobInformTop}>
            <h3>Frontend Developer</h3>
            <span>
              <b>Part Time</b>
            </span>
          </div>
          <div className={s.jobInformBottom}>
            <div className={s.workLocation}>
              <div>
                <Icon height={'12'} iconId={'work'} viewBox={'0 0 16 12'} width={'16'} />
                Smart Cards
              </div>
              <div>
                <Icon height={'12'} iconId={'location'} viewBox={'0 0 16 12'} width={'16'} />
                Moscow
              </div>
            </div>
            <div className={s.period}>July 2022 - may 2023</div>
          </div>
        </div>
      </div>
    </div>
  )
}
