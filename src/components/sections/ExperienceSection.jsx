import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Masonry from '../Masonry/Masonry'

const ExperienceSection = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', '동물체험', '자연체험', '문화체험']

  const experiences = [
    {
      id: 0,
      img: '/videos/freepik__a-lively-scene-at-seoul-childrens-grand-park-where__31243.mp4',
      title: '동물 먹이주기 체험',
      subtitle: '사슴, 토끼와 함께하는 시간',
      date: '매일 운영',
      category: '동물체험',
      mediaType: 'video',
      height: 1000
    },
    {
      id: 1,
      img: '/videos/식물 체험.mp4',
      title: '식물 심기 체험',
      subtitle: '계절 꽃과 나무 가꾸기',
      date: '주말 운영',
      category: '자연체험',
      mediaType: 'video',
      height: 850
    },
    {
      id: 2,
      img: '/videos/freepik__a-nature-exploration-tour-taking-place-at-seoul-ch__40242.mp4',
      title: '생태 탐험 투어',
      subtitle: '전문 가이드와 함께',
      date: '주말 10시, 14시',
      category: '자연체험',
      mediaType: 'video',
      height: 1100
    },
    {
      id: 3,
      img: '/videos/freepik__cusersformadesktopseoulchildrensgrandpark__40241.mp4',
      title: '야외 공연 관람',
      subtitle: '다채로운 공연과 이벤트',
      date: '토,일 14시',
      category: '문화체험',
      mediaType: 'video',
      height: 950
    },
    {
      id: 4,
      img: '/videos/Seoul_Walking_Festival_Video_Generated.mp4',
      title: '2025 한마음 걷기대회',
      subtitle: '가족과 함께하는 건강 걷기',
      date: '2025년 5월 예정',
      category: '문화체험',
      mediaType: 'video',
      height: 900
    },
    {
      id: 5,
      img: '/videos/freepik__a-bright-and-realistic-scene-at-seoul-childrens-gr__40243.mp4',
      title: '동물 교감 프로그램',
      subtitle: '동물 행동 관찰',
      date: '평일 15시',
      category: '동물체험',
      mediaType: 'video',
      height: 1050
    },
    {
      id: 6,
      img: '/videos/파충류생태학습.mp4',
      title: '파충류 생태 학습',
      subtitle: '뱀, 도마뱀과의 만남',
      date: '화,목 11시',
      category: '동물체험',
      mediaType: 'video',
      height: 800
    },
    {
      id: 7,
      img: '/videos/새관찰프로그램.mp4',
      title: '새 관찰 프로그램',
      subtitle: '조류의 생태를 배워요',
      date: '매일 13시',
      category: '동물체험',
      mediaType: 'video',
      height: 1150
    },
    {
      id: 8,
      img: '/videos/숲속힐링산책.mp4',
      title: '숲속 힐링 산책',
      subtitle: '자연과 함께하는 명상',
      date: '평일 10시',
      category: '자연체험',
      mediaType: 'video',
      height: 920
    },
    {
      id: 9,
      img: '/videos/곤충탐험대.mp4',
      title: '곤충 탐험대',
      subtitle: '신비한 곤충의 세계',
      date: '토,일 11시',
      category: '자연체험',
      mediaType: 'video',
      height: 1080
    },
    {
      id: 10,
      img: '/videos/전통공예체험.mp4',
      title: '전통 공예 체험',
      subtitle: '한국 전통 문화 배우기',
      date: '주말 10시, 14시',
      category: '문화체험',
      mediaType: 'video',
      height: 870
    },
    {
      id: 11,
      img: '/videos/어린이미술교실.mp4',
      title: '어린이 미술 교실',
      subtitle: '자연을 그려보아요',
      date: '수,금 15시',
      category: '문화체험',
      mediaType: 'video',
      height: 990
    }
  ]

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory)

  // Add url property for Masonry component
  const masonryItems = filteredExperiences.map(exp => ({
    ...exp,
    url: '#' // You can customize this to link to specific pages
  }))

  return (
    <Section $isFiltered={selectedCategory !== 'All'}>
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
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryTab>
          ))}
        </CategoryTabs>

        {/* Desktop: Masonry Grid */}
        <DesktopMasonryWrapper key={selectedCategory}>
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.98}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </DesktopMasonryWrapper>

        {/* Mobile: Horizontal Scroll */}
        <MobileScrollWrapper>
          <MobileScrollContainer>
            {filteredExperiences.map((exp) => (
              <MobileCard key={exp.id}>
                {exp.mediaType === 'video' ? (
                  <MobileVideo
                    src={exp.img}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause()
                      e.target.currentTime = 0
                    }}
                  />
                ) : (
                  <MobileImage src={exp.img} alt={exp.title} />
                )}
                <MobileCardContent>
                  <MobileCardTitle>{exp.title}</MobileCardTitle>
                  <MobileCardSubtitle>{exp.subtitle}</MobileCardSubtitle>
                  <MobileCardDate>{exp.date}</MobileCardDate>
                </MobileCardContent>
              </MobileCard>
            ))}
          </MobileScrollContainer>
        </MobileScrollWrapper>

      </Container>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  padding: 80px 0;
  padding-bottom: ${({ $isFiltered }) => $isFiltered ? '600px' : '1500px'};
  background: transparent;
  color: #2d3d2d;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 40px 0;
    padding-bottom: ${({ $isFiltered }) => $isFiltered ? '40px' : '60px'};
  }
`

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const EnglishTitle = styled.div`
  font-size: 18px;
  color: #5a6a5a;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
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
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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

const DesktopMasonryWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  transition: all 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: none;
  }
`

const MobileScrollWrapper = styled.div`
  display: none;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: block;
  }
`

const MobileScrollContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const MobileCard = styled.div`
  flex: 0 0 280px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`

const MobileVideo = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f0f0f0;
`

const MobileImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f0f0f0;
`

const MobileCardContent = styled.div`
  padding: 16px;
`

const MobileCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a2a1a;
  margin: 0 0 8px 0;
`

const MobileCardSubtitle = styled.p`
  font-size: 14px;
  color: #5a6a5a;
  margin: 0 0 8px 0;
`

const MobileCardDate = styled.p`
  font-size: 13px;
  color: #2ECC71;
  font-weight: 600;
  margin: 0;
`

const ViewMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xxxl};
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

export default ExperienceSection