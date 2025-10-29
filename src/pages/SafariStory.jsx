import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const SafariStory = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedZone, setSelectedZone] = useState(null)

  const zones = [
    {
      id: 'beast',
      name: '맹수마을',
      image: '/images/beastvilage.png',
      description: '사자, 호랑이, 표범 등 대형 육식동물들이 서식하는 구역입니다. 야생의 카리스마와 힘을 느낄 수 있는 곳으로, 안전한 관찰 공간에서 맹수들의 생활을 관찰할 수 있습니다.',
      animals: ['사자', '호랑이', '표범', '퓨마'],
      features: ['사육사 먹이주기 체험', '맹수 관찰 데크', '야간 탐방 프로그램']
    },
    {
      id: 'herbivore',
      name: '초식동물마을',
      image: '/images/herbivorevillage.png',
      description: '기린, 얼룩말, 사슴 등 온순한 초식동물들을 만날 수 있는 평화로운 공간입니다. 넓은 초원을 재현하여 동물들이 자유롭게 뛰어노는 모습을 감상할 수 있습니다.',
      animals: ['기린', '얼룩말', '사슴', '캥거루'],
      features: ['먹이주기 체험', '포토존', '초원 산책로']
    },
    {
      id: 'waterbird',
      name: '물새장',
      image: '/images/watercase.png',
      description: '다양한 수생 조류들이 서식하는 습지 생태계를 재현한 공간입니다. 플라밍고, 앵무새, 독수리 등 화려한 새들의 비행을 관찰할 수 있습니다.',
      animals: ['플라밍고', '앵무새', '독수리', '펠리컨'],
      features: ['조류 쇼', '먹이주기 체험', '습지 생태 학습']
    },
    {
      id: 'kidanimal',
      name: '꼬마동물마을',
      image: '/images/kidanimalvilage.png',
      description: '토끼, 기니피그, 병아리 등 작고 귀여운 동물들과 직접 교감할 수 있는 어린이 친화 공간입니다. 안전하게 만지고 먹이를 줄 수 있습니다.',
      animals: ['토끼', '기니피그', '병아리', '염소'],
      features: ['동물 만지기 체험', '먹이주기', '어린이 동물교실']
    },
    {
      id: 'monkey',
      name: '원숭이마을',
      image: '/images/monkeyvillage.png',
      description: '침팬지, 원숭이, 오랑우탄 등 영장류들의 지능적이고 재미있는 행동을 관찰할 수 있는 구역입니다. 나무를 타고 놀이하는 모습이 인상적입니다.',
      animals: ['침팬지', '원숭이', '오랑우탄', '여우원숭이'],
      features: ['영장류 관찰', '지능 놀이 관람', '사육사 토크쇼']
    },
    {
      id: 'tropical',
      name: '열대동물관',
      image: '/images/TropicalAnimalHall.png',
      description: '열대 우림 환경을 재현한 실내 전시관으로, 따뜻한 기후에 사는 다양한 열대 동물들을 사계절 내내 만날 수 있습니다.',
      animals: ['열대 새', '도마뱀', '뱀', '열대 곤충'],
      features: ['실내 열대우림', '파충류 관찰', '야간 관람']
    },
    {
      id: 'sea',
      name: '바다동물관',
      image: '/images/SeaZoo.png',
      description: '물개, 펭귄, 수달 등 수생 포유류들이 물속에서 헤엄치는 모습을 360도로 관찰할 수 있는 수족관입니다. 수중 터널에서의 경험이 특별합니다.',
      animals: ['물개', '펭귄', '수달', '바다사자'],
      features: ['수중 터널', '먹이주기 쇼', '터치풀']
    }
  ]

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
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  어반 사파리
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/safari-story">사파리 스토리</DropdownItem>
                  <DropdownItem as="a" href="#animal-friends">애니멀 프렌즈</DropdownItem>
                  <DropdownItem as="a" href="#safari-map">사파리 맵 & 가이드</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>사파리 스토리</BreadcrumbCurrent>
            </Breadcrumb>
            <PageTitle>사파리 스토리</PageTitle>
          </HeroContent>
        </HeroSection>

        <MainContent>
          {/* 소개 및 연혁 */}
          <IntroSection>
            <IntroLeft>
              <IntroYear>1973년 5월 개장 이래</IntroYear>
              <IntroMainText>동·식물원 15,000㎡ 내<br/>어반 사파리의 보존</IntroMainText>
            </IntroLeft>
            <IntroRight>
              <IntroDescription>
                서울어린이대공원 동물원은 60여종 600여마리의 동물을 보유하고 있으며, 동물과 사람이 모두 행복한 동물원으로 변화하고 있습니다.
                동물먹방LIVE, 동물행동풍부화, 동물학교 프로그램 등을 통하여 생명과 자연의 소중함, 가족의 화목과 시민이 행복함을 느낄 수 있도록 끊임없이 노력하겠습니다.
              </IntroDescription>
              <IntroStats>
                <IntroStatItem>
                  <IntroStatValue>1973.5</IntroStatValue>
                  <IntroStatLabel>개장</IntroStatLabel>
                </IntroStatItem>
                <IntroStatItem>
                  <IntroStatValue>15,000㎡</IntroStatValue>
                  <IntroStatLabel>동·식물원</IntroStatLabel>
                </IntroStatItem>
              </IntroStats>
            </IntroRight>
          </IntroSection>

          {/* 사파리존 소개 */}
          <ZonesShowcase>
            <ZonesOverlay>
              <ZonesTitle>다양한 테마로 구성된</ZonesTitle>
              <ZonesSubtitle>사파리 구역 안내</ZonesSubtitle>
            </ZonesOverlay>

            <ZonesGrid>
              <ZoneImageCard $position="top-left" onClick={() => setSelectedZone(zones[0])}>
                <ZoneCardImage src={zones[0].image} alt={zones[0].name} />
                <ZoneLabel>{zones[0].name}</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="top-center" onClick={() => setSelectedZone(zones[1])}>
                <ZoneCardImage src={zones[1].image} alt={zones[1].name} />
                <ZoneLabel>{zones[1].name}</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="top-right" onClick={() => setSelectedZone(zones[2])}>
                <ZoneCardImage src={zones[2].image} alt={zones[2].name} />
                <ZoneLabel>{zones[2].name}</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="bottom-left" onClick={() => setSelectedZone(zones[3])}>
                <ZoneCardImage src={zones[3].image} alt={zones[3].name} />
                <ZoneLabel>{zones[3].name}</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="bottom-center" onClick={() => setSelectedZone(zones[4])}>
                <ZoneCardImage src={zones[4].image} alt={zones[4].name} />
                <ZoneLabel>{zones[4].name}</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="bottom-right" onClick={() => setSelectedZone(zones[5])}>
                <ZoneCardImage src={zones[5].image} alt={zones[5].name} />
                <ZoneLabel>{zones[5].name}</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="extra" onClick={() => setSelectedZone(zones[6])}>
                <ZoneCardImage src={zones[6].image} alt={zones[6].name} />
                <ZoneLabel>{zones[6].name}</ZoneLabel>
              </ZoneImageCard>
            </ZonesGrid>
          </ZonesShowcase>

          {/* 구역 설명 모달 */}
          {selectedZone && (
            <>
              <ModalOverlay onClick={() => setSelectedZone(null)} />
              <Modal>
                <ModalCloseButton onClick={() => setSelectedZone(null)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </ModalCloseButton>
                <ModalImage src={selectedZone.image} alt={selectedZone.name} />
                <ModalContent>
                  <ModalTitle>{selectedZone.name}</ModalTitle>
                  <ModalDescription>{selectedZone.description}</ModalDescription>

                  <ModalSection>
                    <ModalSectionTitle>주요 동물</ModalSectionTitle>
                    <ModalTagList>
                      {selectedZone.animals.map((animal, idx) => (
                        <ModalTag key={idx}>{animal}</ModalTag>
                      ))}
                    </ModalTagList>
                  </ModalSection>

                  <ModalSection>
                    <ModalSectionTitle>주요 시설 및 체험</ModalSectionTitle>
                    <ModalFeatureList>
                      {selectedZone.features.map((feature, idx) => (
                        <ModalFeatureItem key={idx}>• {feature}</ModalFeatureItem>
                      ))}
                    </ModalFeatureList>
                  </ModalSection>
                </ModalContent>
              </Modal>
            </>
          )}

          {/* 대표 동물 - 사자 */}
          <AnimalSection>
            <AnimalVideoHalf>
              <AnimalVideo autoPlay loop muted playsInline>
                <source src="/videos/Lion_Video_Generation.mp4" type="video/mp4" />
              </AnimalVideo>
            </AnimalVideoHalf>
            <AnimalContentHalf>
              <AnimalLabel>Representative Animal</AnimalLabel>
              <AnimalTitle>사자</AnimalTitle>
              <AnimalDescription>
                카리스마 넘치는 사자 가족의 가장, 레오를 만나보세요.
                <br /><br />
                위엄 있는 모습과 강인한 힘으로 초원을 지배하는 맹수의 왕입니다.
              </AnimalDescription>
            </AnimalContentHalf>
          </AnimalSection>

          {/* 대표 동물 - 수달 */}
          <AnimalSection>
            <AnimalVideoHalf>
              <AnimalVideo autoPlay loop muted playsInline>
                <source src="/videos/메인배너3.mp4" type="video/mp4" />
              </AnimalVideo>
            </AnimalVideoHalf>
            <AnimalContentHalf>
              <AnimalTitle>유라시아 수달</AnimalTitle>
              <AnimalDescription>
                귀여운 외모와 뛰어난 수영 실력을 자랑하는 수달을 만나보세요.
                <br /><br />
                장난기 가득한 성격으로 물속에서 자유롭게 헤엄치며 즐거운 시간을 보냅니다.
              </AnimalDescription>
            </AnimalContentHalf>
          </AnimalSection>

          {/* 대표 동물 - 검은등 자칼 */}
          <AnimalSection>
            <AnimalVideoHalf>
              <AnimalVideo autoPlay loop muted playsInline>
                <source src="/videos/메인배너2.mp4" type="video/mp4" />
              </AnimalVideo>
            </AnimalVideoHalf>
            <AnimalContentHalf>
              <AnimalTitle>검은등 자칼</AnimalTitle>
              <AnimalDescription>
                날렵한 몸매와 뛰어난 순발력을 가진 검은등 자칼을 만나보세요.
                <br /><br />
                영리한 두뇌와 빠른 발걸음으로 초원을 누비는 민첩한 사냥꾼입니다.
              </AnimalDescription>
            </AnimalContentHalf>
          </AnimalSection>
        </MainContent>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
`

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background-image: url('/images/fountain-hero.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 400px;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.7), rgba(39, 174, 96, 0.75));
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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

const BreadcrumbDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const BreadcrumbDropdownButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  font-family: inherit;

  &:hover {
    color: white;
  }
`

const DropdownIcon = styled.span`
  font-size: 10px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
  min-width: 200px;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
`

const DropdownItem = styled(Link)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lightGreen};
    color: ${({ theme }) => theme.colors.primary.green};
  }
`

const PageTitle = styled.h1`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  letter-spacing: -2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`

const PageSubtitle = styled.p`
  font-size: 20px;
  opacity: 0.95;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const MainContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
  }
`

const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroYear = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`

const IntroMainText = styled.h2`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`

const IntroRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const IntroDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const IntroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const IntroStatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const IntroStatValue = styled.p`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const IntroStatLabel = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`

const ZonesShowcase = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const ZonesGrid = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
    height: 400px;
  }
`

const ZoneImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: transform 0.2s ease;

  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return 'grid-column: 1 / 3; grid-row: 1;'
      case 'top-center':
        return 'grid-column: 3 / 4; grid-row: 1;'
      case 'top-right':
        return 'grid-column: 4 / 6; grid-row: 1;'
      case 'bottom-left':
        return 'grid-column: 1 / 2; grid-row: 2;'
      case 'bottom-center':
        return 'grid-column: 2 / 4; grid-row: 2;'
      case 'bottom-right':
        return 'grid-column: 4 / 5; grid-row: 2;'
      case 'extra':
        return 'grid-column: 5 / 7; grid-row: 2;'
      default:
        return ''
    }
  }}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`

const ZoneLabel = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  color: white;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  z-index: 5;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${ZoneImageCard}:hover & {
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    bottom: ${({ theme }) => theme.spacing.md};
    left: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    bottom: ${({ theme }) => theme.spacing.sm};
    left: ${({ theme }) => theme.spacing.sm};
  }
`

const ZoneCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ZoneImageCard}:hover & {
    transform: scale(1.1);
  }
`

const ZonesOverlay = styled.div`
  text-align: left;
`

const ZonesTitle = styled.h2`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const ZonesSubtitle = styled.h3`
  font-size: 42px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  z-index: 10001;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: grid;
  grid-template-columns: 1fr 1fr;
  animation: zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-height: 80vh;
    overflow-y: auto;
  }
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    color: white;
    transform: rotate(90deg);
  }
`

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: scaleIn 0.5s ease-out both;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  overflow-y: auto;
  animation: slideIn 0.5s ease-out 0.2s both;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  animation: fadeInUp 0.6s ease-out 0.3s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const ModalDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  animation: fadeInUp 0.6s ease-out 0.4s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const ModalSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  animation: fadeInUp 0.6s ease-out 0.5s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const ModalSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ModalTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ModalTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  color: ${({ theme }) => theme.colors.primary.green};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const ModalFeatureList = styled.ul`
  list-style: none;
  padding: 0;
`

const ModalFeatureItem = styled.li`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const AnimalSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  height: 45vh;
  min-height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: auto;
  }
`

const AnimalVideoHalf = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
  }
`

const AnimalVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`

const AnimalContentHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 10% 0 ${({ theme }) => theme.spacing.xxxl};
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  }
`

const AnimalLabel = styled.p`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`

const AnimalTitle = styled.h2`
  font-size: 44px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  line-height: 1.3;
  letter-spacing: -1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`

const AnimalDescription = styled.p`
  font-size: 16px;
  line-height: 1.0;
  color: ${({ theme }) => theme.colors.neutral.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`

const AnimalLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const LocationLabel = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const LocationZoneCard = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 150px;
  }
`

const LocationZoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${LocationZoneCard}:hover & {
    transform: scale(1.05);
  }
`

const LocationZoneName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

export default SafariStory
