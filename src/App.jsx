import React from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CodingProfiles from './components/CodingProfiles'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
