import React from 'react'
import styled from 'styled-components'

const AmusementParkSection = () => {
  return (
    <Section>
      <VideoBg autoPlay loop muted playsInline src="/videos/Children_s_Bumper_Cars_at_Seoul_Park.mp4" />
      <Overlay />
      <Container>
        <Content>
          <EnglishTitle>Play Park</EnglishTitle>
          <MainTitle>짜릿한 즐거움이 가득!</MainTitle>
          <Description>
            온 가족이 함께 즐기는 신나는 놀이기구의 세계.
            웃음과 함성이 끊이지 않는 이곳에서 최고의 하루를 만끽하세요.
          </Description>
          <ViewMoreButton>자세히 보기</ViewMoreButton>
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
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 600px;
  text-align: left;
`

const EnglishTitle = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: 0.9;
  letter-spacing: 2px;
`

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;
`

const ViewMoreButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

export default AmusementParkSection
