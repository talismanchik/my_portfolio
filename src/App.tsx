import { Footer } from './layout/footer/footer'
import { Header } from './layout/header/Header'
import { AboutMe } from './layout/sections/about_me/AboutMe.tsx'
import { Home } from './layout/sections/main/Home'
import { Projects } from './layout/sections/projects/Projects.tsx'
import { Technologies } from './layout/sections/technologies/Technologies.tsx'

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </>
  )
}

export default App
