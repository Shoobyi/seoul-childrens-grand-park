import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ExperienceSection = () => {
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
      image: '/videos/freepik__a-bright-and-realistic-scene-at-seoul-childrens-gr__40243.mp4',
      title: '동물 교감 프로그램',
      subtitle: '동물 행동 관찰',
      date: '평일 15시',
      category: '동물체험',
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
    const cardWidth = 350
    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - cardWidth))
    } else {
      setScrollPosition(Math.min((filteredExperiences.length - 3) * cardWidth, scrollPosition + cardWidth))
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
    setStartX(e.pageX)
    setScrollLeft(scrollPosition)
    setLastX(e.pageX)
    setLastTime(Date.now())
    setVelocity(0)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
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
    const maxScroll = Math.max(0, (filteredExperiences.length - 3) * 350)
    setScrollPosition(Math.max(0, Math.min(maxScroll, newPosition)))
  }

  const handleDragEnd = () => {
    setIsDragging(false)

    // 관성 효과 적용
    let currentVelocity = velocity * 15
    const friction = 0.92

    const applyMomentum = () => {
      if (Math.abs(currentVelocity) < 0.5) {
        momentumRef.current = null
        return
      }

      currentVelocity *= friction
      const maxScroll = Math.max(0, (filteredExperiences.length - 3) * 350)

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
          <NavButton onClick={() => handleScroll('right')} disabled={scrollPosition >= (filteredExperiences.length - 3) * 350}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
          <ViewMoreButton>더보기</ViewMoreButton>
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const EnglishTitle = styled.div`
  font-size: 14px;
  color: #5a6a5a;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 1px;
`

const MainTitle = styled.h2`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #1a2a1a;
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const CategoryTab = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ $isActive }) => ($isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.3)')};
  color: ${({ $isActive }) => ($isActive ? '#1a2a1a' : '#2d3d2d')};
  border: 0.5px solid ${({ $isActive }) => ($isActive ? '#2d3d2d' : 'rgba(45, 61, 45, 0.4)')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #1a2a1a;
    border-color: #6fb03d;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const SliderContainer = styled.div`
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  cursor: url('/icons/scroll.svg') 24 24, grab;

  &:active {
    cursor: url('/icons/scroll.svg') 24 24, grabbing;
  }
`

const SliderWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  transition: ${({ $isDragging }) => ($isDragging ? 'none' : 'transform 0.5s ease')};
  transform: translateX(-${({ $offset }) => $offset}px);
  user-select: none;
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
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: #1a2a1a;
`

const CardSubtitle = styled.p`
  font-size: 14px;
  color: #5a6a5a;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 12px;
  color: #6a7a6a;

  svg {
    stroke: #6a7a6a;
  }
`

const NavigationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #2d3d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(255, 255, 255, 0.9);
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
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #1a2a1a;
    border-color: #2d3d2d;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export default ExperienceSection;