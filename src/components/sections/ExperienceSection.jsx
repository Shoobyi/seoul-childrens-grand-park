import React, { useState } from 'react'
import styled from 'styled-components'

const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const experiences = [
    {
      number: '01',
      title: '동물 먹이주기 체험',
      description: '사슴, 토끼 등 귀여운 동물들에게 직접 먹이를 주며 교감하는 시간',
      features: [
        '운영 시간',
        '오전 10시 - 오후 4시',
        '참가 비용',
        '5,000원'
      ]
    },
    {
      number: '02',
      title: '식물 심기 체험',
      description: '계절별 식물을 직접 심고 가꾸는 친환경 체험 프로그램',
      features: [
        '운영 시간',
        '오전 11시 - 오후 3시',
        '참가 비용',
        '7,000원'
      ]
    },
    {
      number: '03',
      title: '생태 탐험 투어',
      description: '전문 가이드와 함께 공원의 다양한 생태계를 탐험하는 프로그램',
      features: [
        '운영 시간',
        '오전 10시, 오후 2시',
        '참가 비용',
        '무료'
      ]
    },
    {
      number: '04',
      title: '야외 공연 관람',
      description: '주말마다 펼쳐지는 다채로운 공연과 이벤트',
      features: [
        '운영 시간',
        '토,일 오후 2시',
        '참가 비용',
        '무료'
      ]
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))
  }

  return (
    <Section>
      <Container>
        <SectionHeader>
          <HashTag>#특별한_체험</HashTag>
          <HeaderText>체험을 통해 얻는 즐거운 추억과 자연의 소중함을 배워요</HeaderText>
        </SectionHeader>

        <SliderContainer>
          <SliderWrapper $offset={currentIndex}>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index}>
                <CardNumber>{exp.number}</CardNumber>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.description}</CardDescription>
                <FeatureList>
                  {exp.features.map((feature, idx) => (
                    <FeatureItem key={idx} $isBold={idx % 2 === 0}>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
                <LearnMoreButton>
                  자세히 보기
                  <Arrow>→</Arrow>
                </LearnMoreButton>
              </ExperienceCard>
            ))}
          </SliderWrapper>

          <NavButton $position="left" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
          <NavButton $position="right" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavButton>
        </SliderContainer>

        <Indicators>
          <IndicatorText>{currentIndex + 1} / {experiences.length}</IndicatorText>
          <IndicatorDots>
            {experiences.map((_, index) => (
              <Dot key={index} $isActive={index === currentIndex} onClick={() => setCurrentIndex(index)} />
            ))}
          </IndicatorDots>
        </Indicators>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  background: white;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const HashTag = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const HeaderText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 ${({ theme }) => theme.spacing.xxl};
`

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${({ $offset }) => $offset * 100}%);
`

const ExperienceCard = styled.div`
  min-width: 100%;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
    pointer-events: none;
  }
`

const CardNumber = styled.div`
  font-size: 80px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  line-height: 1;
`

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1;
`

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`

const FeatureItem = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ $isBold, theme }) => $isBold ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular};
`

const LearnMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateX(4px);
  }
`

const Arrow = styled.span`
  transition: transform 0.3s ease;

  ${LearnMoreButton}:hover & {
    transform: translateX(4px);
  }
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => $position === 'left' ? 'left: -60px;' : 'right: -60px;'}
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-50%) scale(1.1);
  }
`

const Indicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const IndicatorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const IndicatorDots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.darkGray : theme.colors.neutral.midGray};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.darkGray};
  }
`

export default ExperienceSection
