import React, { Suspense, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Environment, Loader, Html } from '@react-three/drei'
import ParkMapScene from '../3d/ParkMapScene'

const WelcomeSection = () => {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress
      const scrollDistance = height - windowHeight
      const scrolled = -top

      let progress = scrolled / scrollDistance
      progress = Math.max(0, Math.min(1, progress))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getActiveSection = (progress) => {
    if (progress < 0.2) return 0 // Intro -> White BG
    if (progress < 0.45) return 1 // Zoo -> Zoo Video
    if (progress < 0.7) return 2 // Garden -> Garden Video
    if (progress < 0.95) return 3 // Amusement -> Amusement Video
    return 4 // Outro -> White BG
  }

  const activeIdx = getActiveSection(scrollProgress)

  // Determine which video to show (Only for middle sections)
  const showZoo = activeIdx === 1
  const showGarden = activeIdx === 2
  const showAmusement = activeIdx === 3

  return (
    <SectionWrapper ref={containerRef}>
      <StickyContainer>

        {/* Background Videos */}
        <VideoLayer $active={showZoo}>
          <video autoPlay loop muted playsInline>
            <source src="/videos/동물먹이주기.mp4" type="video/mp4" />
          </video>
        </VideoLayer>

        <VideoLayer $active={showGarden}>
          <video autoPlay loop muted playsInline>
            <source src="/videos/Nature_s_Light_and_Leaf_Dance.mp4" type="video/mp4" />
          </video>
        </VideoLayer>

        <VideoLayer $active={showAmusement}>
          <video autoPlay loop muted playsInline>
            <source src="/videos/Children_s_Bumper_Cars_at_Seoul_Park.mp4" type="video/mp4" />
          </video>
        </VideoLayer>

        {/* Overlay Darkener to make text/3D pop (Only visible when video is active) */}
        <VideoOverlay $active={showZoo || showGarden || showAmusement} />

        {/* 3D Canvas */}
        <Canvas
          shadows
          camera={{ position: [12, 10, 12], fov: 35, near: 0.1, far: 1000 }}
          gl={{ alpha: true }} // Transparent background
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 20, 10]}
            intensity={1.0}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <Environment preset="city" background={false} />

          <Suspense fallback={<Html center>3D 지도 로딩중...</Html>}>
            <ParkMapScene scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>

        {/* Text Overlays */}
        <OverlayContainer>
          <InfoCard $isActive={activeIdx === 0} style={{ top: '20%', left: '10%' }}>
            <Title>환영합니다!</Title>
            <Description>서울어린이대공원의 3D 투어를 시작합니다.<br />스크롤을 내려 공원을 탐험해보세요.</Description>
          </InfoCard>

          <InfoCard $isActive={activeIdx === 1} style={{ top: '60%', right: '10%' }}>
            <Title>어반 사파리</Title>
            <Description>도심 속에서 만나는 야생의 친구들.<br />사자, 호랑이, 코끼리를 만나보세요.</Description>
          </InfoCard>

          <InfoCard $isActive={activeIdx === 2} style={{ top: '20%', left: '10%' }}>
            <Title>그린 가든</Title>
            <Description>사계절 푸른 식물원.<br />힐링이 필요할 때 찾아오세요.</Description>
          </InfoCard>

          <InfoCard $isActive={activeIdx === 3} style={{ top: '60%', right: '10%' }}>
            <Title>플레이 파크</Title>
            <Description>신나는 놀이기구와 웃음소리!<br />온 가족이 함께 즐기는 놀이공원입니다.</Description>
          </InfoCard>

          <InfoCard $isActive={activeIdx === 4} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Title>지금 바로 방문하세요</Title>
            <Description>더 많은 즐거움이 기다리고 있습니다.</Description>
          </InfoCard>
        </OverlayContainer>

      </StickyContainer>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100%;
  height: 500vh;
  position: relative;
  background: #ffffff; /* White default background */
`

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  
  canvas {
    width: 100% !important;
    height: 100% !important;
    outline: none;
    z-index: 10;
  }
`

const VideoLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  pointer-events: none;
`

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  pointer-events: none;
`

const InfoCard = styled.div`
  position: absolute;
  padding: 30px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Lighter shadow for white background */
  border: 1px solid rgba(255, 255, 255, 0.6);
  max-width: 400px;
  width: 90%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: ${({ $isActive }) => ($isActive ? 'translateY(0)' : 'translateY(20px)')};
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};

  &[style*="translate(-50%, -50%)"] {
    transform: ${({ $isActive }) => ($isActive ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)')};
  }
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #2d3d2d;
  margin-bottom: 12px;
  font-family: 'GangwonEdu_OTFBoldA', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #5a6a5a;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export default WelcomeSection
