import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Work from '@components/Work'

function App() {
  return (
    <main className="bg-white text-gray-900 font-sans antialiased">
      <Navbar />
      <Hero />
      <Work />
    </main>
  )
}

export default App