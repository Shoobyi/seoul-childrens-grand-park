import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ZooSection = () => {
  return (
    <Section>
      <VideoBg autoPlay loop muted playsInline src="/videos/동물먹이주기.mp4" />
      <Overlay />
      <Container>
        <Content>
          <EnglishTitle>Urban Safari</EnglishTitle>
          <MainTitle>신비로운 동물들의 세상</MainTitle>
          <Description>
            가까이서 교감하는 동물 친구들, 도심 속에서 만나는 특별한 사파리.
            <DesktopBreak />
            생동감 넘치는 야생의 세계가 여러분을 기다립니다.
          </Description>
          <ViewMoreButton to="/safari-story">자세히 보기</ViewMoreButton>
        </Content>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  height: 80vh;
  color: white;
  overflow: hidden;
  clear: both;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    height: 400px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    margin: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`

const VideoBg = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.6), transparent);
  z-index: 2;
`

const Container = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 600px;
  text-align: left;
`

const EnglishTitle = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: 0.9;
  letter-spacing: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 14px;
    letter-spacing: 1.5px;
  }
`

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.h2};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const Description = styled.p`
  font-size: 20px;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.body};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

const DesktopBreak = styled.br`
  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: none;
  }
`

const ViewMoreButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.typography.mobile.body};
  }
`

export default ZooSection
