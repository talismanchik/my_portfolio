import s from './Project.module.scss'

import { Icon } from '../../../../components/icon/Icon'

type projectType = {
  about: string
  classNameImg?: string
  hrefCod: string
  hrefWeb: string
  name: string
  readiness: boolean
  src: string
  stack: string
}

export const Project = ({
  about,
  classNameImg,
  hrefCod,
  hrefWeb,
  name,
  readiness,
  src,
  stack,
}: projectType) => {
  return (
    <div className={s.projectContainer}>
      <div className={` ${!readiness && s.notReadiness} ${s.image}`}>
        {src != '' && <img alt={name} className={`${classNameImg} `} src={src} />}
        <span>in progress</span>
      </div>
      <div className={s.projectInform}>
        <h3>{name}</h3>
        <p>{about}</p>
        <h4>
          <b>Tech Stack: </b>
          {stack}
        </h4>
      </div>
      <div className={s.refs}>
        <a className={s.ref} href={hrefWeb} rel={'noreferrer'} target={'_blank'}>
          <Icon
            className={s.svgClass}
            height={'20'}
            iconId={'linkChain'}
            viewBox={'-1.5 -2 20 20'}
            width={'20'}
          />
          Preview
        </a>
        <a className={s.ref} href={hrefCod} rel={'noreferrer'} target={'_blank'}>
          <Icon height={'20'} iconId={'github'} viewBox={'-1.5 -2 100 100'} width={'20'} />
          View Code
        </a>
      </div>
    </div>
  )
}
