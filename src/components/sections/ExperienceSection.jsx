import React, { useState } from 'react'
import styled from 'styled-components'

const ExperienceSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', '동물체험', '자연체험', '문화체험']

  const experiences = [
    {
      image: 'https://via.placeholder.com/400x500?text=동물+먹이주기',
      title: '동물 먹이주기 체험',
      subtitle: '사슴, 토끼와 함께하는 시간',
      date: '매일 운영',
      category: '동물체험'
    },
    {
      image: 'https://via.placeholder.com/400x500?text=식물+심기',
      title: '식물 심기 체험',
      subtitle: '계절 꽃과 나무 가꾸기',
      date: '주말 운영',
      category: '자연체험'
    },
    {
      image: 'https://via.placeholder.com/400x500?text=생태+탐험',
      title: '생태 탐험 투어',
      subtitle: '전문 가이드와 함께',
      date: '주말 10시, 14시',
      category: '자연체험'
    },
    {
      image: 'https://via.placeholder.com/400x500?text=야외+공연',
      title: '야외 공연 관람',
      subtitle: '다채로운 공연과 이벤트',
      date: '토,일 14시',
      category: '문화체험'
    },
    {
      image: 'https://via.placeholder.com/400x500?text=동물+교감',
      title: '동물 교감 프로그램',
      subtitle: '동물 행동 관찰',
      date: '평일 15시',
      category: '동물체험'
    }
  ]

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory)

  const handleScroll = (direction) => {
    const cardWidth = 350
    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - cardWidth))
    } else {
      setScrollPosition(Math.min((filteredExperiences.length - 3) * cardWidth, scrollPosition + cardWidth))
    }
  }

  return (
    <Section>
      <Container>
        <SectionHeader>
          <EnglishTitle>Experience Schedule</EnglishTitle>
          <MainTitle>특별한 체험</MainTitle>
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

        <SliderContainer>
          <SliderWrapper $offset={scrollPosition}>
            {filteredExperiences.map((exp, index) => (
              <ExperienceCard key={index}>
                <CardImage src={exp.image} alt={exp.title} />
                <CardContent>
                  <CardIcon>👤</CardIcon>
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
          <ViewMoreButton>View More</ViewMoreButton>
        </NavigationArea>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  background: #1a1a1a;
  color: white;
`

const Container = styled.div`
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
  color: #999;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 1px;
`

const MainTitle = styled.h2`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const CategoryTab = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ $isActive }) => ($isActive ? 'white' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#1a1a1a' : '#999')};
  border: 1px solid ${({ $isActive }) => ($isActive ? 'white' : '#444')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: white;
    color: #1a1a1a;
    border-color: white;
  }
`

const SliderContainer = styled.div`
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const SliderWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  transition: transform 0.5s ease;
  transform: translateX(-${({ $offset }) => $offset}px);
`

const ExperienceCard = styled.div`
  min-width: 320px;
  background: #2a2a2a;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const CardIcon = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: white;
`

const CardSubtitle = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 12px;
  color: #666;

  svg {
    stroke: #666;
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
  background: transparent;
  border: 1px solid #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: white;
    border-color: white;
    color: #1a1a1a;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

const ViewMoreButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  background: transparent;
  border: 1px solid white;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: ${({ theme }) => theme.spacing.lg};

  &:hover {
    background: white;
    color: #1a1a1a;
  }
`

export default ExperienceSection
