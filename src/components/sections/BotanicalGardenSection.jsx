import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const BotanicalGardenSection = () => {
  const navigate = useNavigate()
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  const handleVideoError = () => {
    console.error('Video failed to load')
    setVideoError(true)
  }

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  return (
    <Section>
      {!videoError && (
        <BackgroundVideo
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          $isLoaded={videoLoaded}
        >
          <source src="/videos/Nature_s_Light_and_Leaf_Dance.mp4" type="video/mp4" />
        </BackgroundVideo>
      )}
      {videoError && (
        <FallbackBackground />
      )}
      <Overlay />
      <Container>
        <Content>
          <EnglishTitle>Green Garden</EnglishTitle>
          <MainTitle>사계절의 아름다움</MainTitle>
          <Description>
            희귀 식물부터 친숙한 꽃까지, 자연의 다채로운 색으로 가득한 곳.
            <DesktopBreak />
            고요한 산책길을 따라 식물들이 전하는 이야기를 들어보세요.
          </Description>
          <ViewMoreButton onClick={() => navigate('/outdoor-garden')}>자세히 보기</ViewMoreButton>
        </Content>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  height: 80vh;
  color: white;
  overflow: hidden;
  clear: both;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    height: 400px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    margin: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`

const FallbackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
  z-index: 1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.6), transparent);
  z-index: 2;
`

const Container = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 600px;
  text-align: left;
`

const EnglishTitle = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: 0.9;
  letter-spacing: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    letter-spacing: 1.5px;
  }
`

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.h2};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.body};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

const DesktopBreak = styled.br`
  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: none;
  }
`

const ViewMoreButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.typography.mobile.body};
  }
`

export default BotanicalGardenSection
