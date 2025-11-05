import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  // 홈 페이지가 아니면 항상 헤더를 스크롤된 스타일로 표시
  const isHomePage = location.pathname === '/'
  const shouldShowScrolledStyle = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 로그인 상태 확인
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
      const email = localStorage.getItem('userEmail') || ''
      setIsLoggedIn(loggedIn)
      setUserEmail(email)
    }

    checkLoginStatus()
    // storage 이벤트 리스너 추가 (다른 탭에서 로그인 시 동기화)
    window.addEventListener('storage', checkLoginStatus)
    // 사이드 메뉴 열릴 때마다 확인
    if (isSideMenuOpen) {
      checkLoginStatus()
    }

    return () => {
      window.removeEventListener('storage', checkLoginStatus)
    }
  }, [isSideMenuOpen])

  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    setIsLoggedIn(false)
    setUserEmail('')
    setIsSideMenuOpen(false)
    navigate('/')
  }

  useEffect(() => {
    // 사이드 메뉴 또는 검색 모달 열릴 때 스크롤 방지
    if (isSideMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSideMenuOpen, isSearchOpen])

  const menuItems = [
    {
      name: '어반 사파리',
      path: '#urban-safari',
      subMenu: [
        { name: '사파리 스토리', path: '/safari-story' },
        { name: '애니멀 프렌즈', path: '/animal-friends' },
        { name: '사파리 맵 & 가이드', path: '#safari-map' },
      ]
    },
    {
      name: '그린 가든',
      path: '#green-garden',
      subMenu: [
        { name: '인도어 가든', path: '/indoor-garden' },
        { name: '아웃도어 가든', path: '/outdoor-garden' },
        { name: '가든 맵 & 가이드', path: '#garden-map' },
      ]
    },
    {
      name: '플레이 파크',
      path: '#play-park',
      subMenu: [
        { name: '어드벤처 존', path: '/adventure-zone' },
        { name: '플레이 그라운드', path: '#playground' },
        { name: '워터파크', path: '#waterpark' },
      ]
    },
    {
      name: '가든 페스티벌',
      path: '#garden-festival',
      subMenu: [
        { name: '페스티벌 뉴스', path: '#festival-news' },
        { name: '이벤트 캘린더', path: '#event-calendar' },
      ]
    },
    {
      name: '디스커버리',
      path: '#discovery',
      subMenu: [
        { name: '애니멀 스쿨', path: '#animal-school' },
        { name: '자연생태', path: '#nature-ecology' },
        { name: '놀이문화', path: '#play-culture' },
      ]
    },
    {
      name: '이용안내',
      path: '/guide',
      subMenu: []
    },
  ]

  return (
    <>
      <HeaderContainer $isScrolled={shouldShowScrolledStyle}>
        <HeaderInner>
          <Logo to="/" $isScrolled={shouldShowScrolledStyle}>
            <img src="/icons/logo.svg" alt="서울어린이대공원" />
          </Logo>

          <HeaderActions>
            <SearchButton onClick={() => setIsSearchOpen(true)} $isScrolled={shouldShowScrolledStyle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </SearchButton>
            <MenuToggleButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)} $isScrolled={shouldShowScrolledStyle}>
              <span></span>
              <span></span>
              <span></span>
            </MenuToggleButton>
          </HeaderActions>
        </HeaderInner>
      </HeaderContainer>

      {/* 오버레이 & 사이드 메뉴 */}
      {ReactDOM.createPortal(
        <>
          <Overlay $isOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)} />

          <SideMenu $isOpen={isSideMenuOpen}>
            <SideMenuHeader>
              {isLoggedIn && (
                <AccountHeaderInfo onClick={() => { setIsSideMenuOpen(false); navigate('/mypage'); }}>
                  <AccountHeaderIcon>👤</AccountHeaderIcon>
                  <AccountHeaderEmail>{userEmail}</AccountHeaderEmail>
                </AccountHeaderInfo>
              )}
              <CloseButton onClick={() => setIsSideMenuOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </CloseButton>
            </SideMenuHeader>

            <SideMenuContent>
              {menuItems.map((item, index) => (
                <SideMenuItem key={item.name}>
                  {item.subMenu.length === 0 && item.path.startsWith('/') ? (
                    <SideMenuItemLink
                      to={item.path}
                      onClick={() => setIsSideMenuOpen(false)}
                    >
                      {item.name}
                    </SideMenuItemLink>
                  ) : (
                    <>
                      <SideMenuItemTitle
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveMenu(activeMenu === index ? null : index)
                        }}
                      >
                        {item.name}
                      </SideMenuItemTitle>
                      <SideSubMenu $isOpen={activeMenu === index}>
                        {item.subMenu.map((subItem) => (
                          subItem.path.startsWith('/') ? (
                            <SideSubMenuLink key={subItem.name} to={subItem.path} onClick={() => setIsSideMenuOpen(false)}>
                              {subItem.name}
                            </SideSubMenuLink>
                          ) : (
                            <SideSubMenuItem key={subItem.name} href={subItem.path}>
                              {subItem.name}
                            </SideSubMenuItem>
                          )
                        ))}
                      </SideSubMenu>
                    </>
                  )}
                </SideMenuItem>
              ))}
            </SideMenuContent>

            <SideMenuFooter>
              {isLoggedIn ? (
                <>
                  <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                  <FooterButtonLink to="/tickets" onClick={() => setIsSideMenuOpen(false)} $primary>입장권 구매</FooterButtonLink>
                </>
              ) : (
                <>
                  <FooterButtonLink to="/login" onClick={() => setIsSideMenuOpen(false)}>로그인</FooterButtonLink>
                  <FooterButtonLink to="/tickets" onClick={() => setIsSideMenuOpen(false)} $primary>입장권 구매</FooterButtonLink>
                </>
              )}
            </SideMenuFooter>
          </SideMenu>
        </>,
        document.body
      )}

      {/* 검색 모달 */}
      {ReactDOM.createPortal(
        <>
          <SearchOverlay $isOpen={isSearchOpen} onClick={() => setIsSearchOpen(false)} />
          <SearchModal $isOpen={isSearchOpen}>
            <SearchModalContent $isOpen={isSearchOpen}>
              <AnimalCharacter>
                <AnimalImage src="/images/monkey-search.svg" alt="원숭이" />
                <SpeechBubble>
                  무엇을 찾고 계신가요?
                </SpeechBubble>
              </AnimalCharacter>

              <SearchInputWrapper>
                <SearchIcon>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </SearchIcon>
                <SearchInput
                  type="text"
                  placeholder="동물 먹이주기, 놀이기구, 공연 시간 등..."
                  autoFocus
                />
                <SearchCloseButton onClick={() => setIsSearchOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </SearchCloseButton>
              </SearchInputWrapper>

              <QuickSearchSection>
                <QuickSearchTitle>인기 검색어</QuickSearchTitle>
                <QuickSearchTags>
                  <QuickSearchTag>동물 먹이주기</QuickSearchTag>
                  <QuickSearchTag>놀이기구</QuickSearchTag>
                  <QuickSearchTag>식물원</QuickSearchTag>
                  <QuickSearchTag>공연 일정</QuickSearchTag>
                  <QuickSearchTag>지도 보기</QuickSearchTag>
                  <QuickSearchTag>입장료</QuickSearchTag>
                </QuickSearchTags>
              </QuickSearchSection>
            </SearchModalContent>
          </SearchModal>
        </>,
        document.body
      )}
    </>
  )
}

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`

const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: -12px;
  text-decoration: none;

  img {
    height: 50px;
    width: auto;
    filter: ${({ $isScrolled }) =>
      $isScrolled ? 'none' : 'brightness(0) invert(1)'};
    transition: filter 0.3s ease;
  }
`

const MenuToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  height: 28px;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: ${({ $isScrolled, theme }) =>
      $isScrolled ? theme.colors.neutral.darkGray : 'white'};
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  span:nth-child(2) {
    width: 70%;
  }

  &:hover span {
    background: ${({ theme }) => theme.colors.primary.green};
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 9998;
  backdrop-filter: blur(4px);
`

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  background: white;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`

const SideMenuHeader = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
`

const AccountHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  margin-left: -${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lightGreen};
  }
`

const AccountHeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

const AccountHeaderEmail = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neutral.lightGray};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    color: white;
    transform: rotate(90deg);
  }
`

const SideMenuContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
`

const SideMenuItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const SideMenuItemTitle = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`

const SideMenuItemLink = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`

const SideSubMenu = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition: all 0.4s ease;
  padding-left: ${({ theme }) => theme.spacing.lg};
`

const SideSubMenuItem = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`

const SideSubMenuLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`

const SideMenuFooter = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const FooterButton = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  transition: all 0.3s ease;
  background: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary.green : 'transparent'};
  color: ${({ $primary, theme }) =>
    $primary ? 'white' : theme.colors.neutral.darkGray};
  border: ${({ $primary, theme }) =>
    $primary ? 'none' : `2px solid ${theme.colors.neutral.lightGray}`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: ${({ $primary, theme }) =>
      $primary ? theme.colors.primary.darkGreen : theme.colors.primary.lightGreen};
    color: ${({ $primary }) => ($primary ? 'white' : 'inherit')};
  }
`

const FooterButtonLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  transition: all 0.3s ease;
  background: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary.green : 'transparent'};
  color: ${({ $primary, theme }) =>
    $primary ? 'white' : theme.colors.neutral.darkGray};
  border: ${({ $primary, theme }) =>
    $primary ? 'none' : `2px solid ${theme.colors.neutral.lightGray}`};
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: ${({ $primary, theme }) =>
      $primary ? theme.colors.primary.darkGreen : theme.colors.primary.lightGreen};
    color: ${({ $primary }) => ($primary ? 'white' : 'inherit')};
  }
`

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  transition: all 0.3s ease;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: #FFE6E6;
    border-color: #FF6B6B;
    color: #FF6B6B;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-right: -8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.colors.neutral.darkGray : 'white'};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

const SearchOverlay = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.9) 0%, rgba(39, 174, 96, 0.95) 50%, rgba(249, 220, 92, 0.9) 100%);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: all 0.4s ease;
  z-index: 99998 !important;
`

const SearchModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.4s ease;
  z-index: 99999;
  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const SearchModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
  }
`

const AnimalCharacter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`

const AnimalImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80px;
    height: 80px;
  }
`

const SpeechBubble = styled.div`
  position: absolute;
  bottom: -45px;
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 20px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    bottom: -40px;
  }
`

const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary.green};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.3s ease;

  svg {
    width: 28px;
    height: 28px;
  }
`

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  background: white;
  border-radius: 60px;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xxl}`};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxl};

  &:focus-within {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
    transform: translateY(-2px);
  }

  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  }
`

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-size: 22px;
  border: none;
  transition: all 0.3s ease;
  font-family: inherit;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral.darkGray};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.midGray};
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;

    &::placeholder {
      font-size: 14px;
    }
  }
`

const SearchCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neutral.lightGray};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    color: white;
    transform: rotate(90deg);
  }
`

const QuickSearchSection = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const QuickSearchTitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  opacity: 0.9;
`

const QuickSearchTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
`

const QuickSearchTag = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  color: white;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary.green};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  }
`

export default Header
