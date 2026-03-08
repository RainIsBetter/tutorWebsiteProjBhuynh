import { useEffect } from 'react'
import { preloadCalendly } from './lib/calendly'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    preloadCalendly()
  }, [])

  return <Home />
}

export default App
