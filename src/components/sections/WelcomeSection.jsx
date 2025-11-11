import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const WelcomeSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-400px 0px 0px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // 부모 컴포넌트에 상태 전달
    window.dispatchEvent(new CustomEvent('welcomeSectionVisible', { detail: isVisible }))
  }, [isVisible])

  return (
    <Section ref={sectionRef}>
      <Container>
        <TextContent>
          <Title>
            서울어린이대공원에
            <br />
            오신 것을 환영합니다!
          </Title>
          <Description>
            도심 속 가장 큰 녹지에서 자연과 함께하는 특별한 경험을 만나보세요.
            다양한 동물 친구들과 신나는 놀이기구, 아름다운 식물원이 여러분을
            기다립니다.
          </Description>
        </TextContent>
        <MapPlaceholder />
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 150px 0;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 80px 0;
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const TextContent = styled.div`
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.h2};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.4;
  }
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  max-width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: ${({ theme }) => theme.typography.mobile.body};
    line-height: 1.6;
    max-width: 100%;
  }
`

const MapPlaceholder = styled.div`
  display: none;
`

export default WelcomeSection
