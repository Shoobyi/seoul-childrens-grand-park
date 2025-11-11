import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import MainBanner from '../components/sections/MainBanner'
import WelcomeSection from '../components/sections/WelcomeSection'
import ZooSection from '../components/sections/ZooSection'
import BotanicalGardenSection from '../components/sections/BotanicalGardenSection'
import AmusementParkSection from '../components/sections/AmusementParkSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import NoticeSection from '../components/sections/NoticeSection'

const Home = () => {
  const [mapVisible, setMapVisible] = useState(false)
  const [scrollVelocity, setScrollVelocity] = useState(0)
  const [isMapAtEnd, setIsMapAtEnd] = useState(false)

  const zooRef = React.useRef(null)
  const botanicalRef = React.useRef(null)
  const amusementRef = React.useRef(null)
  const mapWrapperRef = React.useRef(null)
  const lastScrollY = React.useRef(0)
  const lastScrollTime = React.useRef(Date.now())

  useEffect(() => {
    const handleWelcomeVisible = (e) => {
      setMapVisible(e.detail)
    }
    window.addEventListener('welcomeSectionVisible', handleWelcomeVisible)
    return () => {
      window.removeEventListener('welcomeSectionVisible', handleWelcomeVisible)
    }
  }, [])

  useEffect(() => {
    let rafId = null
    const handleScroll = () => {
      const currentTime = Date.now()
      const currentScrollY = window.scrollY
      const timeDelta = currentTime - lastScrollTime.current
      const scrollDelta = currentScrollY - lastScrollY.current

      if (timeDelta > 0) {
        const velocity = Math.abs(scrollDelta / timeDelta)
        setScrollVelocity(Math.min(velocity, 5))
      }

      if (mapWrapperRef.current) {
        const wrapperRect = mapWrapperRef.current.getBoundingClientRect()
        const wrapperBottom = wrapperRect.bottom
        const windowHeight = window.innerHeight

        const isAtEnd = wrapperBottom <= windowHeight && wrapperBottom > windowHeight * 0.5

        if (isAtEnd !== isMapAtEnd) {
          setIsMapAtEnd(isAtEnd)
        }
      }

      lastScrollY.current = currentScrollY
      lastScrollTime.current = currentTime

      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setTimeout(() => setScrollVelocity(0), 150)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isMapAtEnd])

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <Header />
      <OverlappingSections>
        <StickyBannerContainer>
          <MainBanner />
        </StickyBannerContainer>
        <ContentWrapper>
          <StickyMapWrapper ref={mapWrapperRef}>
            <WelcomeSection />
            <div ref={zooRef}>
              <ZooSection />
            </div>
            <FloatingMapContainer $isVisible={mapVisible} $scrollVelocity={scrollVelocity} $isAtEnd={isMapAtEnd}>
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
    </>
  )
}

const OverlappingSections = styled.main`
  margin-top: -100px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    margin-top: -60px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
  }
`

const StickyMapWrapper = styled.div`
  position: relative;
`

const FloatingMapContainer = styled.div`
  position: sticky;
  top: 50%;
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
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 3px solid white;
  will-change: transform;

  transform: translateY(-50%)
    scale(${({ $scrollVelocity, $isAtEnd }) => {
      if ($isAtEnd) return 0.95
      const scaleValue = 1 - ($scrollVelocity * 0.01)
      return Math.max(0.97, Math.min(1, scaleValue))
    }})
    rotateZ(${({ $scrollVelocity, $isAtEnd }) => {
      if ($isAtEnd) return '0deg'
      const rotation = $scrollVelocity * 0.3
      return `${rotation}deg`
    }});

  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;

  box-shadow: ${({ $scrollVelocity, $isAtEnd }) => {
    if ($isAtEnd) {
      return `0 0 0 3px rgba(46, 204, 113, 0.3),
              0 20px 60px rgba(46, 204, 113, 0.2),
              0 0 40px rgba(46, 204, 113, 0.4)`
    }
    const shadowIntensity = 0.25 + ($scrollVelocity * 0.05)
    return `0 ${20 + $scrollVelocity * 5}px ${60 + $scrollVelocity * 10}px rgba(0, 0, 0, ${Math.min(shadowIntensity, 0.4)}), 0 0 0 1px rgba(0, 0, 0, 0.05)`
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  @keyframes mapBounce {
    0%, 100% {
      transform: translateY(-50%) scale(1) rotateZ(0deg);
    }
    50% {
      transform: translateY(-50%) scale(1.02) rotateZ(-1deg);
    }
  }

  @keyframes mapEndAnimation {
    0% {
      transform: translateY(-50%) scale(0.95) rotateZ(0deg);
    }
    10% {
      transform: translateY(-50%) scale(1.05) rotateZ(-2deg);
    }
    20% {
      transform: translateY(-50%) scale(0.98) rotateZ(2deg);
    }
    30% {
      transform: translateY(-50%) scale(1.03) rotateZ(-1deg);
    }
    40% {
      transform: translateY(-50%) scale(0.97) rotateZ(1deg);
    }
    50% {
      transform: translateY(-50%) scale(1.02) rotateZ(0deg);
    }
    60% {
      transform: translateY(-50%) scale(0.98) rotateZ(-0.5deg);
    }
    70% {
      transform: translateY(-50%) scale(1.01) rotateZ(0.5deg);
    }
    80% {
      transform: translateY(-50%) scale(0.99) rotateZ(0deg);
    }
    90% {
      transform: translateY(-50%) scale(1.005) rotateZ(0deg);
    }
    100% {
      transform: translateY(-50%) scale(0.95) rotateZ(0deg);
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.3),
                  0 20px 60px rgba(46, 204, 113, 0.2),
                  0 0 40px rgba(46, 204, 113, 0.4);
    }
    50% {
      box-shadow: 0 0 0 5px rgba(46, 204, 113, 0.5),
                  0 20px 80px rgba(46, 204, 113, 0.3),
                  0 0 60px rgba(46, 204, 113, 0.6);
    }
  }

  animation: ${({ $scrollVelocity, $isAtEnd }) => {
    if ($isAtEnd) {
      return 'mapEndAnimation 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), glowPulse 2s ease-in-out infinite'
    }
    if ($scrollVelocity < 0.1 && $scrollVelocity > 0) {
      return 'mapBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
    return 'none'
  }};
`

const MapImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: block;
`

const MarkerLabel = styled.span`
  margin-top: 10px;
  padding: 6px 14px;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  white-space: nowrap;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme.colors.primary.lightGreen};
  transition: all 0.3s ease;
`

const MarkerDot = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primary.green};
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(46, 204, 113, 0.2);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.green};
    animation: pulse 2s ease-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
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
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.15);
    z-index: 10;
  }

  &:hover ${MarkerLabel} {
    background: ${({ theme }) => theme.colors.primary.green};
    color: white;
    box-shadow: 0 4px 12px rgba(46, 204, 113, 0.4);
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
`

export default Home
