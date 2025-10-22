import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRefs = useRef([])
  const prevSlideRef = useRef(0)

  const videos = ["/videos/메인배너1.mp4", "/videos/메인배너2.mp4", "/videos/메인배너3.mp4"]

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

      <ContentContainer>
        <LeftContent>
          <SmallText>도심 속 자연</SmallText>
          <MainTitle>
            서울<br />
            어린이대공원
          </MainTitle>
          <Tagline>Closer to Nature—Closer to Funny</Tagline>
        </LeftContent>

        <BottomLeftInfo>
          <InfoText>자연과 체험이 공존하는 특별한 공간에서<br />잊지 못할 추억을 만들어보세요.</InfoText>
        </BottomLeftInfo>

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
`

const SmallText = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: 0.9;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const MainTitle = styled.h1`
  font-size: 50px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`

const Tagline = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  opacity: 0.9;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`

const BottomLeftInfo = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.xl};
  bottom: 100px;
  color: white;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: ${({ theme }) => theme.spacing.md};
    bottom: 120px;
    max-width: 70%;
  }
`

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
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
