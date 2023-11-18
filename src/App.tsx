import { Footer } from './layout/footer/footer'
import { Header } from './layout/header/Header'
import { AboutMe } from './layout/sections/about_me/AboutMe'
import { Contacts } from './layout/sections/contacts/Contacts'
import { Home } from './layout/sections/main/Home'
import { Projects } from './layout/sections/projects/Projects'
import { Technologies } from './layout/sections/technologies/Technologies'

function App() {
  return (
    <>
      <Header />
      <Home />

      <AboutMe />
      <Technologies />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
