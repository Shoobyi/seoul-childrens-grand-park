import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const IndoorGarden = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedZone, setSelectedZone] = useState(null)

  const zones = [
    {
      id: 'tropical',
      name: '열대식물존',
      image: '/images/열대식물존.jpg',
      description: '열대 지방의 진귀한 식물들이 실내에서 자라도록 조성된 공간입니다. 무성한 열대 우림 속으로 들어가 거대한 야자수와 형형색색의 열대 꽃들을 만나보세요.',
      features: ['열대 지방의 진귀한 식물', '높은 습도와 따뜻한 온도', '다양한 열대 꽃']
    },
    {
      id: 'butterfly',
      name: '꽃과 나비존',
      image: '/images/꽃과나비존.jpg',
      description: '죽은 향나무를 활용한 나비의 안식처입니다. 아름다운 꽃들 사이로 나비가 날아다니는 환상적인 공간을 경험하세요.',
      features: ['나비의 안식처', '다양한 꽃 식물', '자연 생태 체험']
    },
    {
      id: 'scenery',
      name: '진경산수존',
      image: '/images/진경산수존.jpg',
      description: '금강산의 산골짜기를 표현한 조선시대 화풍 작품입니다. 전통 산수화 속으로 들어간 듯한 특별한 경험을 선사합니다.',
      features: ['금강산 폭포 재현', '조선시대 화풍', '전통 정원 예술']
    },
    {
      id: 'succulent',
      name: '다육식물존',
      image: '/images/다육식물존.jpg',
      description: '건조한 환경에서도 잘 견디는 다육식물들의 세계입니다. 다양한 크기와 모양의 다육이들이 독특한 아름다움을 선사합니다.',
      features: ['건조 환경 적응 식물', '138종의 선인장', '독특한 형태와 색상']
    },
    {
      id: 'aerial',
      name: '공중식재관',
      image: '/images/공중식재관.jpg',
      description: '공기정화 및 습도 조절 기능을 가진 공중식물들의 공간입니다. 천장에서 자라는 독특한 식물들의 모습을 감상하세요.',
      features: ['공기정화 식물', '습도 조절 기능', '독특한 생장 방식']
    },
    {
      id: 'hydroponic',
      name: '수경식재관',
      image: '/images/수경식재관.jpg',
      description: '수생식물의 뿌리와 줄기를 관찰할 수 있는 공간입니다. 물속에서 자라는 식물들의 신비로운 모습을 가까이서 만나보세요.',
      features: ['수생식물 관찰', '뿌리 구조 학습', '물속 생태계']
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
              <BreadcrumbText>그린 가든</BreadcrumbText>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  인도어 가든
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/indoor-garden">인도어 가든</DropdownItem>
                  <DropdownItem to="/outdoor-garden">아웃도어 가든</DropdownItem>
                  <DropdownItem as="a" href="#garden-map">가든 맵 & 가이드</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
            </Breadcrumb>
            <PageTitle>인도어 가든</PageTitle>
          </HeroContent>
        </HeroSection>

        <MainContent>
          {/* 소개 및 시설 정보 */}
          <IntroSection>
            <IntroLeft>
              <IntroYear>식물원 2층</IntroYear>
              <IntroMainText>240㎡의 공간<br/>6개 테마로 구성된<br/>실내정원</IntroMainText>
            </IntroLeft>
            <IntroRight>
              <IntroDescription>
                서울어린이대공원 인도어 가든은 식물원 2층에 위치한 특별한 공간입니다.
                240㎡의 공간을 리모델링하여 꽃과 나비, 금강산폭포, 열대식물 등 6개 테마로 구성되어 있습니다.
                휠체어 및 유모차 전용 진출입 경사로가 갖춰져 있어 누구나 편안하게 관람하실 수 있습니다.
              </IntroDescription>
              <IntroStats>
                <IntroStatItem>
                  <IntroStatValue>240㎡</IntroStatValue>
                  <IntroStatLabel>실내정원 면적</IntroStatLabel>
                </IntroStatItem>
                <IntroStatItem>
                  <IntroStatValue>6개</IntroStatValue>
                  <IntroStatLabel>테마 구역</IntroStatLabel>
                </IntroStatItem>
              </IntroStats>
            </IntroRight>
          </IntroSection>

          {/* 6개 테마 구역 소개 */}
          <ZonesShowcase>
            <ZonesOverlay>
              <ZonesTitle>6가지 테마로 구성된</ZonesTitle>
              <ZonesSubtitle>실내정원 구역 안내</ZonesSubtitle>
            </ZonesOverlay>

            <ZonesGrid>
              <ZoneImageCard $position="top-left" onClick={() => setSelectedZone(zones[0])}>
                <ZoneCardImage src="/images/열대식물존.jpg" alt="열대식물존" />
                <ZoneLabel>열대식물존</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="top-center" onClick={() => setSelectedZone(zones[1])}>
                <ZoneCardImage src="/images/꽃과나비존.jpg" alt="꽃과 나비존" />
                <ZoneLabel>꽃과 나비존</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="top-right" onClick={() => setSelectedZone(zones[2])}>
                <ZoneCardImage src="/images/진경산수존.jpg" alt="진경산수존" />
                <ZoneLabel>진경산수존</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="bottom-left" onClick={() => setSelectedZone(zones[3])}>
                <ZoneCardImage src="/images/다육식물존.jpg" alt="다육식물존" />
                <ZoneLabel>다육식물존</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="bottom-center" onClick={() => setSelectedZone(zones[4])}>
                <ZoneCardImage src="/images/공중식재관.jpg" alt="공중식재관" />
                <ZoneLabel>공중식재관</ZoneLabel>
              </ZoneImageCard>
              <ZoneImageCard $position="bottom-right" onClick={() => setSelectedZone(zones[5])}>
                <ZoneCardImage src="/images/수경식재관.jpg" alt="수경식재관" />
                <ZoneLabel>수경식재관</ZoneLabel>
              </ZoneImageCard>
            </ZonesGrid>
          </ZonesShowcase>

          {/* 구역 설명 모달 */}
          {selectedZone && ReactDOM.createPortal(
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
                    <ModalSectionTitle>주요 특징</ModalSectionTitle>
                    <ModalFeatureList>
                      {selectedZone.features.map((feature, idx) => (
                        <ModalFeatureItem key={idx}>• {feature}</ModalFeatureItem>
                      ))}
                    </ModalFeatureList>
                  </ModalSection>
                </ModalContent>
              </Modal>
            </>,
            document.body
          )}
        </MainContent>

        {/* 식물원 이야기 */}
        <PlantStorySection>
          <PlantStoryImageHalf>
            <PlantStoryVideo autoPlay loop muted playsInline>
              <source src="/videos/다육식물.mp4" type="video/mp4" />
            </PlantStoryVideo>
          </PlantStoryImageHalf>
          <PlantStoryContentHalf>
            <PlantStoryLabel>Plant Story</PlantStoryLabel>
            <PlantStoryTitle>다육식물</PlantStoryTitle>
            <PlantStoryDescription>
              다육식물이란 줄기나 잎에 수분을 저장할 수 있도록 적응된 식물로 138종의 선인장과
              <br />
              기타 식물들을 관람할 수 있습니다.
            </PlantStoryDescription>
          </PlantStoryContentHalf>
        </PlantStorySection>

        <PlantStorySection>
          <PlantStoryImageHalf>
            <PlantStoryVideo autoPlay loop muted playsInline>
              <source src="/videos/관엽식물.mp4" type="video/mp4" />
            </PlantStoryVideo>
          </PlantStoryImageHalf>
          <PlantStoryContentHalf>
            <PlantStoryTitle>관엽식물</PlantStoryTitle>
            <PlantStoryDescription>
              관엽식물이란 잎의 색깔 또는 형태의 아름다움을 관상하는 식물로 160여종의 살아 숨쉬는 식물을
              <br />
              새소리를 들으며 이국적인 분위기를 감상할 수 있습니다.
            </PlantStoryDescription>
          </PlantStoryContentHalf>
        </PlantStorySection>

        <PlantStorySection>
          <PlantStoryImageHalf>
            <PlantStoryVideo autoPlay loop muted playsInline>
              <source src="/videos/분재식물.mp4" type="video/mp4" />
            </PlantStoryVideo>
          </PlantStoryImageHalf>
          <PlantStoryContentHalf>
            <PlantStoryTitle>분재</PlantStoryTitle>
            <PlantStoryDescription>
              분재란 화분에 심은 나무의 가지와 줄기를 다듬어 노수목의 축소판으로 총 49종의 분재가 형태별로
              <br />
              전시되어 있으며 100년 이상 오래되어 세월의 흔적을 느낄 수 있는 분재작품도 감상하실 수 있습니다.
            </PlantStoryDescription>
          </PlantStoryContentHalf>
        </PlantStorySection>

        <PlantStorySection>
          <PlantStoryImageHalf>
            <PlantStoryVideo autoPlay loop muted playsInline>
              <source src="/videos/야생화.mp4" type="video/mp4" />
            </PlantStoryVideo>
          </PlantStoryImageHalf>
          <PlantStoryContentHalf>
            <PlantStoryTitle>야생화</PlantStoryTitle>
            <PlantStoryDescription>
              총 66종의 야생화가 계절별로 전시되어 있어 관람로를 따라 들에 핀 꽃과 풀을 감상하세요.
              <br />
              할미꽃, 수선화, 나리 등 야생화에 담겨져 있는 이야기를 알아 볼까요?
            </PlantStoryDescription>
          </PlantStoryContentHalf>
        </PlantStorySection>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
  overflow-x: hidden;
`

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background-image: url('/images/실내정원.jpg');
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
  font-size: 64px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
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
        return 'grid-column: 3 / 5; grid-row: 1;'
      case 'top-right':
        return 'grid-column: 5 / 7; grid-row: 1;'
      case 'bottom-left':
        return 'grid-column: 1 / 3; grid-row: 2;'
      case 'bottom-center':
        return 'grid-column: 3 / 5; grid-row: 2;'
      case 'bottom-right':
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


const PlantStorySection = styled.section`
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

const PlantStoryImageHalf = styled.div`
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

const PlantStoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const PlantStoryVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const PlantStoryContentHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 10% 0 ${({ theme }) => theme.spacing.xxxl};
  background: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  }
`

const PlantStoryLabel = styled.p`
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

const PlantStoryTitle = styled.h2`
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

const PlantStoryDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 100000;
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
  z-index: 100001;
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
    max-height: 95vh;
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

export default IndoorGarden
