import React from 'react'
import styled from 'styled-components'

const QuickGuide = () => {
  const guides = [
    { title: '입장권 구매', icon: '🎫', color: '#FFF4D6' },
    { title: '그린투어', icon: '🌿', color: '#E0F5F5' },
    { title: '공연안내', icon: '🎭', color: '#FFE4E1' },
    { title: '이용료', icon: '💰', color: '#E6D4F0' },
    { title: '주차장', icon: '🚗', color: '#FFE5CC' },
    { title: '교통/주차 안내', icon: '🚌', color: '#D4F0E6' },
  ]

  return (
    <Section>
      <Container>
        <SectionTitle>빠른 안내</SectionTitle>

        <GuideGrid>
          {guides.map((guide, index) => (
            <GuideCard key={index} $bgColor={guide.color}>
              <IconWrapper>{guide.icon}</IconWrapper>
              <GuideTitle>{guide.title}</GuideTitle>
            </GuideCard>
          ))}
        </GuideGrid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  background: ${({ theme }) => theme.colors.primary.lightGreen}20;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: left;
`

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const GuideCard = styled.div`
  background: ${({ $bgColor }) => $bgColor};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const GuideTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

export default QuickGuide
