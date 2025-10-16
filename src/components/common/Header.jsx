import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // 사이드 메뉴 열릴 때 스크롤 방지
    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSideMenuOpen])

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
  ]

  return (
    <>
      <HeaderContainer $isScrolled={isScrolled}>
        <HeaderInner>
          <Logo href="/">
            <img src="/icons/logo.svg" alt="서울어린이대공원" />
          </Logo>

          <HeaderActions>
            <ActionButton $isScrolled={isScrolled} href="#guide">이용안내</ActionButton>
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
`

const Logo = styled.a`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    width: auto;
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
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const ActionButton = styled.a`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.colors.neutral.darkGray : 'white'};
  background: transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: ${({ $isScrolled, theme }) =>
      $isScrolled ? `${theme.colors.primary.lightGreen}30` : 'rgba(255, 255, 255, 0.2)'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

export default Header
