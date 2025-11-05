import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const PlayGround = () => {
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
              <BreadcrumbText>플레이 파크</BreadcrumbText>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  플레이 그라운드
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/adventure-zone">어드벤처 존</DropdownItem>
                  <DropdownItem to="/playground">플레이 그라운드</DropdownItem>
                  <DropdownItem as="a" href="#waterpark">워터파크</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
            </Breadcrumb>
            <PageTitle>플레이 그라운드</PageTitle>
            <PageSubtitle>온 가족이 함께 즐기는 신나는 놀이 공간</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>플레이 그라운드란?</IntroTitle>
              <IntroText>
                서울어린이대공원의 플레이 그라운드는 어린이부터 어른까지 모두가 즐길 수 있는 다양한 놀이기구와
                액티비티가 가득한 공간입니다. 안전하고 즐거운 추억을 만들어보세요.
              </IntroText>
            </IntroBox>

            <RideGrid>
              <RideCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="범퍼카" />
                </CardImage>
                <CardContent>
                  <CardTag>인기</CardTag>
                  <CardTitle>범퍼카</CardTitle>
                  <CardDescription>
                    신나는 충돌의 재미! 가족과 친구들과 함께 즐기는 범퍼카.
                    안전한 환경에서 스릴 넘치는 경험을 즐겨보세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>👥</InfoIcon>
                      <InfoText>1-2인 탑승</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 120cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>5,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </RideCard>

              <RideCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="회전목마" />
                </CardImage>
                <CardContent>
                  <CardTag>가족</CardTag>
                  <CardTitle>회전목마</CardTitle>
                  <CardDescription>
                    클래식한 회전목마의 낭만을 느껴보세요.
                    아름다운 말들과 함께 즐거운 시간을 보낼 수 있습니다.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>👶</InfoIcon>
                      <InfoText>전 연령 탑승 가능</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👨‍👩‍👧</InfoIcon>
                      <InfoText>보호자 동반 필수 (만 5세 이하)</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>4,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </RideCard>

              <RideCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="바이킹" />
                </CardImage>
                <CardContent>
                  <CardTag>스릴</CardTag>
                  <CardTitle>바이킹</CardTitle>
                  <CardDescription>
                    짜릿한 스릴을 원한다면! 좌우로 흔들리는 바이킹을 타고
                    하늘을 나는 듯한 기분을 느껴보세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 130cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⚡</InfoIcon>
                      <InfoText>스릴도: ★★★☆☆</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>6,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </RideCard>

              <RideCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="미니열차" />
                </CardImage>
                <CardContent>
                  <CardTag>관람</CardTag>
                  <CardTitle>미니열차</CardTitle>
                  <CardDescription>
                    공원을 한 바퀴 도는 귀여운 미니열차.
                    편안하게 앉아 공원의 아름다운 풍경을 감상하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🚂</InfoIcon>
                      <InfoText>20분 코스</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👨‍👩‍👧‍👦</InfoIcon>
                      <InfoText>전 연령 탑승 가능</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>3,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </RideCard>

              <RideCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="드롭타워" />
                </CardImage>
                <CardContent>
                  <CardTag>극강</CardTag>
                  <CardTitle>드롭타워</CardTitle>
                  <CardDescription>
                    용감한 도전자들을 위한 드롭타워!
                    하늘 높이 올라갔다가 순식간에 떨어지는 극강의 스릴을 경험하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>📏</InfoIcon>
                      <InfoText>키 140cm 이상</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>⚡</InfoIcon>
                      <InfoText>스릴도: ★★★★★</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>7,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </RideCard>

              <RideCard>
                <CardImage>
                  <img src="/images/park-map-3d.png" alt="관람차" />
                </CardImage>
                <CardContent>
                  <CardTag>낭만</CardTag>
                  <CardTitle>관람차</CardTitle>
                  <CardDescription>
                    공원의 전경을 한눈에 볼 수 있는 관람차.
                    천천히 올라가며 서울의 아름다운 풍경을 감상하세요.
                  </CardDescription>
                  <CardInfo>
                    <InfoItem>
                      <InfoIcon>🎡</InfoIcon>
                      <InfoText>15분 1회전</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>👨‍👩‍👧</InfoIcon>
                      <InfoText>전 연령 탑승 가능</InfoText>
                    </InfoItem>
                    <InfoItem>
                      <InfoIcon>💰</InfoIcon>
                      <InfoText>5,000원</InfoText>
                    </InfoItem>
                  </CardInfo>
                </CardContent>
              </RideCard>
            </RideGrid>

            <TicketSection>
              <TicketTitle>이용권 안내</TicketTitle>
              <TicketGrid>
                <TicketCard>
                  <TicketIcon>🎫</TicketIcon>
                  <TicketCardTitle>단품권</TicketCardTitle>
                  <TicketText>원하는 놀이기구 1회 이용<br />개별 가격 적용</TicketText>
                </TicketCard>
                <TicketCard $highlighted>
                  <TicketIcon>🌟</TicketIcon>
                  <TicketCardTitle>자유이용권</TicketCardTitle>
                  <TicketPrice>25,000원</TicketPrice>
                  <TicketText>전 놀이기구 무제한 이용<br />(1일 기준)</TicketText>
                  <TicketBadge>가장 인기!</TicketBadge>
                </TicketCard>
                <TicketCard>
                  <TicketIcon>👨‍👩‍👧‍👦</TicketIcon>
                  <TicketCardTitle>가족패키지</TicketCardTitle>
                  <TicketPrice>60,000원</TicketPrice>
                  <TicketText>4인 가족 자유이용권<br />(15% 할인 적용)</TicketText>
                </TicketCard>
              </TicketGrid>
            </TicketSection>

            <VisitInfoSection>
              <VisitInfoTitle>이용 안내</VisitInfoTitle>
              <VisitInfoGrid>
                <VisitInfoCard>
                  <VisitInfoIcon>🕒</VisitInfoIcon>
                  <VisitInfoCardTitle>운영시간</VisitInfoCardTitle>
                  <VisitInfoText>평일 10:00 - 18:00<br />주말 10:00 - 20:00<br />월요일 휴무</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>📍</VisitInfoIcon>
                  <VisitInfoCardTitle>위치</VisitInfoCardTitle>
                  <VisitInfoText>공원 중앙부<br />미니열차 탑승장 옆</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>⚠️</VisitInfoIcon>
                  <VisitInfoCardTitle>안전수칙</VisitInfoCardTitle>
                  <VisitInfoText>키 제한 확인 필수<br />임산부 탑승 제한<br />음주 후 탑승 불가</VisitInfoText>
                </VisitInfoCard>
                <VisitInfoCard>
                  <VisitInfoIcon>🌧️</VisitInfoIcon>
                  <VisitInfoCardTitle>우천 시</VisitInfoCardTitle>
                  <VisitInfoText>일부 기구 운영 중단<br />환불 및 날짜 변경 가능</VisitInfoText>
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
  background: linear-gradient(135deg, #E74C3C 0%, #FF6B6B 100%);
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
  background: linear-gradient(135deg, rgba(231, 76, 60, 0.9), rgba(255, 107, 107, 0.9));
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
  background: linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(255, 107, 107, 0.1));
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  border: 2px solid rgba(231, 76, 60, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const IntroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #E74C3C;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const RideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const RideCard = styled.article`
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

  ${RideCard}:hover & img {
    transform: scale(1.1);
  }
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const CardTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: rgba(231, 76, 60, 0.1);
  color: #E74C3C;
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

const TicketSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, rgba(231, 76, 60, 0.05), rgba(255, 107, 107, 0.05));
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`

const TicketTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const TicketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const TicketCard = styled.div`
  position: relative;
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid ${({ $highlighted }) => ($highlighted ? '#E74C3C' : 'transparent')};
  transform: ${({ $highlighted }) => ($highlighted ? 'scale(1.05)' : 'scale(1)')};

  &:hover {
    transform: ${({ $highlighted }) => ($highlighted ? 'scale(1.08)' : 'translateY(-4px)')};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const TicketIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const TicketCardTitle = styled.h3`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const TicketPrice = styled.div`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #E74C3C;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const TicketText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const TicketBadge = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  background: linear-gradient(135deg, #E74C3C, #FF6B6B);
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transform: rotate(10deg);
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

export default PlayGround
