import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const QuickLinksSection = () => {
  const navigate = useNavigate()

  const links = [
    {
      icon: '🎫',
      title: '입장권',
      subtitle: '빠른 구매',
      color: '#2ECC71',
      path: '/tickets',
    },
    {
      icon: '📍',
      title: '오시는길',
      subtitle: '위치 안내',
      color: '#F9DC5C',
      path: '/guide',
    },
    {
      icon: '🕐',
      title: '운영시간',
      subtitle: '이용 안내',
      color: '#FF6B6B',
      path: '/guide',
    },
    {
      icon: '🎪',
      title: '이벤트',
      subtitle: '진행중',
      color: '#9B59B6',
      path: '/',
    },
  ]

  return (
    <Section>
      <Container>
        <Title>빠른 메뉴</Title>
        <LinksGrid>
          {links.map((link, index) => (
            <LinkCard
              key={index}
              $color={link.color}
              onClick={() => navigate(link.path)}
            >
              <LinkIcon>{link.icon}</LinkIcon>
              <LinkTitle>{link.title}</LinkTitle>
              <LinkSubtitle>{link.subtitle}</LinkSubtitle>
            </LinkCard>
          ))}
        </LinksGrid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: block;
    padding: ${({ theme }) => `${theme.spacing.xl} 0`};
    background: ${({ theme }) => theme.colors.neutral.lightGray};
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.mobile.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`

const LinkCard = styled.button`
  background: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ $color }) => $color};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`

const LinkIcon = styled.span`
  font-size: 36px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const LinkTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.mobile.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const LinkSubtitle = styled.span`
  font-size: ${({ theme }) => theme.typography.mobile.small};
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

export default QuickLinksSection
