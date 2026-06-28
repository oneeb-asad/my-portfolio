import { useState } from 'react'
import { Navbar, Hero, Work, Experience, Contact } from '@components'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App