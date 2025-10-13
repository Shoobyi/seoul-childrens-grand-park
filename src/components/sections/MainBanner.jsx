import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRefs = useRef([])

  const videos = [
    '/메인배너1.mp4',
    '/메인배너2.mp4',
    '/메인배너3.mp4',
  ]

  const handleVideoEnd = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
  }

  useEffect(() => {
    // 현재 슬라이드의 비디오만 재생, 나머지는 일시정지
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0
          video.play().catch(err => console.log('Video play error:', err))
        } else {
          video.pause()
        }
      }
    })
  }, [currentSlide])

  return (
    <BannerContainer>
      <VideoSlider>
        {videos.map((video, index) => (
          <VideoSlide key={index} $isActive={index === currentSlide}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              muted
              playsInline
              onEnded={index === currentSlide ? handleVideoEnd : undefined}
            />
          </VideoSlide>
        ))}
      </VideoSlider>

      <BannerOverlay />

      <BannerContent>
        <Title>
          도심 속<br />
          <Highlight>자연과 체험이</Highlight><br />
          공존하는 공간
        </Title>
        <Subtitle>서울어린이대공원에서 특별한 경험을 시작하세요</Subtitle>

        <SearchBar>
          <SearchInput placeholder="어떤 체험을 찾으시나요? (예: 동물 먹이주기, 공연 일정 등)" />
          <SearchButton>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SearchButton>
        </SearchBar>
      </BannerContent>

      <SlideIndicators>
        {videos.map((_, index) => (
          <Indicator
            key={index}
            $isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </SlideIndicators>
    </BannerContainer>
  )
}

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const VideoSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const VideoSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
`

const Title = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.3;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary.yellow};
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.sm};
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.large};
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.midGray};
  }
`

const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: scale(1.05);
  }
`

const SlideIndicators = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 3;
`

const Indicator = styled.button`
  width: ${({ $isActive }) => ($isActive ? '32px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.secondary.yellow : 'rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.yellow};
  }
`

export default MainBanner
