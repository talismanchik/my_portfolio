import s from './SocialItems.module.scss'

import { Icon } from '../icon/Icon'

type SocialItemsType = {
  phoneMode: boolean
}

export const SocialItems = (props: SocialItemsType) => {
  return (
    <ul className={props.phoneMode ? s.iconsPhoneContainer : s.iconsContainer}>
      <li>
        <a
          className={s.svgClass}
          href={'https://github.com/talismanchik'}
          rel={'noreferrer'}
          target={'_blank'}
        >
          <Icon iconId={'gitSocial'} viewBox={'-2.5 -2.5 35 35'} />
        </a>
      </li>
      <li>
        <a
          className={s.svgClass}
          href={'https://www.linkedin.com/in/eugene-nesterenko-2a25b2265/'}
          rel={'noreferrer'}
          target={'_blank'}
        >
          <Icon iconId={'linkedIn'} viewBox={'-2.5 -2.5 35 35'} />
        </a>
      </li>
      <li>
        <a
          className={s.svgClass}
          href={'https://t.me/EugeneNest'}
          rel={'noreferrer'}
          target={'_blank'}
        >
          <Icon iconId={'telegramm'} viewBox={'-2 -5 45 45'} />
        </a>
      </li>
      <li>
        <a
          className={s.svgClass}
          href={'https://www.instagram.com/eugene_nest/'}
          rel={'noreferrer'}
          target={'_blank'}
        >
          <Icon iconId={'inst'} viewBox={'0.5 0.5 20 20'} />
        </a>
      </li>
    </ul>
  )
}
