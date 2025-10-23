import React, { useState, useEffect } from 'react'
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
  const [mapVisible, setMapVisible] = useState(false)

  const zooRef = React.useRef(null)
  const botanicalRef = React.useRef(null)
  const amusementRef = React.useRef(null)

  useEffect(() => {
    const handleWelcomeVisible = (e) => {
      setMapVisible(e.detail)
    }
    window.addEventListener('welcomeSectionVisible', handleWelcomeVisible)
    return () => {
      window.removeEventListener('welcomeSectionVisible', handleWelcomeVisible)
    }
  }, [])

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

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
            <StickyMapWrapper>
              <WelcomeSection />
              <div ref={zooRef}>
                <ZooSection />
              </div>
              <FloatingMapContainer $isVisible={mapVisible}>
                <MapImage src="/images/park-map-3d.png" alt="서울어린이대공원 3D 지도" />
                <MapMarker $position={{ top: '35%', left: '40%' }} onClick={() => scrollToSection(zooRef)}>
                  <MarkerDot />
                  <MarkerLabel>어반 사파리</MarkerLabel>
                </MapMarker>
                <MapMarker $position={{ top: '45%', left: '55%' }} onClick={() => scrollToSection(botanicalRef)}>
                  <MarkerDot />
                  <MarkerLabel>그린 가든</MarkerLabel>
                </MapMarker>
                <MapMarker $position={{ top: '60%', left: '50%' }} onClick={() => scrollToSection(amusementRef)}>
                  <MarkerDot />
                  <MarkerLabel>플레이 파크</MarkerLabel>
                </MapMarker>
              </FloatingMapContainer>
              <div ref={botanicalRef}>
                <BotanicalGardenSection />
              </div>
              <div ref={amusementRef}>
                <AmusementParkSection />
              </div>
            </StickyMapWrapper>
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

const StickyMapWrapper = styled.div`
  position: relative;
`

const FloatingMapContainer = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  float: right;
  width: 45%;
  max-width: 600px;
  margin-top: -980px;
  margin-left: ${({ theme }) => theme.spacing.xxl};
  margin-right: calc((100vw - ${({ theme }) => theme.container.maxWidth}) / 2 + ${({ theme }) => theme.spacing.xl});
  margin-bottom: -0px;
  z-index: ${({ $isVisible }) => ($isVisible ? 10 : -1)};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: opacity 0.8s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const MapImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: block;
`

const MapMarker = styled.div`
  position: absolute;
  top: ${({ $position }) => $position.top};
  left: ${({ $position }) => $position.left};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`

const MarkerDot = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.primary.green};
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`

const MarkerLabel = styled.span`
  margin-top: 8px;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`

export default App
