import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const IndoorGarden = () => {
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
              <BreadcrumbLink href="#green-garden">그린 가든</BreadcrumbLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>인도어 가든</BreadcrumbCurrent>
            </Breadcrumb>
            <PageTitle>인도어 가든</PageTitle>
            <PageSubtitle>사계절 언제나 푸르른 실내 정원</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>인도어 가든이란?</IntroTitle>
              <IntroText>
                서울어린이대공원의 인도어 가든은 날씨에 관계없이 사계절 내내 아름다운 식물들을 감상할 수 있는 특별한 공간입니다.
                열대 식물부터 선인장, 다육이까지 다양한 식물들이 어우러진 실내 정원에서 자연의 경이로움을 느껴보세요.
              </IntroText>
            </IntroBox>

            <GardenGrid>
              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="열대 우림관" />
                </CardImage>
                <CardContent>
                  <CardTag>열대</CardTag>
                  <CardTitle>열대 우림관</CardTitle>
                  <CardDescription>
                    무성한 열대 우림 속으로 들어가보세요. 높은 습도와 따뜻한 온도가 유지되는 공간에서
                    거대한 야자수, 바나나 나무, 그리고 형형색색의 열대 꽃들을 만날 수 있습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌡️</InfoIcon>
                      <InfoText>온도: 25-30°C, 습도: 70-80%</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🌿</InfoIcon>
                      <InfoText>200여 종의 열대 식물</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>

              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="선인장 정원" />
                </CardImage>
                <CardContent>
                  <CardTag>사막</CardTag>
                  <CardTitle>선인장 정원</CardTitle>
                  <CardDescription>
                    사막의 생존자들을 만나보세요. 다양한 크기와 모양의 선인장과 다육식물들이
                    독특한 아름다움을 선사합니다. 건조한 환경에 적응한 식물들의 놀라운 생명력을 느껴보세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌵</InfoIcon>
                      <InfoText>150여 종의 선인장</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💧</InfoIcon>
                      <InfoText>건조한 환경 유지</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>

              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="난초 정원" />
                </CardImage>
                <CardContent>
                  <CardTag>고급</CardTag>
                  <CardTitle>난초 정원</CardTitle>
                  <CardDescription>
                    우아한 난초의 세계로 초대합니다. 희귀한 종류의 난초부터 화려한 색상의 난초까지,
                    세계 각지에서 온 200여 종의 난초를 감상할 수 있습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌸</InfoIcon>
                      <InfoText>200여 종의 난초</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏰</InfoIcon>
                      <InfoText>최적 관람 시기: 봄</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>

              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="허브 정원" />
                </CardImage>
                <CardContent>
                  <CardTag>향기</CardTag>
                  <CardTitle>허브 정원</CardTitle>
                  <CardDescription>
                    향기로운 허브의 세계를 경험하세요. 라벤더, 로즈마리, 바질 등
                    다양한 허브 식물들의 향기가 가득한 힐링 공간입니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌿</InfoIcon>
                      <InfoText>50여 종의 허브</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>✋</InfoIcon>
                      <InfoText>터치 가든 체험 가능</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>
            </GardenGrid>

            <ProgramSection>
              <ProgramTitle>체험 프로그램</ProgramTitle>
              <ProgramGrid>
                <ProgramCard>
                  <ProgramIcon>🌱</ProgramIcon>
                  <ProgramCardTitle>식물 심기 체험</ProgramCardTitle>
                  <ProgramText>나만의 다육이 화분 만들기<br />매주 토요일 14:00<br />참가비: 15,000원</ProgramText>
                </ProgramCard>
                <ProgramCard>
                  <ProgramIcon>🎨</ProgramIcon>
                  <ProgramCardTitle>식물 드로잉</ProgramCardTitle>
                  <ProgramText>식물을 관찰하고 그리기<br />매주 일요일 11:00<br />참가비: 10,000원</ProgramText>
                </ProgramCard>
                <ProgramCard>
                  <ProgramIcon>👨‍🏫</ProgramIcon>
                  <ProgramCardTitle>가드너 토크</ProgramCardTitle>
                  <ProgramText>전문 정원사와의 대화<br />매주 금요일 15:00<br />무료 (선착순 30명)</ProgramText>
                </ProgramCard>
                <ProgramCard>
                  <ProgramIcon>📸</ProgramIcon>
                  <ProgramCardTitle>가든 포토 투어</ProgramCardTitle>
                  <ProgramText>인생샷 명소 안내<br />매일 10:00, 14:00<br />무료</ProgramText>
                </ProgramCard>
              </ProgramGrid>
            </ProgramSection>

            <VisitInfoSection>
              <VisitInfoTitle>이용 안내</VisitInfoTitle>
              <VisitInfoGrid>
                <VisitInfoCard>
                  <VisitInfoIcon>🎫</VisitInfoIcon>
                  <VisitInfoCardTitle>입장료</VisitInfoCardTitle>
                  <VisitInfoText>성인 3,000원<br />청소년 2,000원<br />어린이 1,000원</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🕒</VisitInfoIcon>
                  <VisitInfoCardTitle>운영시간</VisitInfoCardTitle>
                  <VisitInfoText>매일 09:00 - 18:00<br />마지막 입장 17:30<br />연중무휴</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>📸</VisitInfoIcon>
                  <VisitInfoCardTitle>사진 촬영</VisitInfoCardTitle>
                  <VisitInfoText>촬영 가능<br />플래시 사용 금지<br />삼각대 사용 불가</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>⚠️</VisitInfoIcon>
                  <VisitInfoCardTitle>주의사항</VisitInfoCardTitle>
                  <VisitInfoText>식물 만지지 마세요<br />음식물 반입 금지<br />애완동물 출입 불가</VisitInfoText>
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
  background: linear-gradient(135deg, #27AE60 0%, #2ECC71 100%);
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
  background: linear-gradient(135deg, rgba(39, 174, 96, 0.9), rgba(46, 204, 113, 0.9));
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
  background: linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(168, 230, 207, 0.1));
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

const GardenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const GardenCard = styled.article`
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

  ${GardenCard}:hover & img {
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

const ProgramSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const ProgramTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ProgramCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const ProgramIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ProgramCardTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ProgramText = styled.p`
  font-size: 16px;
  line-height: 1.8;
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

export default IndoorGarden
