import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ExperienceSection = () => {
  const navigate = useNavigate()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [backgroundVideo, setBackgroundVideo] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [lastX, setLastX] = useState(0)
  const [lastTime, setLastTime] = useState(0)
  const videoRefs = React.useRef([])
  const sliderRef = React.useRef(null)
  const momentumRef = React.useRef(null)

  const categories = ['All', '동물체험', '자연체험', '문화체험']

  const experiences = [
    {
      id: 0,
      image: '/videos/freepik__a-lively-scene-at-seoul-childrens-grand-park-where__31243.mp4',
      title: '동물 먹이주기 체험',
      subtitle: '사슴, 토끼와 함께하는 시간',
      date: '매일 운영',
      category: '동물체험',
      mediaType: 'video'
    },
    {
      id: 1,
      image: '/videos/식물 체험.mp4',
      title: '식물 심기 체험',
      subtitle: '계절 꽃과 나무 가꾸기',
      date: '주말 운영',
      category: '자연체험',
      mediaType: 'video'
    },
    {
      id: 2,
      image: '/videos/freepik__a-nature-exploration-tour-taking-place-at-seoul-ch__40242.mp4',
      title: '생태 탐험 투어',
      subtitle: '전문 가이드와 함께',
      date: '주말 10시, 14시',
      category: '자연체험',
      mediaType: 'video'
    },
    {
      id: 3,
      image: '/videos/freepik__cusersformadesktopseoulchildrensgrandpark__40241.mp4',
      title: '야외 공연 관람',
      subtitle: '다채로운 공연과 이벤트',
      date: '토,일 14시',
      category: '문화체험',
      mediaType: 'video'
    },
    {
      id: 4,
      image: '/videos/Seoul_Walking_Festival_Video_Generated.mp4',
      title: '2025 한마음 걷기대회',
      subtitle: '가족과 함께하는 건강 걷기',
      date: '2025년 5월 예정',
      category: '문화체험',
      mediaType: 'video'
    },
    {
      id: 5,
      image: '/videos/freepik__a-bright-and-realistic-scene-at-seoul-childrens-gr__40243.mp4',
      title: '동물 교감 프로그램',
      subtitle: '동물 행동 관찰',
      date: '평일 15시',
      category: '동물체험',
      mediaType: 'video'
    },
    {
      id: 6,
      image: '/videos/파충류생태학습.mp4',
      title: '파충류 생태 학습',
      subtitle: '뱀, 도마뱀과의 만남',
      date: '화,목 11시',
      category: '동물체험',
      mediaType: 'video'
    },
    {
      id: 7,
      image: '/videos/새관찰프로그램.mp4',
      title: '새 관찰 프로그램',
      subtitle: '조류의 생태를 배워요',
      date: '매일 13시',
      category: '동물체험',
      mediaType: 'video'
    },
    {
      id: 8,
      image: '/videos/숲속힐링산책.mp4',
      title: '숲속 힐링 산책',
      subtitle: '자연과 함께하는 명상',
      date: '평일 10시',
      category: '자연체험',
      mediaType: 'video'
    },
    {
      id: 9,
      image: '/videos/곤충탐험대.mp4',
      title: '곤충 탐험대',
      subtitle: '신비한 곤충의 세계',
      date: '토,일 11시',
      category: '자연체험',
      mediaType: 'video'
    },
    {
      id: 10,
      image: '/videos/전통공예체험.mp4',
      title: '전통 공예 체험',
      subtitle: '한국 전통 문화 배우기',
      date: '주말 10시, 14시',
      category: '문화체험',
      mediaType: 'video'
    },
    {
      id: 11,
      image: '/videos/어린이미술교실.mp4',
      title: '어린이 미술 교실',
      subtitle: '자연을 그려보아요',
      date: '수,금 15시',
      category: '문화체험',
      mediaType: 'video'
    }
  ]

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory)

  useEffect(() => {
    return () => {
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current)
      }
    }
  }, [])

  const handleScroll = (direction) => {
    const isMobile = window.innerWidth <= 430
    const cardWidth = isMobile ? 304 : 350 // 모바일: 280px 카드 + 24px gap

    // 모바일: 전체 슬라이더 너비 - 보이는 영역 너비
    let maxScroll
    if (isMobile && sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth
      const paddingLeft = 16
      const visibleWidth = containerWidth - paddingLeft
      const totalWidth = (filteredExperiences.length * 280) + ((filteredExperiences.length - 1) * 24) + 16 // 카드들 + gap들 + 오른쪽 패딩
      maxScroll = Math.max(0, totalWidth - visibleWidth)
    } else {
      maxScroll = Math.max(0, (filteredExperiences.length - 3) * cardWidth)
    }

    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - cardWidth))
    } else {
      setScrollPosition(Math.min(maxScroll, scrollPosition + cardWidth))
    }
  }

  const handleMouseEnter = (exp) => {
    setHoveredCard(exp.id)
    if (exp.mediaType === 'video') {
      setBackgroundVideo(exp.image)
      if (videoRefs.current[exp.id]) {
        videoRefs.current[exp.id].play()
      }
    }
  }

  const handleMouseLeave = (exp) => {
    setHoveredCard(null)
    if (exp.mediaType === 'video') {
      setBackgroundVideo(null)
      if (videoRefs.current[exp.id]) {
        videoRefs.current[exp.id].pause()
        videoRefs.current[exp.id].currentTime = 0
      }
    }
  }

  const handleDragStart = (e) => {
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current)
    }
    setIsDragging(true)
    const pageX = e.pageX || (e.touches && e.touches[0].pageX)
    setStartX(pageX)
    setScrollLeft(scrollPosition)
    setLastX(pageX)
    setLastTime(Date.now())
    setVelocity(0)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX || (e.touches && e.touches[0].pageX)
    const currentTime = Date.now()
    const timeDelta = currentTime - lastTime

    if (timeDelta > 0) {
      const distance = lastX - x
      setVelocity(distance / timeDelta)
    }

    setLastX(x)
    setLastTime(currentTime)

    const walk = (startX - x) * 0.8
    const newPosition = scrollLeft + walk
    const isMobile = window.innerWidth <= 430

    let maxScroll
    if (isMobile && sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth
      const paddingLeft = 16
      const visibleWidth = containerWidth - paddingLeft
      const totalWidth = (filteredExperiences.length * 280) + ((filteredExperiences.length - 1) * 24) + 16
      maxScroll = Math.max(0, totalWidth - visibleWidth)
    } else {
      maxScroll = Math.max(0, (filteredExperiences.length - 3) * 350)
    }

    setScrollPosition(Math.max(0, Math.min(maxScroll, newPosition)))
  }

  const handleDragEnd = () => {
    setIsDragging(false)

    // 관성 효과 적용
    let currentVelocity = velocity * 15
    const friction = 0.92
    const isMobile = window.innerWidth <= 430

    let maxScroll
    if (isMobile && sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth
      const paddingLeft = 16
      const visibleWidth = containerWidth - paddingLeft
      const totalWidth = (filteredExperiences.length * 280) + ((filteredExperiences.length - 1) * 24) + 16
      maxScroll = Math.max(0, totalWidth - visibleWidth)
    } else {
      maxScroll = Math.max(0, (filteredExperiences.length - 3) * 350)
    }

    const applyMomentum = () => {
      if (Math.abs(currentVelocity) < 0.5) {
        momentumRef.current = null
        return
      }

      currentVelocity *= friction

      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + currentVelocity
        return Math.max(0, Math.min(maxScroll, newPosition))
      })

      momentumRef.current = requestAnimationFrame(applyMomentum)
    }

    if (Math.abs(currentVelocity) > 0.5) {
      applyMomentum()
    }
  }

  return (
    <Section>
      <BackgroundVideoWrapper $isVisible={!!backgroundVideo}>
        {backgroundVideo && (
          <video src={backgroundVideo} autoPlay loop muted playsInline />
        )}
      </BackgroundVideoWrapper>
      <Container>
        <SectionHeader>
          <EnglishTitle>Experience Schedule</EnglishTitle>
          <MainTitle>다양하고 재밌는 체험</MainTitle>
        </SectionHeader>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category}
              $isActive={selectedCategory === category}
              onClick={() => {
                setSelectedCategory(category)
                setScrollPosition(0)
              }}
            >
              {category}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <SliderContainer
          ref={sliderRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <SliderWrapper $offset={scrollPosition} $isDragging={isDragging}>
            {filteredExperiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                $isHovered={hoveredCard === exp.id}
                $hasHoveredCard={hoveredCard !== null}
                onMouseEnter={() => handleMouseEnter(exp)}
                onMouseLeave={() => handleMouseLeave(exp)}
              >
                {exp.mediaType === 'video' ? (
                  <VideoWrapper $isHovered={hoveredCard === exp.id}>
                    <CardVideo
                      ref={(el) => (videoRefs.current[exp.id] = el)}
                      loop
                      muted
                      playsInline
                    >
                      <source src={exp.image} type="video/mp4" />
                    </CardVideo>
                  </VideoWrapper>
                ) : (
                  <VideoWrapper $isHovered={hoveredCard === exp.id}>
                    <CardImage src={exp.image} alt={exp.title} />
                  </VideoWrapper>
                )}
                <CardContent>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardSubtitle>{exp.subtitle}</CardSubtitle>
                  <CardDate>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 1v3M11 1v3M2 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {exp.date}
                  </CardDate>
                </CardContent>
              </ExperienceCard>
            ))}
          </SliderWrapper>
        </SliderContainer>

        <NavigationArea>
          <NavButton onClick={() => handleScroll('left')} disabled={scrollPosition === 0}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
          <NavButton
            onClick={() => handleScroll('right')}
            disabled={scrollPosition >= Math.max(0, (filteredExperiences.length - 3) * 350)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
          <ViewMoreButton onClick={() => navigate('/garden-festival')}>더보기</ViewMoreButton>
        </NavigationArea>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  background: transparent;
  color: #2d3d2d;
  overflow: hidden;
`

const BackgroundVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 0.15 : 0)};
  transition: opacity 0.5s ease-in-out;
  z-index: 1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0;
  }
`

const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const EnglishTitle = styled.div`
  font-size: 18px;
  color: #5a6a5a;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 2px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    letter-spacing: 1.5px;
  }
`

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #1a2a1a;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.h2};
  }
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const CategoryTab = styled.button`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ $isActive }) => ($isActive ? 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? 'white' : '#2d3d2d')};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large} ${({ theme }) => theme.borderRadius.large} 0 0;
  font-size: 17px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: ${({ $isActive }) => ($isActive ? 'none' : 'blur(5px)')};
  box-shadow: ${({ $isActive }) => ($isActive ? '0 -4px 12px rgba(46, 204, 113, 0.3)' : 'none')};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ $isActive }) => ($isActive ? 'linear-gradient(90deg, #2ECC71, #F9DC5C)' : 'transparent')};
    border-radius: 2px 2px 0 0;
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${({ $isActive }) => ($isActive ? 'linear-gradient(135deg, #27AE60 0%, #229954 100%)' : 'rgba(255, 255, 255, 0.15)')};
    color: ${({ $isActive }) => ($isActive ? 'white' : '#1a2a1a')};
    transform: translateY(-3px);

    &::after {
      background: ${({ $isActive }) => ($isActive ? 'linear-gradient(90deg, #2ECC71, #F9DC5C)' : 'rgba(46, 204, 113, 0.5)')};
      height: ${({ $isActive }) => ($isActive ? '4px' : '2px')};
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`

const SliderContainer = styled.div`
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  cursor: url('/icons/scroll.svg') 24 24, grab;

  &:active {
    cursor: url('/icons/scroll.svg') 24 24, grabbing;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    overflow: visible;
    padding-left: ${({ theme }) => theme.spacing.md};
  }
`

const SliderWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  transition: ${({ $isDragging }) => ($isDragging ? 'none' : 'transform 0.5s ease')};
  transform: translateX(-${({ $offset }) => $offset}px);
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`

const ExperienceCard = styled.div`
  min-width: ${({ $isHovered }) => ($isHovered ? '450px' : '320px')};
  max-width: ${({ $isHovered }) => ($isHovered ? '450px' : '320px')};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  cursor: url('/icons/scroll.svg') 24 24, grab;
  transition: all 0.5s ease;
  pointer-events: auto;
  border: 0.5px solid rgba(45, 61, 45, 0.2);

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: rgba(45, 61, 45, 0.4);
  }

  &:active {
    cursor: url('/icons/scroll.svg') 24 24, grabbing;
  }

  img, video {
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    min-width: 280px;
    max-width: 280px;
  }
`

const VideoWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.4);
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: #1a2a1a;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 18px;
  }
`

const CardSubtitle = styled.p`
  font-size: 16px;
  color: #5a6a5a;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
  }
`

const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 14px;
  color: #6a7a6a;

  svg {
    stroke: #6a7a6a;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 12px;
  }
`

const NavigationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: none;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(45, 61, 45, 0.4);
  color: #2d3d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.95);
    border-color: #6fb03d;
    color: #1a2a1a;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

const ViewMoreButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid rgba(45, 61, 45, 0.4);
  color: #2d3d2d;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #1a2a1a;
    border-color: #6fb03d;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  }
`

export default ExperienceSection;