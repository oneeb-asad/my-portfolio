import { useState } from 'react'
import { Navbar, Hero, Work, About, Contact } from '@components'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="bg-[#fdf6f0] dark:bg-[#0f1b3d] text-[#0f1b3d] dark:text-[#fdf6f0] transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App