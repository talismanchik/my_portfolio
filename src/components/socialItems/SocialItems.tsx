import s from './SocialItems.module.scss'

import { Icon } from '../icon/Icon'

export const SocialItems = () => {
  return (
    <div className={s.iconsContainer}>
      <Icon className={s.svgClass} iconId={'gitSocial'} viewBox={'-2.5 -2.5 35 35'} />
      <Icon className={s.svgClass} iconId={'linkedIn'} viewBox={'-2.5 -2.5 35 35'} />
      <Icon className={s.svgClass} iconId={'twitter'} viewBox={'-0.5 -0.5 35 35'} />
      <Icon className={s.svgClass} iconId={'inst'} viewBox={'0.5 0.5 20 20'} />
    </div>
  )
}
