import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const OutdoorGarden = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
              <BreadcrumbText>그린 가든</BreadcrumbText>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  아웃도어 가든
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/indoor-garden">인도어 가든</DropdownItem>
                  <DropdownItem to="/outdoor-garden">아웃도어 가든</DropdownItem>
                  <DropdownItem as="a" href="#garden-map">가든 맵 & 가이드</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
            </Breadcrumb>
            <PageTitle>아웃도어 가든</PageTitle>
            <PageSubtitle>자연과 하나되는 야외 정원</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>아웃도어 가든이란?</IntroTitle>
              <IntroText>
                서울어린이대공원의 아웃도어 가든은 푸른 하늘 아래 펼쳐진 아름다운 야외 정원입니다.
                사계절의 변화를 온몸으로 느끼며 자연과 교감할 수 있는 특별한 공간에서 힐링의 시간을 가져보세요.
              </IntroText>
            </IntroBox>

            <GardenGrid>
              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="사계절 정원" />
                </CardImage>
                <CardContent>
                  <CardTag>사계절</CardTag>
                  <CardTitle>사계절 정원</CardTitle>
                  <CardDescription>
                    봄의 벚꽃, 여름의 수국, 가을의 단풍, 겨울의 동백까지.
                    계절마다 다른 아름다움을 선사하는 정원에서 사계절의 변화를 만끽하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌸</InfoIcon>
                      <InfoText>300여 종의 계절 식물</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>📅</InfoIcon>
                      <InfoText>계절별 특별 전시</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>

              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="장미 정원" />
                </CardImage>
                <CardContent>
                  <CardTag>향기</CardTag>
                  <CardTitle>장미 정원</CardTitle>
                  <CardDescription>
                    다양한 색과 향기의 장미들이 만개하는 아름다운 정원.
                    5월부터 10월까지 형형색색의 장미들이 방문객들을 환영합니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌹</InfoIcon>
                      <InfoText>150여 종의 장미</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>📸</InfoIcon>
                      <InfoText>인생샷 명소</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>

              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="수변 정원" />
                </CardImage>
                <CardContent>
                  <CardTag>힐링</CardTag>
                  <CardTitle>수변 정원</CardTitle>
                  <CardDescription>
                    맑은 연못과 시원한 분수가 어우러진 평화로운 공간.
                    물소리를 들으며 산책하는 힐링의 시간을 경험하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>💧</InfoIcon>
                      <InfoText>연못과 분수대</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🦆</InfoIcon>
                      <InfoText>수생식물 관찰 가능</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>

              <GardenCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="명상의 숲" />
                </CardImage>
                <CardContent>
                  <CardTag>자연</CardTag>
                  <CardTitle>명상의 숲</CardTitle>
                  <CardDescription>
                    울창한 나무 그늘 아래 펼쳐진 고요한 산책로.
                    새소리와 바람소리를 들으며 자연 속에서 마음의 평화를 찾으세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🌳</InfoIcon>
                      <InfoText>100년 이상 된 고목</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>🧘</InfoIcon>
                      <InfoText>명상 공간 제공</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </GardenCard>
            </GardenGrid>

            <ProgramSection>
              <ProgramTitle>체험 프로그램</ProgramTitle>
              <ProgramGrid>
                <ProgramCard>
                  <ProgramIcon>🌻</ProgramIcon>
                  <ProgramCardTitle>정원 가꾸기 체험</ProgramCardTitle>
                  <ProgramText>계절 꽃 심고 가꾸기<br />매주 토요일 10:00<br />참가비: 20,000원</ProgramText>
                </ProgramCard>
                <ProgramCard>
                  <ProgramIcon>🚶</ProgramIcon>
                  <ProgramCardTitle>가든 투어</ProgramCardTitle>
                  <ProgramText>전문 가이드와 함께하는 투어<br />매일 11:00, 15:00<br />무료 (선착순 20명)</ProgramText>
                </ProgramCard>
                <ProgramCard>
                  <ProgramIcon>🎨</ProgramIcon>
                  <ProgramCardTitle>야외 스케치</ProgramCardTitle>
                  <ProgramText>자연을 그리는 시간<br />매주 일요일 14:00<br />참가비: 12,000원</ProgramText>
                </ProgramCard>
                <ProgramCard>
                  <ProgramIcon>🧘</ProgramIcon>
                  <ProgramCardTitle>가든 요가</ProgramCardTitle>
                  <ProgramText>자연 속에서 하는 요가<br />매주 수, 금 07:00<br />참가비: 15,000원</ProgramText>
                </ProgramCard>
              </ProgramGrid>
            </ProgramSection>

            <VisitInfoSection>
              <VisitInfoTitle>이용 안내</VisitInfoTitle>
              <VisitInfoGrid>
                <VisitInfoCard>
                  <VisitInfoIcon>🎫</VisitInfoIcon>
                  <VisitInfoCardTitle>입장료</VisitInfoCardTitle>
                  <VisitInfoText>무료<br />(체험 프로그램 별도)</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🕒</VisitInfoIcon>
                  <VisitInfoCardTitle>운영시간</VisitInfoCardTitle>
                  <VisitInfoText>매일 05:00 - 22:00<br />연중무휴</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>📸</VisitInfoIcon>
                  <VisitInfoCardTitle>사진 촬영</VisitInfoCardTitle>
                  <VisitInfoText>자유롭게 촬영 가능<br />상업적 촬영 사전 신청</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>⚠️</VisitInfoIcon>
                  <VisitInfoCardTitle>주의사항</VisitInfoCardTitle>
                  <VisitInfoText>꽃과 나무 훼손 금지<br />쓰레기는 되가져가기<br />지정된 장소에서만 피크닉</VisitInfoText>
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

const BreadcrumbText = styled.span`
  color: rgba(255, 255, 255, 0.9);
`

const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.6);
`

const BreadcrumbCurrent = styled.span`
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const BreadcrumbDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const BreadcrumbDropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`

const DropdownIcon = styled.span`
  font-size: 10px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 12px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
  padding: ${({ theme }) => theme.spacing.sm};
  min-width: 180px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
`

const DropdownItem = styled(Link)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 0.2s ease;
  font-size: 15px;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lightGreen};
    color: ${({ theme }) => theme.colors.primary.darkGreen};
  }
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

export default OutdoorGarden
