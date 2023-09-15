//styles
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// components and pages



function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    if(darkMode == false) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }
  
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='px-10 md:px-2 lg:px40'>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Home className='min-h-screen'/>
    </main>
    </div>
  )
}

export default App
