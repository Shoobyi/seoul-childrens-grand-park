import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import MainBanner from './components/sections/MainBanner'
import ExperienceSection from './components/sections/ExperienceSection'
import ParkZoneSection from './components/sections/ParkZoneSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <ExperienceSection />
        <ParkZoneSection />
      </main>
      <Footer />
    </>
  )
}

export default App
