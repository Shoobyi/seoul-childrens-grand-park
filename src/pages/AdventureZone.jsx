import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const AdventureZone = () => {
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

  const attractions = [
    {
      id: 'rollercoaster',
      name: '드림 롤러코스터',
      description: '높이 25m에서 시작하는 짜릿한 롤러코스터! 구불구불한 트랙을 따라 최고 속도 60km/h로 달리며 스릴을 만끽하세요.',
      video: '/videos/롤러코스터.mp4',
      images: [
        '/images/롤러코스터 (1).jpeg',
        '/images/롤러코스터 (2).jpeg',
        '/images/롤러코스터 (3).jpeg',
        '/images/롤러코스터 (4).jpeg'
      ]
    },
    {
      id: 'bumpercar',
      name: '범퍼카 경기장',
      description: '친구들과 신나는 범퍼카 대결! 넓은 경기장에서 자유롭게 운전하며 짜릿한 충돌의 재미를 느껴보세요.',
      video: '/videos/Children_s_Bumper_Cars_at_Seoul_Park.mp4',
      images: [
        '/images/범퍼카 (1).jpg',
        '/images/범퍼카 (2).jpg',
        '/images/범퍼카 (3).jpg'
      ]
    },
    {
      id: 'viking',
      name: '스카이 바이킹',
      description: '하늘을 가르는 듯한 느낌! 거대한 바이킹 배를 타고 좌우로 흔들리며 무중력의 짜릿함을 경험하세요.',
      video: '/videos/Super_Viking_Ride_Video_Generation.mp4',
      images: [
        '/images/바이킹 (1).jpg',
        '/images/바이킹 (2).jpg',
      ]
    },
    {
      id: 'carousel',
      name: '회전목마',
      description: '아름다운 음악과 함께 회전하는 클래식한 회전목마! 화려한 장식의 말을 타고 즐거운 시간을 보내세요.',
      video: '/videos/회전목마.mp4',
      images: [
        '/images/회전목마 (1).jpg',
        '/images/회전목마 (2).jpg',
        '/images/회전목마 (3).jpg'
      ]
    },
    {
      id: 'swingride',
      name: '회전그네',
      description: '높은 하늘을 향해 빙글빙글! 회전하면서 공중에 떠오르는 스릴 넘치는 그네를 경험해보세요.',
      video: '/videos/회전그네.mp4',
      images: [
        '/images/회전그네 (1).jpg',
        '/images/회전그네 (2).jpg',
        '/images/회전그네 (3).jpg',
        '/images/회전그네 (4).jpg'
      ]
    },
    {
      id: 'droptower',
      name: '드롭타워',
      description: '60m 높이에서 순식간에 낙하하는 짜릿한 경험! 중력의 스릴을 온몸으로 느껴보세요.',
      video: '/videos/드롭타워.mp4',
      images: [
        '/images/드롭타워 (1).jpeg',
        '/images/드롭타워 (2).jpeg',
        '/images/드롭타워 (3).jpeg'
      ]
    }
  ]

  const [displayedStory, setDisplayedStory] = useState(attractions[0])

  const handleAttractionChange = (attraction) => {
    setDisplayedStory(attraction)
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
              <BreadcrumbText>플레이 파크</BreadcrumbText>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  어드벤처 존
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/adventure-zone">어드벤처 존</DropdownItem>
                  <DropdownItem to="/playground">플레이 그라운드</DropdownItem>
                  <DropdownItem as="a" href="#waterpark">워터파크</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
            </Breadcrumb>
            <PageTitle>어드벤처 존</PageTitle>
          </HeroContent>
        </HeroSection>

        <MainContent>
          {/* 소개 및 시설 정보 */}
          <IntroSection>
            <IntroLeft>
              <IntroYear>모험과 스릴</IntroYear>
              <IntroMainText>다양한 놀이기구로<br/>스릴과 재미를 경험하는<br/>어드벤처 존</IntroMainText>
            </IntroLeft>
            <IntroRight>
              <IntroDescription>
                서울어린이대공원의 어드벤처 존은 짜릿한 스릴과 재미를 경험할 수 있는 특별한 놀이 공간입니다.
                다양한 놀이기구와 액티비티를 통해 용기와 도전정신을 키우고, 가족과 친구들과 함께 잊지 못할 추억을 만들어보세요.
              </IntroDescription>
              <IntroStats>
                <IntroStatItem>
                  <IntroStatValue>6개</IntroStatValue>
                  <IntroStatLabel>놀이 시설</IntroStatLabel>
                </IntroStatItem>
                <IntroStatItem>
                  <IntroStatValue>전연령</IntroStatValue>
                  <IntroStatLabel>이용 가능</IntroStatLabel>
                </IntroStatItem>
              </IntroStats>
            </IntroRight>
          </IntroSection>

          {/* 놀이기구 선택 */}
          <AttractionsShowcase>
            <AttractionsOverlay>
              <AttractionsTitle>6가지 놀이기구로 구성된</AttractionsTitle>
              <AttractionsSubtitle>어드벤처 존 안내</AttractionsSubtitle>
            </AttractionsOverlay>

            <TypoAttractionSelectorContainer>
              {attractions.map((attraction) => (
                <TypoAttractionButton
                  key={attraction.id}
                  $isActive={displayedStory.id === attraction.id}
                  onClick={() => handleAttractionChange(attraction)}
                >
                  {attraction.name}
                </TypoAttractionButton>
              ))}
            </TypoAttractionSelectorContainer>
          </AttractionsShowcase>
        </MainContent>

        {/* 놀이기구 상세 정보 */}
        {displayedStory && (
          <AttractionStorySection>
            <AttractionStoryImageHalf>
              {selectedImage ? (
                <AttractionStoryImage src={selectedImage} alt="선택된 이미지" />
              ) : (
                <AttractionStoryVideo ref={videoRef} key={displayedStory.id} autoPlay loop muted playsInline>
                  <source src={displayedStory.video} type="video/mp4" />
                </AttractionStoryVideo>
              )}
            </AttractionStoryImageHalf>

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
                  key={`${displayedStory.id}-${index}`}
                  src={imageSrc}
                  alt={`${displayedStory.name} ${index + 1}`}
                  draggable="false"
                  onClick={() => handleImageClick(imageSrc)}
                  $isSelected={selectedImage === imageSrc}
                />
              ))}
            </ImageGridContainer>

            <AttractionStoryContentHalf>
              <AttractionStoryDescription>
                {displayedStory.description}
              </AttractionStoryDescription>
            </AttractionStoryContentHalf>
          </AttractionStorySection>
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
  background-image: url('/images/롤러코스터 (3).jpeg');
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

const AttractionsShowcase = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const AttractionsOverlay = styled.div`
  text-align: left;
`

const AttractionsTitle = styled.h2`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const AttractionsSubtitle = styled.h3`
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

const TypoAttractionSelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`

const TypoAttractionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
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
    font-size: 18px;
  }
`

const AttractionStorySection = styled.section`
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
  padding-bottom: ${({ theme }) => theme.spacing.xxxl};
  height: auto;
  min-height: 400px;
  background: #FAFAFA;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    min-height: auto;
  }
`

const AttractionStoryImageHalf = styled.div`
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

const AttractionStoryVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const AttractionStoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const AttractionStoryContentHalf = styled.div`
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

const AttractionStoryDescription = styled.p`
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
`

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
`

export default AdventureZone
