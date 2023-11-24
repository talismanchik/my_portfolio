import s from './SocialItems.module.scss'

import { Icon } from '../icon/Icon'

type SocialItemsType = {
  phoneMode: boolean
}

export const SocialItems = (props: SocialItemsType) => {
  return (
    <ul className={props.phoneMode ? s.iconsPhoneContainer : s.iconsContainer}>
      <li>
        <a className={s.svgClass} href={'#'}>
          <Icon iconId={'gitSocial'} viewBox={'-2.5 -2.5 35 35'} />
        </a>
      </li>
      <li>
        <a className={s.svgClass} href={'#'}>
          <Icon iconId={'linkedIn'} viewBox={'-2.5 -2.5 35 35'} />
        </a>
      </li>
      <li>
        <a className={s.svgClass} href={'https://t.me/EugeneNest'}>
          <Icon iconId={'telegramm'} viewBox={'-2 -5 45 45'} />
        </a>
      </li>
      <li>
        <a className={s.svgClass} href={''}>
          <Icon iconId={'inst'} viewBox={'0.5 0.5 20 20'} />
        </a>
      </li>
    </ul>
  )
}
