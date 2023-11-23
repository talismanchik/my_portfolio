import s from './BurgerButton.module.scss'

import { Icon } from '../icon/Icon'

type BurgerButtonType = {
  isOpen: boolean
  onClick: () => void
}

export const BurgerButton = (props: BurgerButtonType) => {
  return (
    <button className={s.buttonWrapper} onClick={props.onClick}>
      {props.isOpen ? (
        <Icon iconId={'x'} viewBox={'10 10 40 40'} />
      ) : (
        <Icon iconId={'burger'} viewBox={'-3.5 -6 30 30'} />
      )}
    </button>
  )
}
