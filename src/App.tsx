import { Navbar, Hero, Work, Experience, Contact } from '@components'

function App() {
  return (
    <main className="bg-white text-gray-900 font-sans antialiased">
      <Navbar />
      <Hero />
      <Work />
      <Experience />
      <Contact />
    </main>
  )
}

export default App