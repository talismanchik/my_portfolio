import s from './Contacts.module.scss'

import { SocialItems } from '../../../components/socialItems/SocialItems'

export const Contacts = () => {
  return (
    <section className={s.contactsContainer} id={'contacts'}>
      <h2>For any questions please mail me:</h2>
      <span>eugene.nesterenko.by@gmail.com</span>
      <span>+375 (29) 524-41-16</span>
      <SocialItems phoneMode />
    </section>
  )
}
