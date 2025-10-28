import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const AdventureZone = () => {
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
              <BreadcrumbLink href="#play-park">플레이 파크</BreadcrumbLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>어드벤처 존</BreadcrumbCurrent>
            </Breadcrumb>
            <PageTitle>어드벤처 존</PageTitle>
            <PageSubtitle>스릴과 모험이 가득한 놀이 공간</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>어드벤처 존이란?</IntroTitle>
              <IntroText>
                서울어린이대공원의 어드벤처 존은 짜릿한 스릴과 재미를 경험할 수 있는 특별한 놀이 공간입니다.
                다양한 놀이기구와 액티비티를 통해 용기와 도전정신을 키우고, 가족과 친구들과 함께 잊지 못할 추억을 만들어보세요.
              </IntroText>
            </IntroBox>

            <AttractionGrid>
              <AttractionCard>
                <CardImage>
                  <img src="/videos/Children_s_Bumper_Cars_at_Seoul_Park.mp4" alt="롤러코스터" />
                </CardImage>
                <CardContent>
                  <CardTag>스릴</CardTag>
                  <CardTitle>드림 롤러코스터</CardTitle>
                  <CardDescription>
                    높이 25m에서 시작하는 짜릿한 롤러코스터! 구불구불한 트랙을 따라
                    최고 속도 60km/h로 달리며 스릴을 만끽하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 제한: 120cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏱️</InfoIcon>
                      <InfoText>소요시간: 약 2분</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👥</InfoIcon>
                      <InfoText>동승 가능: 2인 1조</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </AttractionCard>

              <AttractionCard>
                <CardImage>
                  <img src="/videos/Children_s_Bumper_Cars_at_Seoul_Park.mp4" alt="범퍼카" />
                </CardImage>
                <CardContent>
                  <CardTag>인기</CardTag>
                  <CardTitle>범퍼카 경기장</CardTitle>
                  <CardDescription>
                    친구들과 신나는 범퍼카 대결! 넓은 경기장에서 자유롭게 운전하며
                    짜릿한 충돌의 재미를 느껴보세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 제한: 110cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏱️</InfoIcon>
                      <InfoText>소요시간: 약 5분</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👥</InfoIcon>
                      <InfoText>1인 탑승</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </AttractionCard>

              <AttractionCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="바이킹" />
                </CardImage>
                <CardContent>
                  <CardTag>짜릿</CardTag>
                  <CardTitle>스카이 바이킹</CardTitle>
                  <CardDescription>
                    하늘을 가르는 듯한 느낌! 거대한 바이킹 배를 타고 좌우로 흔들리며
                    무중력의 짜릿함을 경험하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 제한: 130cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏱️</InfoIcon>
                      <InfoText>소요시간: 약 3분</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👥</InfoIcon>
                      <InfoText>최대 40명 탑승</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </AttractionCard>

              <AttractionCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="집라인" />
                </CardImage>
                <CardContent>
                  <CardTag>모험</CardTag>
                  <CardTitle>스카이 집라인</CardTitle>
                  <CardDescription>
                    공중에서 활강하는 짜릿한 경험! 안전장비를 착용하고
                    100m 구간을 시원하게 날아보세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 제한: 140cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏱️</InfoIcon>
                      <InfoText>소요시간: 약 1분</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👥</InfoIcon>
                      <InfoText>1인 탑승</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </AttractionCard>

              <AttractionCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="암벽등반" />
                </CardImage>
                <CardContent>
                  <CardTag>체험</CardTag>
                  <CardTitle>키즈 클라이밍 월</CardTitle>
                  <CardDescription>
                    실내 암벽등반에 도전해보세요! 다양한 난이도의 코스가 준비되어 있어
                    초보자부터 경험자까지 모두 즐길 수 있습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 제한: 없음</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏱️</InfoIcon>
                      <InfoText>체험시간: 30분</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>체험료: 10,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </AttractionCard>

              <AttractionCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="트램폴린" />
                </CardImage>
                <CardContent>
                  <CardTag>신나는</CardTag>
                  <CardTitle>점프 트램폴린</CardTitle>
                  <CardDescription>
                    하늘 높이 뛰어올라요! 안전망이 설치된 대형 트램폴린에서
                    마음껏 뛰어놀며 에너지를 발산하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 제한: 100cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⏱️</InfoIcon>
                      <InfoText>이용시간: 15분</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>이용료: 5,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </AttractionCard>
            </AttractionGrid>

            <SafetySection>
              <SafetyTitle>안전 수칙</SafetyTitle>
              <SafetyGrid>
                <SafetyCard>
                  <SafetyIcon>🎯</SafetyIcon>
                  <SafetyCardTitle>키 제한 준수</SafetyCardTitle>
                  <SafetyText>각 놀이기구의 키 제한을 반드시 지켜주세요</SafetyText>
                </SafetyCard>
                <SafetyCard>
                  <SafetyIcon>🔒</SafetyIcon>
                  <SafetyCardTitle>안전벨트 착용</SafetyCardTitle>
                  <SafetyText>탑승 시 안전벨트를 꼭 착용해주세요</SafetyText>
                </SafetyCard>
                <SafetyCard>
                  <SafetyIcon>👂</SafetyIcon>
                  <SafetyCardTitle>안내 방송 청취</SafetyCardTitle>
                  <SafetyText>직원의 안내와 방송을 잘 들어주세요</SafetyText>
                </SafetyCard>
                <SafetyCard>
                  <SafetyIcon>🚫</SafetyIcon>
                  <SafetyCardTitle>위험 행동 금지</SafetyCardTitle>
                  <SafetyText>장난치거나 위험한 행동을 하지 말아주세요</SafetyText>
                </SafetyCard>
              </SafetyGrid>
            </SafetySection>

            <VisitInfoSection>
              <VisitInfoTitle>이용 안내</VisitInfoTitle>
              <VisitInfoGrid>
                <VisitInfoCard>
                  <VisitInfoIcon>🎫</VisitInfoIcon>
                  <VisitInfoCardTitle>이용권</VisitInfoCardTitle>
                  <VisitInfoText>자유이용권: 35,000원<br />개별권: 5,000원/회<br />어린이 할인 20%</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🕒</VisitInfoIcon>
                  <VisitInfoCardTitle>운영시간</VisitInfoCardTitle>
                  <VisitInfoText>평일 10:00 - 18:00<br />주말 09:00 - 19:00<br />매주 월요일 휴무</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🌦️</VisitInfoIcon>
                  <VisitInfoCardTitle>날씨 안내</VisitInfoCardTitle>
                  <VisitInfoText>우천 시 일부 운영 중단<br />강풍 시 운행 불가<br />실내 놀이기구는 정상 운영</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>📱</VisitInfoIcon>
                  <VisitInfoCardTitle>예약 안내</VisitInfoCardTitle>
                  <VisitInfoText>온라인 예약 가능<br />현장 구매 가능<br />단체 예약 할인</VisitInfoText>
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
  background: linear-gradient(135deg, #F9DC5C 0%, #FF6B6B 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/videos/Children_s_Bumper_Cars_at_Seoul_Park.mp4') center/cover;
    opacity: 0.2;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(249, 220, 92, 0.9), rgba(255, 107, 107, 0.9));
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
  background: linear-gradient(135deg, rgba(249, 220, 92, 0.1), rgba(255, 107, 107, 0.1));
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  border: 2px solid #F9DC5C;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const IntroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #FF6B6B;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const AttractionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const AttractionCard = styled.article`
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

  ${AttractionCard}:hover & img {
    transform: scale(1.1);
  }
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const CardTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: #FFF4CC;
  color: #FF6B6B;
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

const SafetySection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(249, 220, 92, 0.05));
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const SafetyTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: #FF6B6B;
`

const SafetyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const SafetyCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid #F9DC5C;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: #FF6B6B;
  }
`

const SafetyIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SafetyCardTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const SafetyText = styled.p`
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

export default AdventureZone
