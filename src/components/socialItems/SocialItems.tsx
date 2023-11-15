import s from './SocialItems.module.scss'

import { Icon } from '../icon/Icon'

export const SocialItems = () => {
  return (
    <div className={s.iconsContainer}>
      <a className={s.svgClass} href={'#'}>
        <Icon iconId={'gitSocial'} viewBox={'-2.5 -2.5 35 35'} />
      </a>
      <a className={s.svgClass} href={'#'}>
        <Icon iconId={'linkedIn'} viewBox={'-2.5 -2.5 35 35'} />
      </a>
      <a className={s.svgClass} href={'https://t.me/EugeneNest'}>
        <Icon iconId={'telegramm'} viewBox={'-2 -5 45 45'} />
      </a>
      <a className={s.svgClass} href={''}>
        <Icon iconId={'inst'} viewBox={'0.5 0.5 20 20'} />
      </a>
    </div>
  )
}
