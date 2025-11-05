import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const FestivalGuide = () => {
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
              <BreadcrumbText>가든 페스티벌</BreadcrumbText>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  페스티벌 가이드
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/festival-guide">페스티벌 가이드</DropdownItem>
                  <DropdownItem as="a" href="#festival-news">페스티벌 뉴스</DropdownItem>
                  <DropdownItem as="a" href="#event-calendar">이벤트 캘린더</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
            </Breadcrumb>
            <PageTitle>페스티벌 가이드</PageTitle>
            <PageSubtitle>축제를 200% 즐기는 완벽 가이드</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            <IntroBox>
              <IntroTitle>가든 페스티벌 완벽 가이드</IntroTitle>
              <IntroText>
                가든 페스티벌을 처음 방문하시나요? 이 가이드에서 축제 일정, 프로그램 안내, 편의시설 정보 등
                방문에 필요한 모든 정보를 확인하실 수 있습니다.
              </IntroText>
            </IntroBox>

            <ScheduleSection>
              <SectionTitle>📅 2025년 축제 일정</SectionTitle>
              <ScheduleGrid>
                <ScheduleCard>
                  <ScheduleMonth>3월 - 5월</ScheduleMonth>
                  <ScheduleTitle>봄 꽃 축제</ScheduleTitle>
                  <ScheduleDetails>
                    <DetailItem>
                      <DetailLabel>주요 프로그램:</DetailLabel>
                      <DetailText>벚꽃 야간 개장, 튤립 포토존, 플라워 아트 클래스</DetailText>
                    </DetailItem>
                    <DetailItem>
                      <DetailLabel>베스트 시즌:</DetailLabel>
                      <DetailText>4월 첫째 주 (벚꽃 만개)</DetailText>
                    </DetailItem>
                  </ScheduleDetails>
                </ScheduleCard>

                <ScheduleCard>
                  <ScheduleMonth>6월 - 8월</ScheduleMonth>
                  <ScheduleTitle>여름 음악 축제</ScheduleTitle>
                  <ScheduleDetails>
                    <DetailItem>
                      <DetailLabel>주요 프로그램:</DetailLabel>
                      <DetailText>라이브 콘서트, 야간 피크닉, 워터 플레이존</DetailText>
                    </DetailItem>
                    <DetailItem>
                      <DetailLabel>베스트 시즌:</DetailLabel>
                      <DetailText>7월 셋째 주 (메인 콘서트)</DetailText>
                    </DetailItem>
                  </ScheduleDetails>
                </ScheduleCard>

                <ScheduleCard>
                  <ScheduleMonth>9월 - 11월</ScheduleMonth>
                  <ScheduleTitle>가을 수확 축제</ScheduleTitle>
                  <ScheduleDetails>
                    <DetailItem>
                      <DetailLabel>주요 프로그램:</DetailLabel>
                      <DetailText>과일 수확 체험, 단풍 투어, 농산물 장터</DetailText>
                    </DetailItem>
                    <DetailItem>
                      <DetailLabel>베스트 시즌:</DetailLabel>
                      <DetailText>10월 셋째 주 (단풍 절정)</DetailText>
                    </DetailItem>
                  </ScheduleDetails>
                </ScheduleCard>
              </ScheduleGrid>
            </ScheduleSection>

            <ProgramSection>
              <SectionTitle>🎭 일일 프로그램 타임테이블</SectionTitle>
              <TimeTable>
                <TimeSlot>
                  <TimeLabel>10:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>개장 및 환영 공연</ProgramName>
                    <ProgramLocation>메인 스테이지</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
                <TimeSlot>
                  <TimeLabel>11:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>가든 투어 (1회차)</ProgramName>
                    <ProgramLocation>입구 집결</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
                <TimeSlot>
                  <TimeLabel>12:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>런치 타임 음악회</ProgramName>
                    <ProgramLocation>야외 무대</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
                <TimeSlot>
                  <TimeLabel>14:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>체험 프로그램 (꽃 심기, 공예 등)</ProgramName>
                    <ProgramLocation>체험관</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
                <TimeSlot>
                  <TimeLabel>15:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>가든 투어 (2회차)</ProgramName>
                    <ProgramLocation>입구 집결</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
                <TimeSlot>
                  <TimeLabel>17:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>서커스 & 매직쇼</ProgramName>
                    <ProgramLocation>메인 스테이지</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
                <TimeSlot>
                  <TimeLabel>19:00</TimeLabel>
                  <ProgramInfo>
                    <ProgramName>야간 음악 공연 (주말)</ProgramName>
                    <ProgramLocation>메인 스테이지</ProgramLocation>
                  </ProgramInfo>
                </TimeSlot>
              </TimeTable>
            </ProgramSection>

            <FacilitySection>
              <SectionTitle>🏢 편의시설 안내</SectionTitle>
              <FacilityGrid>
                <FacilityCard>
                  <FacilityIcon>🍽️</FacilityIcon>
                  <FacilityTitle>식음료 시설</FacilityTitle>
                  <FacilityList>
                    <FacilityItem>푸드 코트 (6개소)</FacilityItem>
                    <FacilityItem>카페 & 디저트 (4개소)</FacilityItem>
                    <FacilityItem>푸드 트럭존</FacilityItem>
                    <FacilityItem>피크닉 에어리어</FacilityItem>
                  </FacilityList>
                </FacilityCard>

                <FacilityCard>
                  <FacilityIcon>🅿️</FacilityIcon>
                  <FacilityTitle>주차 및 교통</FacilityTitle>
                  <FacilityList>
                    <FacilityItem>주차장 (1,500대)</FacilityItem>
                    <FacilityItem>셔틀버스 운행</FacilityItem>
                    <FacilityItem>지하철 어린이대공원역 3번 출구</FacilityItem>
                    <FacilityItem>자전거 보관소</FacilityItem>
                  </FacilityList>
                </FacilityCard>

                <FacilityCard>
                  <FacilityIcon>🚻</FacilityIcon>
                  <FacilityTitle>편의시설</FacilityTitle>
                  <FacilityList>
                    <FacilityItem>화장실 (15개소)</FacilityItem>
                    <FacilityItem>수유실 (3개소)</FacilityItem>
                    <FacilityItem>휴게소 (8개소)</FacilityItem>
                    <FacilityItem>물품 보관소</FacilityItem>
                  </FacilityList>
                </FacilityCard>

                <FacilityCard>
                  <FacilityIcon>🛍️</FacilityIcon>
                  <FacilityTitle>기념품 & 쇼핑</FacilityTitle>
                  <FacilityList>
                    <FacilityItem>기념품 샵 (3개소)</FacilityItem>
                    <FacilityItem>플라워 마켓</FacilityItem>
                    <FacilityItem>아트 마켓</FacilityItem>
                    <FacilityItem>농산물 직거래장</FacilityItem>
                  </FacilityList>
                </FacilityCard>
              </FacilityGrid>
            </FacilitySection>

            <TipsSection>
              <SectionTitle>💡 방문 꿀팁</SectionTitle>
              <TipsGrid>
                <TipCard>
                  <TipNumber>1</TipNumber>
                  <TipContent>
                    <TipTitle>평일 오전 방문 추천</TipTitle>
                    <TipText>주말보다 평일, 오후보다 오전이 한적하고 여유롭습니다.</TipText>
                  </TipContent>
                </TipCard>

                <TipCard>
                  <TipNumber>2</TipNumber>
                  <TipContent>
                    <TipTitle>미리 예약하세요</TipTitle>
                    <TipText>인기 체험 프로그램은 온라인 사전 예약이 필수입니다.</TipText>
                  </TipContent>
                </TipCard>

                <TipCard>
                  <TipNumber>3</TipNumber>
                  <TipContent>
                    <TipTitle>편한 복장 준비</TipTitle>
                    <TipText>걷기 편한 신발과 날씨에 맞는 복장을 준비하세요.</TipText>
                  </TipContent>
                </TipCard>

                <TipCard>
                  <TipNumber>4</TipNumber>
                  <TipContent>
                    <TipTitle>돗자리 지참</TipTitle>
                    <TipText>피크닉을 즐기시려면 돗자리를 가져오세요.</TipText>
                  </TipContent>
                </TipCard>

                <TipCard>
                  <TipNumber>5</TipNumber>
                  <TipContent>
                    <TipTitle>충분한 물과 간식</TipTitle>
                    <TipText>야외 활동이 많으니 수분 섭취를 잊지 마세요.</TipText>
                  </TipContent>
                </TipCard>

                <TipCard>
                  <TipNumber>6</TipNumber>
                  <TipContent>
                    <TipTitle>카메라 또는 스마트폰</TipTitle>
                    <TipText>포토존이 많으니 카메라를 꼭 챙기세요!</TipText>
                  </TipContent>
                </TipCard>
              </TipsGrid>
            </TipsSection>

            <ContactSection>
              <SectionTitle>📞 문의 및 예약</SectionTitle>
              <ContactGrid>
                <ContactCard>
                  <ContactIcon>📞</ContactIcon>
                  <ContactTitle>전화 문의</ContactTitle>
                  <ContactInfo>02-1234-5678<br />(평일 09:00-18:00)</ContactInfo>
                </ContactCard>
                <ContactCard>
                  <ContactIcon>💻</ContactIcon>
                  <ContactTitle>온라인 예약</ContactTitle>
                  <ContactInfo>홈페이지 또는 모바일앱<br />24시간 예약 가능</ContactInfo>
                </ContactCard>
                <ContactCard>
                  <ContactIcon>✉️</ContactIcon>
                  <ContactTitle>이메일 문의</ContactTitle>
                  <ContactInfo>festival@park.seoul.kr<br />(3일 내 답변)</ContactInfo>
                </ContactCard>
              </ContactGrid>
            </ContactSection>
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

const ScheduleSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ScheduleCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-left: 5px solid #F39C12;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`

const ScheduleMonth = styled.div`
  font-size: 16px;
  color: #F39C12;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ScheduleTitle = styled.h3`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ScheduleDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const DetailItem = styled.div``

const DetailLabel = styled.div`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const DetailText = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  opacity: 0.8;
`

const ProgramSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const TimeTable = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  transition: background 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(243, 156, 18, 0.05);
  }
`

const TimeLabel = styled.div`
  min-width: 80px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #F39C12;
`

const ProgramInfo = styled.div`
  flex: 1;
`

const ProgramName = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ProgramLocation = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  opacity: 0.7;
`

const FacilitySection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const FacilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const FacilityCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`

const FacilityIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const FacilityTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const FacilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const FacilityItem = styled.li`
  font-size: 16px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #F39C12;
    font-weight: bold;
  }
`

const TipsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, rgba(243, 156, 18, 0.05), rgba(249, 220, 92, 0.05));
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const TipCard = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const TipNumber = styled.div`
  min-width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #F39C12, #F9DC5C);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

const TipContent = styled.div`
  flex: 1;
`

const TipTitle = styled.h4`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const TipText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  opacity: 0.8;
`

const ContactSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ContactCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`

const ContactIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ContactTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ContactInfo = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

export default FestivalGuide
