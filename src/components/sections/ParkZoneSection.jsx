import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ParkZoneSection = () => {
  const [selectedZone, setSelectedZone] = useState(null)
  const [mapScale, setMapScale] = useState(1)
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [backgroundEffect, setBackgroundEffect] = useState(null)
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
      mapPosition: { top: '40%', left: '25%' },
      cameraPosition: { x: 150, y: 80 }
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
      mapPosition: { top: '50%', left: '45%' },
      cameraPosition: { x: 0, y: 0 }
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
      mapPosition: { top: '55%', left: '65%' },
      cameraPosition: { x: -150, y: -50 }
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
      mapPosition: { top: '30%', left: '55%' },
      cameraPosition: { x: -50, y: 120 }
    }
  ]

  const handleZoneSelect = (index, e) => {
    e.stopPropagation()
    setSelectedZone(index)
    setBackgroundEffect(zones[index].color)

    // 카메라를 해당 zone으로 이동
    const targetPosition = zones[index].cameraPosition
    setMapPosition(targetPosition)
  }

  const handleMapClick = () => {
    setSelectedZone(null)
    setBackgroundEffect(null)
  }

  return (
    <Section>
      <BackgroundEffectWrapper $isVisible={!!backgroundEffect} $color={backgroundEffect}>
        <div />
      </BackgroundEffectWrapper>
      <Container>
        <SectionHeader>
          <EnglishTitle>Park Zones</EnglishTitle>
          <MainTitle>공원 구역 안내</MainTitle>
        </SectionHeader>

        <CategoryTabs>
          {zones.map((zone, index) => (
            <CategoryTab
              key={index}
              $isActive={selectedZone !== null && selectedZone === index}
              onClick={(e) => handleZoneSelect(index, e)}
            >
              <span>{zone.icon}</span>
              <span>{zone.name}</span>
            </CategoryTab>
          ))}
        </CategoryTabs>

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
            $isDragging={isDragging}
            onClick={handleMapClick}
          >
            <MapImage src="/images/park-map-3d.png" alt="서울어린이대공원 지도" />
            <MapOverlay>
              {zones.map((zone, index) => (
                <MapMarker
                  key={index}
                  $top={zone.mapPosition.top}
                  $left={zone.mapPosition.left}
                  $color={zone.color}
                  $isActive={selectedZone !== null && selectedZone === index}
                  onClick={(e) => handleZoneSelect(index, e)}
                >
                  {selectedZone === index && <MarkerPulse $color={zone.color} />}
                  <MarkerIcon $isActive={selectedZone !== null && selectedZone === index}>
                    {zone.icon}
                  </MarkerIcon>
                </MapMarker>
              ))}

              {selectedZone !== null && (
                <ZoneInfoPopup
                  key={selectedZone}
                  $top={zones[selectedZone].mapPosition.top}
                  $left={zones[selectedZone].mapPosition.left}
                >
                  <PopupHeader>
                    <PopupIcon>{zones[selectedZone].icon}</PopupIcon>
                    <PopupTitle>{zones[selectedZone].name}</PopupTitle>
                  </PopupHeader>

                  <PopupContent>
                    <PopupSection>
                      <PopupLabel>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                        </svg>
                        찾아가는 길
                      </PopupLabel>
                      <PopupText>{zones[selectedZone].location}</PopupText>
                    </PopupSection>

                    <PopupSection>
                      <PopupLabel>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        소개
                      </PopupLabel>
                      <PopupText>{zones[selectedZone].description}</PopupText>
                    </PopupSection>

                    <PopupSection>
                      <PopupLabel>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <path d="M9 2l1.5 5.5L16 9l-5.5 1.5L9 16l-1.5-5.5L2 9l5.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                        </svg>
                        주요 특징
                      </PopupLabel>
                      {zones[selectedZone].features.map((feature, idx) => (
                        <PopupFeature key={idx}>{feature}</PopupFeature>
                      ))}
                    </PopupSection>

                    <PopupSection>
                      <PopupLabel>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M7 2v4M13 2v4M3 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        편의시설
                      </PopupLabel>
                      <PopupFacilities>
                        {zones[selectedZone].facilities.map((facility, idx) => (
                          <PopupFacilityTag key={idx}>{facility}</PopupFacilityTag>
                        ))}
                      </PopupFacilities>
                    </PopupSection>
                  </PopupContent>
                </ZoneInfoPopup>
              )}
            </MapOverlay>
          </MapImageContainer>
        </MapWrapper>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  background: url('/images/801278_19383-NSBW7R-01.png') center center / cover no-repeat;
  background-attachment: fixed;
  color: #2d3d2d;
  overflow: hidden;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 0;
  }
`

const BackgroundEffectWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 0.1 : 0)};
  transition: opacity 0.5s ease-in-out;
  z-index: 1;

  div {
    width: 100%;
    height: 100%;
    background: ${({ $color }) => $color || 'transparent'};
  }
`

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const EnglishTitle = styled.div`
  font-size: 14px;
  color: #5a6a5a;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 1px;
`

const MainTitle = styled.h2`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #1a2a1a;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  flex-wrap: wrap;
`

const CategoryTab = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ $isActive }) => ($isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.3)')};
  color: ${({ $isActive }) => ($isActive ? '#1a2a1a' : '#2d3d2d')};
  border: 0.5px solid ${({ $isActive }) => ($isActive ? '#2d3d2d' : 'rgba(45, 61, 45, 0.4)')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(5px);

  span:first-child {
    font-size: 18px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #1a2a1a;
    border-color: #6fb03d;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const MapWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  height: 900px;
  background: transparent;
  margin: 0 auto;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 700px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 500px;
  }
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  color: #1a1a1a;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: white;
    transform: scale(1.1);
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
  transition: ${({ $isDragging }) => ($isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)')};
  will-change: ${({ $isDragging }) => ($isDragging ? 'transform' : 'auto')};
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
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
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
`

const MapMarker = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%) scale(${({ $isActive }) => ($isActive ? 1 : 0.85)});
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${({ $isActive }) => ($isActive ? 20 : 10)};
  cursor: pointer;
  transition: transform 0.3s ease;
  pointer-events: auto;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.95)};

  &:hover {
    transform: translate(-50%, -50%) scale(${({ $isActive }) => ($isActive ? 1.05 : 0.95)});
    opacity: 1;
  }

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
  width: ${({ $isActive }) => ($isActive ? '70px' : '55px')};
  height: ${({ $isActive }) => ($isActive ? '70px' : '55px')};
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $isActive }) => ($isActive ? '32px' : '26px')};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(255, 255, 255, 0.3);
  border: ${({ $isActive }) => ($isActive ? '4px' : '3px')} solid white;
  z-index: 2;
  transition: all 0.3s ease;
`

const ZoneInfoPopup = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(60px, -50%);
  transform-origin: left center;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(45, 61, 45, 0.2);
  width: 350px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 50;
  pointer-events: auto;
  animation: popupSlideIn 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(200, 200, 200, 0.3);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(100, 150, 100, 0.4);
    border-radius: 2px;
  }

  @keyframes popupSlideIn {
    from {
      opacity: 0;
      transform: translate(40px, -50%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(60px, -50%) scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 280px;
    max-height: 400px;
  }
`

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid rgba(45, 61, 45, 0.2);
`

const PopupIcon = styled.div`
  font-size: 28px;
`

const PopupTitle = styled.h4`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #1a2a1a;
`

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const PopupSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const PopupLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: #5a6a5a;

  svg {
    flex-shrink: 0;
  }
`

const PopupText = styled.p`
  font-size: 12px;
  color: #2d3d2d;
  line-height: 1.5;
  padding-left: 24px;
`

const PopupFeature = styled.div`
  font-size: 12px;
  color: #2d3d2d;
  line-height: 1.5;
  padding-left: 24px;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 12px;
    color: #6a7a6a;
  }
`

const PopupFacilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-left: 24px;
`

const PopupFacilityTag = styled.span`
  padding: 4px 10px;
  background: rgba(111, 176, 61, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 11px;
  color: #3d5a2d;
  border: 0.5px solid rgba(45, 61, 45, 0.2);
  white-space: nowrap;
`

export default ParkZoneSection
