import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import MainBanner from './components/sections/MainBanner'
import WelcomeSection from './components/sections/WelcomeSection'
import ZooSection from './components/sections/ZooSection'
import BotanicalGardenSection from './components/sections/BotanicalGardenSection'
import AmusementParkSection from './components/sections/AmusementParkSection'
import ExperienceSection from './components/sections/ExperienceSection'
import NoticeSection from './components/sections/NoticeSection'
import LoadingScreen from './components/common/LoadingScreen'

function App() {
  const [showLoading, setShowLoading] = useState(false) // 일시적으로 로딩 화면 비활성화
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
        <OverlappingSections>
          <StickyBannerContainer>
            <MainBanner />
          </StickyBannerContainer>
          <ContentWrapper>
            <WelcomeSection />
            <ZooSection />
            <BotanicalGardenSection />
            <AmusementParkSection />
            <ExperienceSection />
            <NoticeSection />
          </ContentWrapper>
        </OverlappingSections>
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
  animation: ${({ $isSliding }) => ($isSliding ? fadeOut : 'none')} 0.6s ease-out forwards;
`

const MainContent = styled.div`
  position: relative;
  opacity: 1;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  animation: ${({ $isSliding }) => ($isSliding ? fadeInScale : 'none')} 0.8s ease-out forwards;
`

const OverlappingSections = styled.main`
  margin-top: -100px;
  position: relative;
`

const StickyBannerContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1;
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.08);
`

export default App
