import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ParkZoneSection = () => {
  const [selectedZone, setSelectedZone] = useState(0)
  const [mapScale, setMapScale] = useState(1)
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const mapRef = useRef(null)

  const adjustMapPosition = (scale) => {
    if (!mapRef.current) return

    const mapContainer = mapRef.current
    const containerWidth = mapContainer.offsetWidth
    const containerHeight = mapContainer.offsetHeight

    const scaledWidth = containerWidth * scale
    const scaledHeight = containerHeight * scale

    const maxX = scale >= 1 ? (scaledWidth - containerWidth) / 2 : 0
    const maxY = scale >= 1 ? (scaledHeight - containerHeight) / 2 : 0

    setMapPosition({
      x: Math.max(-maxX, Math.min(maxX, mapPosition.x)),
      y: Math.max(-maxY, Math.min(maxY, mapPosition.y))
    })
  }

  useEffect(() => {
    const mapElement = mapRef.current
    if (!mapElement) return

    const handleWheelEvent = (e) => {
      e.preventDefault()
      e.stopPropagation()

      const delta = e.deltaY * -0.001
      const newScale = Math.min(Math.max(0.5, mapScale + delta), 3)
      setMapScale(newScale)

      // 축소 시 위치 조정
      if (newScale < mapScale) {
        adjustMapPosition(newScale)
      }
    }

    // passive: false로 설정하여 preventDefault가 작동하도록 함
    mapElement.addEventListener('wheel', handleWheelEvent, { passive: false })

    return () => {
      mapElement.removeEventListener('wheel', handleWheelEvent)
    }
  }, [mapScale, mapPosition])

  const handleZoomIn = () => {
    const newScale = Math.min(3, mapScale + 0.2)
    setMapScale(newScale)
  }

  const handleZoomOut = () => {
    const newScale = Math.max(0.5, mapScale - 0.2)
    setMapScale(newScale)
    adjustMapPosition(newScale)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - mapPosition.x,
      y: e.clientY - mapPosition.y
    })
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !mapRef.current) return

    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y

    // 지도의 실제 크기 계산
    const mapContainer = mapRef.current
    const containerWidth = mapContainer.offsetWidth
    const containerHeight = mapContainer.offsetHeight

    // 스케일을 적용한 지도 크기
    const scaledWidth = containerWidth * mapScale
    const scaledHeight = containerHeight * mapScale

    // 최대 이동 범위 계산 (지도가 컨테이너를 벗어나지 않도록)
    const maxX = (scaledWidth - containerWidth) / 2
    const maxY = (scaledHeight - containerHeight) / 2

    // 축소 시 (scale < 1) 이동 제한을 더 엄격하게
    const limitX = mapScale >= 1 ? maxX : 0
    const limitY = mapScale >= 1 ? maxY : 0

    setMapPosition({
      x: Math.max(-limitX, Math.min(limitX, newX)),
      y: Math.max(-limitY, Math.min(limitY, newY))
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetMapView = () => {
    setMapScale(1)
    setMapPosition({ x: 0, y: 0 })
  }

  const zones = [
    {
      name: '어반 사파리',
      icon: '🦁',
      color: '#A8E6CF',
      description: '도심 속에서 만나는 야생동물의 세계',
      features: [
        '사자, 호랑이 등 대형 맹수 관람',
        '코끼리, 기린 등 초식동물 체험',
        '원숭이, 펭귄 등 다양한 동물 관찰',
        '동물 먹이주기 및 사육사 체험 프로그램'
      ],
      facilities: ['화장실 3곳', '수유실 2곳', '매점 5곳', '휴게소 4곳'],
      location: '정문(메인게이트) → 직진 200m → 왼쪽 구역',
      mapPosition: { top: '40%', left: '25%' }
    },
    {
      name: '그린 가든',
      icon: '🌿',
      color: '#E0F5F5',
      description: '사계절 푸른 자연과 식물의 향연',
      features: [
        '온실정원 및 열대식물 관람',
        '야외정원 산책로 및 포토존',
        '식물 심기 및 가드닝 체험',
        '계절별 꽃 축제 및 전시회'
      ],
      facilities: ['화장실 2곳', '수유실 1곳', '카페 2곳', '휴게소 3곳'],
      location: '정문(메인게이트) → 직진 300m → 중앙 광장 주변',
      mapPosition: { top: '50%', left: '45%' }
    },
    {
      name: '플레이 파크',
      icon: '🎡',
      color: '#FFE4E1',
      description: '온 가족이 함께 즐기는 놀이 공간',
      features: [
        '어드벤처 놀이시설 (모험놀이터)',
        '어린이 놀이터 및 유아놀이터',
        '워터파크 (여름 시즌 운영)',
        '야외 공연장 및 체험 프로그램'
      ],
      facilities: ['화장실 4곳', '수유실 2곳', '매점 6곳', '휴게소 5곳'],
      location: '정문(메인게이트) → 직진 400m → 오른쪽 구역',
      mapPosition: { top: '55%', left: '65%' }
    },
    {
      name: '가든 페스티벌',
      icon: '🎪',
      color: '#E6D4F0',
      description: '특별한 축제와 이벤트가 열리는 공간',
      features: [
        '계절별 테마 축제 개최',
        '주말 공연 및 버스킹',
        '푸드트럭 및 플리마켓',
        '문화예술 체험 프로그램'
      ],
      facilities: ['화장실 2곳', '수유실 1곳', '매점 4곳', '공연장 1곳'],
      location: '정문(메인게이트) → 직진 500m → 후문 방향',
      mapPosition: { top: '30%', left: '55%' }
    }
  ]

  return (
    <Section>
      <Container>
        <CenterTitle>주요 구역 안내 및 찾아오시는 길</CenterTitle>

        <ContentWrapper>
          <LeftInfo>
            <InfoIcon>①</InfoIcon>
            <InfoTitle>{zones[selectedZone].name}</InfoTitle>

            <InfoBox>
              <InfoLabel>찾아가는 길</InfoLabel>
              <LocationBox>
                <LocationIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </LocationIcon>
                <InfoText>{zones[selectedZone].location}</InfoText>
              </LocationBox>
            </InfoBox>

            <InfoBox>
              <InfoLabel>소개</InfoLabel>
              <InfoText>{zones[selectedZone].description}</InfoText>
            </InfoBox>

            <InfoBox>
              <InfoLabel>주요 특징</InfoLabel>
              <FeatureList>
                {zones[selectedZone].features.map((feature, idx) => (
                  <FeatureItem key={idx}>· {feature}</FeatureItem>
                ))}
              </FeatureList>
            </InfoBox>

            <InfoBox>
              <InfoLabel>편의시설</InfoLabel>
              <FacilityList>
                {zones[selectedZone].facilities.map((facility, idx) => (
                  <FacilityItem key={idx}>{facility}</FacilityItem>
                ))}
              </FacilityList>
            </InfoBox>
          </LeftInfo>

          <MapWrapper
            ref={mapRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            $isDragging={isDragging}
          >
            <MapControls>
              <ControlButton onClick={handleZoomIn} title="확대">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </ControlButton>
              <ControlButton onClick={handleZoomOut} title="축소">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </ControlButton>
              <ControlButton onClick={resetMapView} title="초기화">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10a6 6 0 1 1 12 0M10 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </ControlButton>
              <ZoomLevel>{Math.round(mapScale * 100)}%</ZoomLevel>
            </MapControls>

            <MapImageContainer
              $scale={mapScale}
              $x={mapPosition.x}
              $y={mapPosition.y}
            >
              <MapImage src="/map_v2.jpg" alt="서울어린이대공원 지도" />
              <MapOverlay>
                <MapMarker
                  $top={zones[selectedZone].mapPosition.top}
                  $left={zones[selectedZone].mapPosition.left}
                  $color={zones[selectedZone].color}
                >
                  <MarkerPulse $color={zones[selectedZone].color} />
                  <MarkerIcon>{zones[selectedZone].icon}</MarkerIcon>
                  <MarkerLabel>{zones[selectedZone].name}</MarkerLabel>
                </MapMarker>
              </MapOverlay>
            </MapImageContainer>
          </MapWrapper>
        </ContentWrapper>

        <ZoneQuickNav>
          {zones.map((zone, index) => (
            <QuickNavButton
              key={index}
              $bgColor={zone.color}
              $isActive={selectedZone === index}
              onClick={() => setSelectedZone(index)}
            >
              <span>{zone.icon}</span>
              <span>{zone.name}</span>
            </QuickNavButton>
          ))}
        </ZoneQuickNav>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  background: #f8f9fa;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const CenterTitle = styled.h2`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};

  span {
    color: ${({ theme }) => theme.colors.secondary.yellow};
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xxl};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

const InfoTitle = styled.h3`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primary.green};

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary.green};
    border-radius: ${({ theme }) => theme.borderRadius.round};
  }
`

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.6;
`

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const FeatureItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.6;
`

const FacilityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`

const FacilityItem = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.primary.lightGreen}40;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const LocationBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary.lightGreen}20;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border-left: 4px solid ${({ theme }) => theme.colors.primary.green};
`

const LocationIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary.green};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`

const MapWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  height: 500px;
`

const MapControls = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: 100;
`

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    color: white;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

const ZoomLevel = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  text-align: center;
`

const MapImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translate(${({ $x }) => $x}px, ${({ $y }) => $y}px) scale(${({ $scale }) => $scale});
  transform-origin: center center;
  transition: ${({ $isDragging }) => ($isDragging ? 'none' : 'transform 0.2s ease-out')};
`

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  pointer-events: none;
`

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const MapMarker = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  animation: markerAppear 0.5s ease-out;

  @keyframes markerAppear {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const MarkerPulse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.3;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
  }
`

const MarkerIcon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  border: 4px solid ${({ theme }) => theme.colors.primary.green};
  z-index: 2;
`

const MarkerLabel = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const ZoneQuickNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const QuickNavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: ${({ $isActive, theme }) =>
    $isActive ? `3px solid ${theme.colors.primary.green}` : '3px solid transparent'};
  transition: all 0.3s ease;
  cursor: pointer;

  span:first-child {
    font-size: 32px;
  }

  span:last-child {
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.neutral.darkGray};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

export default ParkZoneSection
