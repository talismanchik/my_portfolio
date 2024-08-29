import iconsSprite from '../../assets/icons-sprite.svg'

type IconType = {
  className?: string
  height?: string
  iconId: string
  isBlur?: boolean
  viewBox?: string
  width?: string
}
export const Icon = (props: IconType) => {
  return (
    <svg
      fill={'none'}
      height={props.height || '35'}
      opacity={props.isBlur ? 0.5 : 1}
      viewBox={props.viewBox || '0 0 30 30'}
      width={props.width || '35'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
