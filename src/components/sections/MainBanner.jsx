import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRefs = useRef([])
  const prevSlideRef = useRef(0)

  const videos = ["/videos/메인배너1.mp4", "/videos/메인배너2.mp4", "/videos/메인배너3.mp4"]

  const quickGuides = [
    { title: '입장권 구매', icon: '/icons/ticket.svg', color: '#FFF4D6' },
    { title: '행사안내', icon: '/icons/event.svg', color: '#E6D4F0' },
    { title: '교통안내', icon: '/icons/bus.svg', color: '#D4F0E6' },
  ]

  useEffect(() => {
    const handleVideoEnd = () => {
      if (isPlaying) {
        setCurrentSlide(prev => (prev + 1) % videos.length);
      }
    };

    const currentVideo = videoRefs.current[currentSlide];
    const slideChanged = prevSlideRef.current !== currentSlide;

    // 비디오 재생 및 이벤트 리스너 설정
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd); // 이전 리스너 제거
        if (index === currentSlide) {
          // 슬라이드가 변경되었을 때만 처음부터 재생
          if (slideChanged) {
            video.currentTime = 0;
          }
          if (isPlaying) {
            video.play().catch(err => console.log('Video play error:', err));
          } else {
            video.pause();
          }
          video.addEventListener('ended', handleVideoEnd);
        } else {
          video.pause();
        }
      }
    });

    // 이전 슬라이드 저장
    prevSlideRef.current = currentSlide;

    // 클린업
    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentSlide, videos.length, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play().catch(err => console.log('Video play error:', err));
      }
    }
  };

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
              autoPlay
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

        <QuickGuideContainer>
          {quickGuides.map((guide, index) => (
            <QuickGuideCard key={index} $bgColor={guide.color}>
              <GuideIcon src={guide.icon} alt={guide.title} />
              <GuideTitle>{guide.title}</GuideTitle>
            </QuickGuideCard>
          ))}
        </QuickGuideContainer>
      </BannerContent>

      <SlideIndicators>
        <PlayPauseButton onClick={togglePlayPause} title={isPlaying ? '일시정지' : '재생'}>
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
              <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          )}
        </PlayPauseButton>
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

const QuickGuideContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 500px;
  margin: ${({ theme }) => theme.spacing.md} auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const QuickGuideCard = styled.div`
  background: transparent;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const GuideIcon = styled.img`
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
  }
`

const GuideTitle = styled.span`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: white;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`

const SlideIndicators = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
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

const PlayPauseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary.yellow};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.darkYellow};
    transform: scale(1.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`

export default MainBanner
