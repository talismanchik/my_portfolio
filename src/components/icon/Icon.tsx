// import s from './Icon.module.scss'

import iconsSprite from '../../assets/icons-sprite.svg'

type IconType = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}
export const Icon = (props: IconType) => {
  return (
    <a className={props.className} href={''}>
      <svg
        fill={'none'}
        height={props.height || '35'}
        viewBox={props.viewBox || '0 0 30 30'}
        width={props.width || '35'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
    </a>
  )
}
