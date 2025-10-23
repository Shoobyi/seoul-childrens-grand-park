import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        { name: '사파리 스토리', path: '#safari-story' },
        { name: '애니멀 프렌즈', path: '#animal-friends' },
        { name: '사파리 맵 & 가이드', path: '#safari-map' },
      ]
    },
    {
      name: '그린 가든',
      path: '#green-garden',
      subMenu: [
        { name: '인도어 가든', path: '#indoor-garden' },
        { name: '아웃도어 가든', path: '#outdoor-garden' },
        { name: '가든 맵 & 가이드', path: '#garden-map' },
      ]
    },
    {
      name: '플레이 파크',
      path: '#play-park',
      subMenu: [
        { name: '어드벤처 존', path: '#adventure-zone' },
        { name: '플레이 그라운드', path: '#playground' },
        { name: '워터파크', path: '#waterpark' },
      ]
    },
    {
      name: '가든 페스티벌',
      path: '#garden-festival',
      subMenu: [
        { name: '페스티벌 가이드', path: '#festival-guide' },
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
      path: '#guide',
      subMenu: [
        { name: '운영 시간', path: '#hours' },
        { name: '입장료', path: '#admission' },
        { name: '편의 시설', path: '#facilities' },
        { name: '이용 규칙', path: '#rules' },
      ]
    },
  ]

  return (
    <>
      <HeaderContainer $isScrolled={isScrolled}>
        <HeaderInner>
          <Logo href="/" $isScrolled={isScrolled}>
            <img src="/icons/logo.svg" alt="서울어린이대공원" />
          </Logo>

          <HeaderActions>
            <SearchButton onClick={() => setIsSearchOpen(true)} $isScrolled={isScrolled}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </SearchButton>
            <MenuToggleButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)} $isScrolled={isScrolled}>
              <span></span>
              <span></span>
              <span></span>
            </MenuToggleButton>
          </HeaderActions>
        </HeaderInner>
      </HeaderContainer>

      {/* 오버레이 */}
      <Overlay $isOpen={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)} />

      {/* 사이드 메뉴 */}
      <SideMenu $isOpen={isSideMenuOpen}>
        <SideMenuHeader>
          <CloseButton onClick={() => setIsSideMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </CloseButton>
        </SideMenuHeader>

        <SideMenuContent>
          {menuItems.map((item, index) => (
            <SideMenuItem key={item.name}>
              <SideMenuItemTitle
                href={item.path}
                onClick={() => setActiveMenu(activeMenu === index ? null : index)}
              >
                {item.name}
              </SideMenuItemTitle>
              <SideSubMenu $isOpen={activeMenu === index}>
                {item.subMenu.map((subItem) => (
                  <SideSubMenuItem key={subItem.name} href={subItem.path}>
                    {subItem.name}
                  </SideSubMenuItem>
                ))}
              </SideSubMenu>
            </SideMenuItem>
          ))}
        </SideMenuContent>

        <SideMenuFooter>
          <FooterButton href="#login">로그인</FooterButton>
          <FooterButton href="#tickets" $primary>입장권 구매</FooterButton>
        </SideMenuFooter>
      </SideMenu>

      {/* 검색 모달 */}
      <SearchOverlay $isOpen={isSearchOpen} onClick={() => setIsSearchOpen(false)} />
      <SearchModal $isOpen={isSearchOpen}>
        <SearchModalContent $isOpen={isSearchOpen}>
          <SearchInputWrapper>
            <SearchIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </SearchIcon>
            <SearchInput type="text" placeholder="어떤 것을 찾으시나요? (예: 동물 먹이주기, 놀이기구 위치 등)" autoFocus />
            <SearchCloseButton onClick={() => setIsSearchOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </SearchCloseButton>
          </SearchInputWrapper>
        </SearchModalContent>
      </SearchModal>
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

const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-left: -12px;

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
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
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

const SideMenuItemTitle = styled.a`
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
  color: ${({ theme }) => theme.colors.neutral.midGray};
  transition: all 0.3s ease;

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
  background: rgba(0, 0, 0, 0.7);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: all 0.3s ease;
  z-index: 99998 !important;
  backdrop-filter: blur(8px);
`

const SearchModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 99999;
`

const SearchModalContent = styled.div`
  background: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  width: 90%;
  max-width: 1200px;
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.9)')};
  transition: transform 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    width: 95%;
  }
`

const SearchIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.3s ease;

  svg {
    width: 32px;
    height: 32px;
  }
`

const SearchInputWrapper = styled.div`
  position: relative;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  background: transparent;
  border-radius: 50px;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
  backdrop-filter: none;
  box-shadow: none;

  &:focus-within ${SearchIcon} {
    color: ${({ theme }) => theme.colors.primary.green};
  }
`

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} 0;
  font-size: 24px;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  font-family: inherit;
  background: transparent;
  color: white;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary.green};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;

    &::placeholder {
      font-size: 16px;
    }
  }
`

const SearchCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  color: white;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export default Header
