import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const MyPage = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    // 로그인 확인
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      navigate('/login')
      return
    }

    const email = localStorage.getItem('userEmail') || ''
    setUserEmail(email)
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    navigate('/')
  }

  return (
    <>
      <Header />
      <PageContainer>
        <PageWrapper>
          <PageHeader>
            <ProfileSection>
              <ProfileIcon>👤</ProfileIcon>
              <ProfileInfo>
                <WelcomeText>환영합니다!</WelcomeText>
                <UserEmail>{userEmail}</UserEmail>
              </ProfileInfo>
            </ProfileSection>
            <MembershipSection>
              <MembershipTop>
                <PointDisplay>
                  <PointLabelText>내 포인트</PointLabelText>
                  <PointAmount>1,500</PointAmount>
                  <PointLabel>P</PointLabel>
                </PointDisplay>
              </MembershipTop>
              <MembershipProgress>
                <ProgressBar>
                  <ProgressLine />
                  <LevelDot $active $position={0}>
                    <LevelIcon>🌱</LevelIcon>
                    <LevelTooltip>
                      <TooltipTitle>초보자</TooltipTitle>
                      <TooltipBenefit>• 포인트 1% 적립</TooltipBenefit>
                      <TooltipBenefit>• 월 1회 무료 입장</TooltipBenefit>
                    </LevelTooltip>
                  </LevelDot>
                  <LevelDot $active $position={33}>
                    <LevelIcon>🌟</LevelIcon>
                    <LevelTooltip>
                      <TooltipTitle>탐험가</TooltipTitle>
                      <TooltipBenefit>• 포인트 3% 적립</TooltipBenefit>
                      <TooltipBenefit>• 월 2회 무료 입장</TooltipBenefit>
                      <TooltipBenefit>• 체험 프로그램 10% 할인</TooltipBenefit>
                    </LevelTooltip>
                  </LevelDot>
                  <LevelDot $position={66}>
                    <LevelIcon>🏆</LevelIcon>
                    <LevelTooltip>
                      <TooltipTitle>모험가</TooltipTitle>
                      <TooltipBenefit>• 포인트 5% 적립</TooltipBenefit>
                      <TooltipBenefit>• 월 4회 무료 입장</TooltipBenefit>
                      <TooltipBenefit>• 체험 프로그램 20% 할인</TooltipBenefit>
                      <TooltipBenefit>• 우선 예약 가능</TooltipBenefit>
                    </LevelTooltip>
                  </LevelDot>
                  <LevelDot $position={100}>
                    <LevelIcon>👑</LevelIcon>
                    <LevelTooltip>
                      <TooltipTitle>에코가디언</TooltipTitle>
                      <TooltipBenefit>• 포인트 10% 적립</TooltipBenefit>
                      <TooltipBenefit>• 무제한 무료 입장</TooltipBenefit>
                      <TooltipBenefit>• 체험 프로그램 30% 할인</TooltipBenefit>
                      <TooltipBenefit>• VIP 라운지 이용</TooltipBenefit>
                      <TooltipBenefit>• 특별 이벤트 초대</TooltipBenefit>
                    </LevelTooltip>
                  </LevelDot>
                  <ActiveProgress $width={40} />
                </ProgressBar>
                <LevelInfo>
                  <LevelLabelText>내 등급</LevelLabelText>
                  <CurrentLevel>탐험가</CurrentLevel>
                </LevelInfo>
              </MembershipProgress>
            </MembershipSection>
          </PageHeader>

          <ContentArea>
            <Sidebar>
              <SidebarTitle>내 계정</SidebarTitle>
              <MenuList>
                <MenuItem $active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
                  <MenuIcon>👤</MenuIcon>
                  <MenuText>회원정보</MenuText>
                </MenuItem>
                <MenuItem $active={activeTab === 'reservations'} onClick={() => setActiveTab('reservations')}>
                  <MenuIcon>📅</MenuIcon>
                  <MenuText>예약 및 신청</MenuText>
                </MenuItem>
                <MenuItem $active={activeTab === 'points'} onClick={() => setActiveTab('points')}>
                  <MenuIcon>🎁</MenuIcon>
                  <MenuText>포인트 & 멤버십</MenuText>
                </MenuItem>
                <MenuItem $active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')}>
                  <MenuIcon>🔔</MenuIcon>
                  <MenuText>알림 설정</MenuText>
                </MenuItem>
                <MenuItem $active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')}>
                  <MenuIcon>📸</MenuIcon>
                  <MenuText>나의 추억</MenuText>
                </MenuItem>
                <MenuItem $active={activeTab === 'inquiry'} onClick={() => setActiveTab('inquiry')}>
                  <MenuIcon>💬</MenuIcon>
                  <MenuText>문의 & 피드백</MenuText>
                </MenuItem>
              </MenuList>
              <LogoutButtonSidebar onClick={handleLogout}>
                <MenuIcon>🚪</MenuIcon>
                <MenuText>로그아웃</MenuText>
              </LogoutButtonSidebar>
            </Sidebar>

            <MainContent>
              {activeTab === 'profile' && (
                <Section>
                  <SectionTitle>회원정보 관리</SectionTitle>
                  <InfoCard>
                    <InfoRow>
                      <InfoLabel>이메일</InfoLabel>
                      <InfoValue>{userEmail}</InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>이름</InfoLabel>
                      <InfoValue>
                        <Input type="text" placeholder="이름을 입력하세요" />
                      </InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>전화번호</InfoLabel>
                      <InfoValue>
                        <Input type="tel" placeholder="010-0000-0000" />
                      </InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>보호자 이름</InfoLabel>
                      <InfoValue>
                        <Input type="text" placeholder="보호자 이름 (선택)" />
                      </InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>자녀 이름</InfoLabel>
                      <InfoValue>
                        <Input type="text" placeholder="자녀 이름 (선택)" />
                      </InfoValue>
                    </InfoRow>
                    <ButtonGroup>
                      <SaveButton>저장하기</SaveButton>
                      <CancelButton>취소</CancelButton>
                    </ButtonGroup>
                  </InfoCard>

                  <SectionTitle style={{ marginTop: '40px' }}>비밀번호 변경</SectionTitle>
                  <InfoCard>
                    <InfoRow>
                      <InfoLabel>현재 비밀번호</InfoLabel>
                      <InfoValue>
                        <Input type="password" placeholder="현재 비밀번호" />
                      </InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>새 비밀번호</InfoLabel>
                      <InfoValue>
                        <Input type="password" placeholder="새 비밀번호" />
                      </InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>비밀번호 확인</InfoLabel>
                      <InfoValue>
                        <Input type="password" placeholder="비밀번호 확인" />
                      </InfoValue>
                    </InfoRow>
                    <ButtonGroup>
                      <SaveButton>비밀번호 변경</SaveButton>
                    </ButtonGroup>
                  </InfoCard>
                </Section>
              )}

              {activeTab === 'reservations' && (
                <Section>
                  <SectionTitle>예약 및 신청 관리</SectionTitle>
                  <TabGroup>
                    <TabButton $active>진행 중인 예약</TabButton>
                    <TabButton>지난 참여 내역</TabButton>
                  </TabGroup>
                  <EmptyState>
                    <EmptyIcon>📅</EmptyIcon>
                    <EmptyText>예약 내역이 없습니다</EmptyText>
                    <EmptyDescription>체험 프로그램, 공연, 동물 체험을 예약해보세요!</EmptyDescription>
                  </EmptyState>
                </Section>
              )}

              {activeTab === 'points' && (
                <Section>
                  <SectionTitle>포인트 내역</SectionTitle>
                  <PointHistory>
                    <HistoryItem>
                      <HistoryInfo>
                        <HistoryDate>2025.10.28</HistoryDate>
                        <HistoryDesc>공원 방문 체크인</HistoryDesc>
                      </HistoryInfo>
                      <HistoryPoint>+100 P</HistoryPoint>
                    </HistoryItem>
                    <HistoryItem>
                      <HistoryInfo>
                        <HistoryDate>2025.10.20</HistoryDate>
                        <HistoryDesc>체험 프로그램 참여</HistoryDesc>
                      </HistoryInfo>
                      <HistoryPoint>+500 P</HistoryPoint>
                    </HistoryItem>
                    <HistoryItem>
                      <HistoryInfo>
                        <HistoryDate>2025.10.15</HistoryDate>
                        <HistoryDesc>동물 먹이주기 체험</HistoryDesc>
                      </HistoryInfo>
                      <HistoryPoint>+200 P</HistoryPoint>
                    </HistoryItem>
                    <HistoryItem>
                      <HistoryInfo>
                        <HistoryDate>2025.10.10</HistoryDate>
                        <HistoryDesc>회원 가입 보너스</HistoryDesc>
                      </HistoryInfo>
                      <HistoryPoint>+500 P</HistoryPoint>
                    </HistoryItem>
                    <HistoryItem>
                      <HistoryInfo>
                        <HistoryDate>2025.10.05</HistoryDate>
                        <HistoryDesc>공원 방문 체크인</HistoryDesc>
                      </HistoryInfo>
                      <HistoryPoint>+100 P</HistoryPoint>
                    </HistoryItem>
                    <HistoryItem>
                      <HistoryInfo>
                        <HistoryDate>2025.09.28</HistoryDate>
                        <HistoryDesc>식물원 체험</HistoryDesc>
                      </HistoryInfo>
                      <HistoryPoint>+100 P</HistoryPoint>
                    </HistoryItem>
                  </PointHistory>
                </Section>
              )}

              {activeTab === 'notifications' && (
                <Section>
                  <SectionTitle>알림 설정</SectionTitle>
                  <NotificationCard>
                    <NotificationItem>
                      <NotificationInfo>
                        <NotificationTitle>예약 알림</NotificationTitle>
                        <NotificationDesc>예약 전날 알림을 받습니다</NotificationDesc>
                      </NotificationInfo>
                      <Toggle>
                        <ToggleInput type="checkbox" defaultChecked />
                        <ToggleSlider />
                      </Toggle>
                    </NotificationItem>
                    <NotificationItem>
                      <NotificationInfo>
                        <NotificationTitle>행사 알림</NotificationTitle>
                        <NotificationDesc>새로운 행사 정보를 받습니다</NotificationDesc>
                      </NotificationInfo>
                      <Toggle>
                        <ToggleInput type="checkbox" defaultChecked />
                        <ToggleSlider />
                      </Toggle>
                    </NotificationItem>
                    <NotificationItem>
                      <NotificationInfo>
                        <NotificationTitle>날씨 알림</NotificationTitle>
                        <NotificationDesc>공원 방문 예정일 날씨 정보</NotificationDesc>
                      </NotificationInfo>
                      <Toggle>
                        <ToggleInput type="checkbox" />
                        <ToggleSlider />
                      </Toggle>
                    </NotificationItem>
                  </NotificationCard>
                </Section>
              )}

              {activeTab === 'gallery' && (
                <Section>
                  <SectionTitle>나의 추억</SectionTitle>
                  <GalleryDescription>
                    서울어린이대공원에서의 소중한 순간들을 기록해보세요
                  </GalleryDescription>
                  <EmptyState>
                    <EmptyIcon>📸</EmptyIcon>
                    <EmptyText>아직 추억이 없습니다</EmptyText>
                    <EmptyDescription>공원에서 찍은 사진을 업로드해보세요!</EmptyDescription>
                    <UploadButton>사진 업로드</UploadButton>
                  </EmptyState>
                </Section>
              )}

              {activeTab === 'inquiry' && (
                <Section>
                  <SectionTitle>문의 & 피드백</SectionTitle>
                  <InquiryCard>
                    <InquiryTextarea placeholder="궁금한 점이나 개선사항을 알려주세요..." />
                    <InquiryButtonGroup>
                      <InquirySubmitButton>문의 보내기</InquirySubmitButton>
                    </InquiryButtonGroup>
                  </InquiryCard>
                  <InquiryHistory>
                    <HistoryTitle>문의 내역</HistoryTitle>
                    <EmptyState>
                      <EmptyIcon>💬</EmptyIcon>
                      <EmptyText>문의 내역이 없습니다</EmptyText>
                    </EmptyState>
                  </InquiryHistory>
                </Section>
              )}
            </MainContent>
          </ContentArea>
        </PageWrapper>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: #F8F9FA;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  padding-top: calc(${({ theme }) => theme.spacing.xxxl} + 80px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
    padding-top: calc(${({ theme }) => theme.spacing.xl} + 60px);
  }
`

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const PageHeader = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`

const ProfileIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const WelcomeText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const UserEmail = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

const MembershipSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    width: 100%;
  }
`

const MembershipTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`

const PointDisplay = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.sm};
`

const PointLabelText = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-right: ${({ theme }) => theme.spacing.xs};
`

const PointAmount = styled.span`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const PointLabel = styled.span`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const MembershipProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`

const ProgressLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: ${({ theme }) => theme.colors.neutral.lightGray};
  transform: translateY(-50%);
  border-radius: 2px;
`

const ActiveProgress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${({ $width }) => $width}%;
  height: 4px;
  background: linear-gradient(90deg, #2ECC71 0%, #27AE60 100%);
  transform: translateY(-50%);
  border-radius: 2px;
  transition: width 0.5s ease;
`

const LevelDot = styled.div`
  position: absolute;
  left: ${({ $position }) => $position}%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: ${({ $active, theme }) =>
    $active ? 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' : theme.colors.neutral.lightGray};
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(-50%) scale(1.15);
    z-index: 10;
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-10px);
  }
`

const LevelIcon = styled.span`
  font-size: 20px;
  pointer-events: none;
`

const LevelTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: white;
  }
`

const TooltipTitle = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const TooltipBenefit = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.6;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`

const LevelInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const LevelLabelText = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const CurrentLevel = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.small};
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
  }
`

const SidebarTitle = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary.lightGreen : 'transparent')};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lightGreen};
    transform: translateX(4px);
  }
`

const MenuIcon = styled.span`
  font-size: 20px;
  width: 24px;
  text-align: center;
`

const MenuText = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const LogoutButtonSidebar = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  padding-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    background: #FFE6E6;

    ${MenuText} {
      color: #FF6B6B;
    }
  }
`

const MainContent = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  box-shadow: ${({ theme }) => theme.shadows.small};
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

const Section = styled.div``

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const InfoCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const InfoLabel = styled.label`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const InfoValue = styled.div``

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
    box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.1);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  justify-content: flex-end;
`

const SaveButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const CancelButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.lightGray};
    transform: translateY(-2px);
  }
`

const TabGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const TabButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background: transparent;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary.green : theme.colors.neutral.midGray)};
  border: none;
  border-bottom: 3px solid ${({ $active, theme }) => ($active ? theme.colors.primary.green : 'transparent')};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: -2px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  gap: ${({ theme }) => theme.spacing.md};
`

const EmptyIcon = styled.div`
  font-size: 64px;
  opacity: 0.3;
`

const EmptyText = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const EmptyDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const PointHistory = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`

const HistoryTitle = styled.h4`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};

  &:last-child {
    border-bottom: none;
  }
`

const HistoryInfo = styled.div``

const HistoryDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: 4px;
`

const HistoryDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const HistoryPoint = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary.green};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

const NotificationCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const NotificationInfo = styled.div``

const NotificationTitle = styled.h5`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: 4px;
`

const NotificationDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary.green};
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }
`

const GalleryDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const UploadButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const InquiryCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const InquiryTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
    box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.1);
  }
`

const InquiryButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.lg};
`

const InquirySubmitButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const InquiryHistory = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
`

export default MyPage
