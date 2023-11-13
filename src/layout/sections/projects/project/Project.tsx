import s from './Project.module.scss'

import { Icon } from '../../../../components/icon/Icon.tsx'

type projectType = {
  about: string
  hrefCod: string
  hrefWeb: string
  name: string
  src?: string
  stack: string
}

export const Project = ({ about, hrefCod, hrefWeb, name, src, stack }: projectType) => {
  return (
    <div className={s.projectContainer}>
      <div className={s.image}>{src && <img alt={name} src={src} />}</div>
      <div className={s.projectInform}>
        <h3>{name}</h3>
        <p>{about}</p>
        <h4>
          <b>Tech Stack: </b>
          {stack}
        </h4>
        <div className={s.refs}>
          <a href={hrefWeb}>Preview</a>
          <a href={hrefCod}>
            <Icon
              className={s.svgClass}
              height={'20'}
              iconId={'github'}
              viewBox={'-1.5 -2 100 100'}
              width={'20'}
            />
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}
