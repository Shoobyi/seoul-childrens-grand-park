import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const OutdoorGarden = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const scrollContainerRef = useRef(null)
  const videoRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleImageClick = (imageSrc) => {
    if (!isDragging) {
      setSelectedImage(imageSrc)
    }
  }

  const zones = [
    {
      id: 'ecological-pond',
      name: '생태 연못',
      image: '/images/해오라기.jpg',
      description: '5,100㎡ 면적의 친환경 습지로, 물의 유입에 따라 변화하는 생태계를 관찰할 수 있습니다. 갯버들, 물옥잠 등 한국 습지 자생식물 18종 43,315본이 식재되어 있으며, 나비, 개구리 등 다양한 생물의 서식처를 제공합니다.',
      features: ['5,100㎡ 친환경 습지', '18종의 한국 습지 자생식물', '다양한 생물 서식처 (나비, 개구리, 새 등)'],
      video: '/videos/생태연못.mp4',
      images: [
        '/images/생태환경1 (1).jpeg',
        '/images/생태환경1 (2).jpeg',
        '/images/생태환경1 (3).jpeg',
        '/images/생태환경1 (4).jpeg'
      ]
    },
    {
      id: 'environmental-pond',
      name: '환경 연못',
      image: '/images/watercase.png',
      description: '정문 부근에 위치한 4,655㎡ 면적의 연못으로, 약 4만 본의 수생 식물이 식재되어 있습니다. 철새, 물고기, 곤충들의 서식처이며, 한여름에는 부여군에서 가져온 1,500본의 붉은 연꽃이 아름다움을 뽐냅니다.',
      features: ['4,655㎡ 면적', '약 4만 본의 수생 식물', '붉은 연꽃 군락 (여름)'],
      video: '/videos/환경연못.mp4',
      images: [
        '/images/환경연못 (1).jpeg',
        '/images/환경연못 (2).jpeg',
        '/images/환경연못 (3).jpeg'
      ]
    }
  ]

  const [displayedStory, setDisplayedStory] = useState(zones[0]);

  const handleZoneChange = (zone) => {
    setDisplayedStory(zone)
    setSelectedImage(null)
  }

  useEffect(() => {
    if (videoRef.current && !selectedImage) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [displayedStory, selectedImage])

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
          </HeroContent>
        </HeroSection>

        <MainContent>
          {/* 소개 및 시설 정보 */}
          <IntroSection>
            <IntroLeft>
              <IntroYear>자연 속 힐링 공간</IntroYear>
              <IntroMainText>자연과 생명이 살아 숨쉬는<br/>생태 연못과 환경 연못</IntroMainText>
            </IntroLeft>
            <IntroRight>
              <IntroDescription>
                서울어린이대공원 아웃도어 가든은 자연과 교감하며 힐링할 수 있는 아름다운 야외 공간입니다.
                생태 연못과 환경 연못은 다양한 수생 식물과 야생 동물이 서식하며 자연의 신비로움을 선사합니다.
                도심 속에서 자연의 여유를 만끽하며 특별한 추억을 만들어보세요.
              </IntroDescription>
              <IntroStats>
                <IntroStatItem>
                  <IntroStatValue>9,755㎡</IntroStatValue>
                  <IntroStatLabel>총 연못 면적</IntroStatLabel>
                </IntroStatItem>
                <IntroStatItem>
                  <IntroStatValue>2개</IntroStatValue>
                  <IntroStatLabel>테마 구역</IntroStatLabel>
                </IntroStatItem>
              </IntroStats>
            </IntroRight>
          </IntroSection>

          {/* 2개 테마 구역 소개 */}
          <ZonesShowcase>
            <ZonesOverlay>
              <ZonesTitle>2가지 테마로 구성된</ZonesTitle>
              <ZonesSubtitle>야외정원 구역 안내</ZonesSubtitle>
            </ZonesOverlay>

            <TypoZoneSelectorContainer>
              {zones.map((zone) => (
                <TypoZoneButton
                  key={zone.id}
                  $isActive={displayedStory.id === zone.id}
                  onClick={() => handleZoneChange(zone)}
                >
                  {zone.name}
                </TypoZoneButton>
              ))}
            </TypoZoneSelectorContainer>
          </ZonesShowcase>
        </MainContent>

        {/* 아웃도어 가든 이야기 */}
        {displayedStory && (
          <PlantStorySection>
            <PlantStoryImageHalf>
              {selectedImage ? (
                <PlantStoryImage src={selectedImage} alt="선택된 이미지" />
              ) : (
                <PlantStoryVideo ref={videoRef} key={displayedStory.id} autoPlay loop muted playsInline>
                  <source src={displayedStory.video} type="video/mp4" />
                </PlantStoryVideo>
              )}
            </PlantStoryImageHalf>

            <ImageGridContainer
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              $isDragging={isDragging}
            >
              {displayedStory.images.map((imageSrc, index) => (
                <ImageGridItem
                  key={imageSrc}
                  src={imageSrc}
                  alt={`${displayedStory.name} ${index + 1}`}
                  draggable="false"
                  onClick={() => handleImageClick(imageSrc)}
                  $isSelected={selectedImage === imageSrc}
                />
              ))}
            </ImageGridContainer>

            <PlantStoryContentHalf>
              <PlantStoryDescription>
                {displayedStory.description}
              </PlantStoryDescription>
            </PlantStoryContentHalf>
          </PlantStorySection>
        )}
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
  background: linear-gradient(135deg, rgba(39, 174, 96, 0.8), rgba(46, 204, 113, 0.8));
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
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

const TypoZoneSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const TypoZoneButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.neutral.darkGray : theme.colors.neutral.midGray)};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.primary.green};
    border-radius: 3px;
    transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.darkGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;


const PlantStorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxxl}; /* Add padding to the bottom of the entire section */
  height: auto;
  min-height: 400px;
  background: #FAFAFA; /* Ensure background covers the whole section */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    min-height: auto;
  }
`

const PlantStoryImageHalf = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  height: 45vh;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const PlantStoryVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const PlantStoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const PlantStoryContentHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 10%;
  background: #fff;
  max-width: 1240px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
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
`

const PlantStoryDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ImageGridContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 1240px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  overflow-x: auto;
  overflow-y: hidden;
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const ImageGridItem = styled.img`
  min-width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  flex-shrink: 0;
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;
  border: 3px solid ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary.green : 'transparent'};
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.8)};

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 250px;
    height: 180px;
  }
`;

export default OutdoorGarden