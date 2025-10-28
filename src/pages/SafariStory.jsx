import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const SafariStory = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <Breadcrumb>
              <BreadcrumbRouterLink to="/">홈</BreadcrumbRouterLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbLink href="#urban-safari">어반 사파리</BreadcrumbLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>사파리 스토리</BreadcrumbCurrent>
            </Breadcrumb>
            <PageTitle>사파리 스토리</PageTitle>
            <PageSubtitle>도심 속에서 만나는 야생의 이야기</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>어반 사파리란?</IntroTitle>
              <IntroText>
                서울어린이대공원의 어반 사파리는 도심 속에서 다양한 동물들을 만날 수 있는 특별한 공간입니다.
                자연 서식지를 최대한 재현하여 동물들이 편안하게 생활하고, 방문객들은 가까이서 동물들을 관찰하며
                교감할 수 있습니다.
              </IntroText>
            </IntroBox>

            <StoryGrid>
              <StoryCard>
                <CardImage>
                  <img src="/videos/메인배너1.mp4" alt="사자 가족" />
                </CardImage>
                <CardContent>
                  <CardTag>맹수</CardTag>
                  <CardTitle>사자 가족의 일상</CardTitle>
                  <CardDescription>
                    위풍당당한 사자 가족의 모습을 관찰해보세요. 아빠 사자 '레오'와 엄마 사자 '나라',
                    그리고 귀여운 새끼 사자들의 평화로운 일상을 만날 수 있습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📍</InfoIcon>
                      <InfoText>맹수사 구역</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🕐</InfoIcon>
                      <InfoText>먹이주기: 매일 14시</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </StoryCard>

              <StoryCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="기린" />
                </CardImage>
                <CardContent>
                  <CardTag>초식동물</CardTag>
                  <CardTitle>하늘을 향한 기린</CardTitle>
                  <CardDescription>
                    우아한 목선을 자랑하는 기린 '스카이'를 만나보세요. 4미터가 넘는 키로
                    높은 나뭇가지의 잎을 먹는 모습이 인상적입니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📍</InfoIcon>
                      <InfoText>초식동물 구역</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🕐</InfoIcon>
                      <InfoText>먹이주기: 매일 11시, 15시</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </StoryCard>

              <StoryCard>
                <CardImage>
                  <img src="/videos/메인배너1.mp4" alt="원숭이" />
                </CardImage>
                <CardContent>
                  <CardTag>영장류</CardTag>
                  <CardTitle>장난꾸러기 원숭이 친구들</CardTitle>
                  <CardDescription>
                    활발하고 똑똑한 원숭이들의 재미있는 모습을 관찰해보세요.
                    나무를 타고 오르내리며 노는 모습이 마치 서커스를 보는 것 같습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📍</InfoIcon>
                      <InfoText>원숭이섬</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🕐</InfoIcon>
                      <InfoText>먹이주기: 매일 10시, 16시</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </StoryCard>

              <StoryCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="코끼리" />
                </CardImage>
                <CardContent>
                  <CardTag>대형동물</CardTag>
                  <CardTitle>지혜로운 코끼리</CardTitle>
                  <CardDescription>
                    온화하고 지혜로운 코끼리 '점보'를 만나보세요. 긴 코로 물을 마시고
                    몸을 씻는 모습을 가까이서 관찰할 수 있습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📍</InfoIcon>
                      <InfoText>대형동물 구역</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🕐</InfoIcon>
                      <InfoText>먹이주기: 매일 13시</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </StoryCard>
            </StoryGrid>

            <VisitInfoSection>
              <VisitInfoTitle>방문 안내</VisitInfoTitle>
              <VisitInfoGrid>
                <VisitInfoCard>
                  <VisitInfoIcon>🎫</VisitInfoIcon>
                  <VisitInfoCardTitle>입장료</VisitInfoCardTitle>
                  <VisitInfoText>성인 5,000원<br />청소년 3,000원<br />어린이 2,000원</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🕒</VisitInfoIcon>
                  <VisitInfoCardTitle>운영시간</VisitInfoCardTitle>
                  <VisitInfoText>하절기 09:00 - 19:00<br />동절기 09:00 - 18:00<br />연중무휴</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>📸</VisitInfoIcon>
                  <VisitInfoCardTitle>사진 촬영</VisitInfoCardTitle>
                  <VisitInfoText>촬영 가능<br />플래시 사용 금지<br />동물 보호를 위해 조용히</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🍼</VisitInfoIcon>
                  <VisitInfoCardTitle>먹이주기 체험</VisitInfoCardTitle>
                  <VisitInfoText>일부 동물 가능<br />체험료 별도<br />현장 구매</VisitInfoText>
                </VisitInfoCard>
              </VisitInfoGrid>
            </VisitInfoSection>
          </Container>
        </ContentSection>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.neutral.white};
`

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/videos/메인배너1.mp4') center/cover;
    opacity: 0.2;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.9), rgba(39, 174, 96, 0.9));
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 16px;
`

const BreadcrumbLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const BreadcrumbRouterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.6);
`

const BreadcrumbCurrent = styled.span`
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const PageTitle = styled.h1`
  font-size: 52px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`

const PageSubtitle = styled.p`
  font-size: 22px;
  opacity: 0.95;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`

const ContentSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const IntroBox = styled.div`
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(168, 230, 207, 0.1));
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  border: 2px solid ${({ theme }) => theme.colors.primary.lightGreen};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const IntroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const StoryCard = styled.article`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.neutral.lightGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${StoryCard}:hover & img {
    transform: scale(1.1);
  }
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const CardTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  color: ${({ theme }) => theme.colors.primary.darkGreen};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const InfoIcon = styled.span`
  font-size: 18px;
`

const InfoText = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const VisitInfoSection = styled.div`
  background: ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const VisitInfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const VisitInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const VisitInfoCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const VisitInfoIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const VisitInfoCardTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const VisitInfoText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

export default SafariStory
