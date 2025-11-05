import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const GardenFestival = () => {
  const navigate = useNavigate()

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
              <BreadcrumbCurrent>가든 페스티벌</BreadcrumbCurrent>
            </Breadcrumb>
            <PageTitle>가든 페스티벌</PageTitle>
            <PageSubtitle>자연과 문화가 어우러지는 특별한 축제</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>가든 페스티벌이란?</IntroTitle>
              <IntroText>
                서울어린이대공원 가든 페스티벌은 봄부터 가을까지 계절마다 열리는 특별한 축제입니다.
                다채로운 공연, 체험 프로그램, 그리고 아름다운 정원이 어우러져 방문객들에게 잊지 못할 추억을 선사합니다.
              </IntroText>
            </IntroBox>

            <FestivalGrid>
              <FestivalCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="봄 꽃 축제" />
                </CardImage>
                <CardContent>
                  <CardTag>봄</CardTag>
                  <CardTitle>봄 꽃 축제</CardTitle>
                  <CardPeriod>3월 - 5월</CardPeriod>
                  <CardDescription>
                    벚꽃, 튤립, 진달래가 만개하는 화려한 봄의 축제.
                    꽃길을 걸으며 봄의 낭만을 만끽하고, 다양한 포토존에서 인생샷을 남겨보세요.
                  </CardDescription>
                  <CardHighlights>
                    <HighlightItem>🌸 벚꽃 터널</HighlightItem>
                    <HighlightItem>🌷 튤립 정원</HighlightItem>
                    <HighlightItem>📸 플라워 포토존</HighlightItem>
                  </CardHighlights>
                </CardContent>
              </FestivalCard>

              <FestivalCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="여름 음악 축제" />
                </CardImage>
                <CardContent>
                  <CardTag>여름</CardTag>
                  <CardTitle>여름 음악 축제</CardTitle>
                  <CardPeriod>6월 - 8월</CardPeriod>
                  <CardDescription>
                    시원한 저녁, 푸른 잔디 위에서 펼쳐지는 음악 공연.
                    가족과 친구들과 함께 피크닉을 즐기며 라이브 음악을 감상하세요.
                  </CardDescription>
                  <CardHighlights>
                    <HighlightItem>🎵 라이브 공연</HighlightItem>
                    <HighlightItem>🌙 야간 개장</HighlightItem>
                    <HighlightItem>🎪 푸드 트럭 존</HighlightItem>
                  </CardHighlights>
                </CardContent>
              </FestivalCard>

              <FestivalCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="가을 수확 축제" />
                </CardImage>
                <CardContent>
                  <CardTag>가을</CardTag>
                  <CardTitle>가을 수확 축제</CardTitle>
                  <CardPeriod>9월 - 11월</CardPeriod>
                  <CardDescription>
                    단풍이 물드는 가을, 수확의 기쁨을 나누는 축제.
                    직접 채소와 과일을 수확하고, 전통 농경 문화를 체험해보세요.
                  </CardDescription>
                  <CardHighlights>
                    <HighlightItem>🍎 과일 수확 체험</HighlightItem>
                    <HighlightItem>🍂 단풍 명소</HighlightItem>
                    <HighlightItem>🥕 농산물 직거래 장터</HighlightItem>
                  </CardHighlights>
                </CardContent>
              </FestivalCard>
            </FestivalGrid>

            <SpecialEventSection>
              <SectionTitle>특별 이벤트</SectionTitle>
              <EventGrid>
                <EventCard>
                  <EventIcon>🎪</EventIcon>
                  <EventTitle>서커스 공연</EventTitle>
                  <EventText>전문 서커스단의 환상적인 공연<br />매주 토, 일 14:00 / 17:00</EventText>
                </EventCard>
                <EventCard>
                  <EventIcon>🎨</EventIcon>
                  <EventTitle>아트 마켓</EventTitle>
                  <EventText>독립 아티스트들의 작품 전시 및 판매<br />매월 첫째, 셋째 주말</EventText>
                </EventCard>
                <EventCard>
                  <EventIcon>👨‍🍳</EventIcon>
                  <EventTitle>푸드 페스티벌</EventTitle>
                  <EventText>전국 맛집이 한자리에<br />매월 둘째 주말</EventText>
                </EventCard>
                <EventCard>
                  <EventIcon>🎬</EventIcon>
                  <EventTitle>야외 영화제</EventTitle>
                  <EventText>가족과 함께 보는 명작 영화<br />매주 금, 토 19:00</EventText>
                </EventCard>
              </EventGrid>
            </SpecialEventSection>

            <GuideSection>
              <GuideBanner onClick={() => navigate('/festival-guide')}>
                <GuideContent>
                  <GuideIcon>📖</GuideIcon>
                  <GuideTextArea>
                    <GuideTitle>페스티벌 가이드</GuideTitle>
                    <GuideDescription>축제 일정, 프로그램 안내, 편의시설 정보 등을 확인하세요</GuideDescription>
                  </GuideTextArea>
                  <GuideButton>자세히 보기 →</GuideButton>
                </GuideContent>
              </GuideBanner>
            </GuideSection>

            <VisitInfoSection>
              <VisitInfoTitle>축제 정보</VisitInfoTitle>
              <VisitInfoGrid>
                <VisitInfoCard>
                  <VisitInfoIcon>🎫</VisitInfoIcon>
                  <VisitInfoCardTitle>입장료</VisitInfoCardTitle>
                  <VisitInfoText>공원 입장료에 포함<br />일부 프로그램 별도 요금</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🕒</VisitInfoIcon>
                  <VisitInfoCardTitle>운영시간</VisitInfoCardTitle>
                  <VisitInfoText>평일 10:00 - 19:00<br />주말 10:00 - 21:00</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🎒</VisitInfoIcon>
                  <VisitInfoCardTitle>준비물</VisitInfoCardTitle>
                  <VisitInfoText>돗자리, 간식<br />우산, 모자 등</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>📸</VisitInfoIcon>
                  <VisitInfoCardTitle>포토존</VisitInfoCardTitle>
                  <VisitInfoText>10개 이상의 테마별 포토존<br />인생샷 촬영 스팟</VisitInfoText>
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
  background: linear-gradient(135deg, #F39C12 0%, #F9DC5C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/images/park-map-3d.png') center/cover;
    opacity: 0.2;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(243, 156, 18, 0.9), rgba(249, 220, 92, 0.9));
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
  background: linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(249, 220, 92, 0.1));
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  border: 2px solid rgba(243, 156, 18, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const IntroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #F39C12;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const FestivalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const FestivalCard = styled.article`
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

  ${FestivalCard}:hover & img {
    transform: scale(1.1);
  }
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const CardTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: rgba(243, 156, 18, 0.1);
  color: #F39C12;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const CardPeriod = styled.div`
  font-size: 16px;
  color: #F39C12;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const CardHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const HighlightItem = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const SpecialEventSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const EventCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: #F39C12;
  }
`

const EventIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const EventTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const EventText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const GuideSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const GuideBanner = styled.div`
  background: linear-gradient(135deg, #F39C12 0%, #F9DC5C 100%);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const GuideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`

const GuideIcon = styled.div`
  font-size: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 48px;
  }
`

const GuideTextArea = styled.div`
  flex: 1;
  color: white;
`

const GuideTitle = styled.h3`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const GuideDescription = styled.p`
  font-size: 18px;
  opacity: 0.95;
`

const GuideButton = styled.div`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: white;
  color: #F39C12;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  transition: all 0.3s ease;
  white-space: nowrap;

  ${GuideBanner}:hover & {
    background: rgba(255, 255, 255, 0.9);
    transform: translateX(5px);
  }
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

export default GardenFestival
