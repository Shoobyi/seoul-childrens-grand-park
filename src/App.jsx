import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import MainBanner from './components/sections/MainBanner'
import ExperienceSection from './components/sections/ExperienceSection'
import ParkZoneSection from './components/sections/ParkZoneSection'
import LoadingScreen from './components/common/LoadingScreen'

function App() {
  const [showLoading, setShowLoading] = useState(true)
  const [isSliding, setIsSliding] = useState(false)

  const handleLoadingComplete = () => {
    setIsSliding(true)
    setTimeout(() => {
      setShowLoading(false)
    }, 700) // 애니메이션이 완전히 끝난 후 제거
  }

  return (
    <>
      {showLoading && (
        <LoadingWrapper $isSliding={isSliding}>
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </LoadingWrapper>
      )}
      <MainContent $isVisible={!showLoading} $isSliding={isSliding}>
        <Header />
        <main>
          <MainBanner />
          <ExperienceSection />
          <ParkZoneSection />
        </main>
        <Footer />
      </MainContent>
    </>
  )
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  animation: ${({ $isSliding }) => $isSliding ? fadeOut : 'none'} 0.6s ease-out forwards;
`

const MainContent = styled.div`
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  pointer-events: ${({ $isVisible }) => $isVisible ? 'auto' : 'none'};
  animation: ${({ $isSliding }) => $isSliding ? fadeInScale : 'none'} 0.8s ease-out forwards;
`

export default App
