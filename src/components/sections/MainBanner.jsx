import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRefs = useRef([])
  const prevSlideRef = useRef(0)

  const videos = [
    { src: "/videos/메인배너1.mp4", title: "동물과 함께하는 시간", subtitle: "다양한 동물 친구들을 만나보세요" },
    { src: "/videos/freepik__a-nature-exploration-tour-taking-place-at-seoul-ch__40242.mp4", title: "자연 속 힐링", subtitle: "도심 속 자연에서 여유를 찾으세요" },
    { src: "/videos/Super_Viking_Ride_Video_Generation.mp4", title: "즐거운 놀이동산", subtitle: "신나는 놀이기구와 함께하는 추억" }
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
              src={video.src}
              muted
              playsInline
              autoPlay
            />
          </VideoSlide>
        ))}
      </VideoSlider>

      <BannerOverlay />

      <ContentContainer>
        <LeftContent>
          <SmallText>도심속 자연</SmallText>
          <MainTitle>{videos[currentSlide].title}</MainTitle>
          <Subtitle>{videos[currentSlide].subtitle}</Subtitle>
        </LeftContent>

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
      </ContentContainer>
    </BannerContainer>
  )
}

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
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
    object-position: center center;

    @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
      object-fit: cover;
      object-position: center 40%;
      transform: scale(1.2);
    }
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

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  height: 100%;
  margin: 0 auto;
  padding: 0;
`

const LeftContent = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.xl};
  top: 50%;
  transform: translateY(-50%);
  color: white;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: ${({ theme }) => theme.spacing.md};
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 85%;
    text-align: center;
  }
`

const SmallText = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.9;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    letter-spacing: 1.5px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`

const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -2px;
  animation: fadeInUp 0.6s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 28px;
    letter-spacing: -1px;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    white-space: nowrap;
  }
`

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: 1.5;
  opacity: 0.9;
  margin-top: ${({ theme }) => theme.spacing.md};
  animation: fadeInUp 0.8s ease-out;
  min-height: 72px;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    min-height: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    line-height: 1.4;
    min-height: auto;
    margin-top: ${({ theme }) => theme.spacing.sm};
    white-space: nowrap;
  }
`

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 100px;
  right: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: ${({ theme }) => theme.spacing.md};
    bottom: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    right: ${({ theme }) => theme.spacing.md};
    bottom: 100px;
    gap: ${({ theme }) => theme.spacing.xs};
  }
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
