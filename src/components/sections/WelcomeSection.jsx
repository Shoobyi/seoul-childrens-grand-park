import React from 'react'
import styled from 'styled-components'

const WelcomeSection = () => {
  return (
    <Section>
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
        <MapContent>
          <MapImage src="/images/park-map-3d.png" alt="서울어린이대공원 3D 지도" />
        </MapContent>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`

const TextContent = styled.div`
  flex: 1;
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.4;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  max-width: 480px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`

const MapContent = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MapImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.large};
`

export default WelcomeSection
