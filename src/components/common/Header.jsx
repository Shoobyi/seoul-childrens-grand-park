import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <HeaderContainer $isScrolled={isScrolled}>
      <HeaderInner>
        <Logo href="/">
          <img src="/서울어린이대공원.svg" alt="서울어린이대공원" />
        </Logo>

        <Nav
          onMouseLeave={() => setActiveMenu(null)}
        >
          {menuItems.map((item, index) => (
            <NavItemWrapper
              key={item.name}
              onMouseEnter={() => setActiveMenu(index)}
            >
              <NavItem href={item.path} $isScrolled={isScrolled}>
                {item.name}
              </NavItem>

              <SubMenuContainer $isActive={activeMenu === index}>
                {item.subMenu.map((subItem) => (
                  <SubMenuItem key={subItem.name} href={subItem.path}>
                    {subItem.name}
                  </SubMenuItem>
                ))}
              </SubMenuContainer>
            </NavItemWrapper>
          ))}
        </Nav>

        <HeaderActions>
          <ActionButton $isScrolled={isScrolled}>로그인</ActionButton>
          <ActionButton $isScrolled={isScrolled}>이용안내</ActionButton>
        </HeaderActions>
      </HeaderInner>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $isScrolled, theme }) =>
    $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s ease;
  box-shadow: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.shadows.small : 'none'};
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

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavItem = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.colors.neutral.darkGray : 'white'};
  transition: color 0.3s ease;
  padding: ${({ theme }) => `${theme.spacing.md} 0`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
  }
`

const SubMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.md};
  min-width: 180px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  transform: ${({ $isActive }) =>
    $isActive ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1001;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const SubMenuItem = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  transition: all 0.3s ease;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lightGreen}30;
    color: ${({ theme }) => theme.colors.primary.green};
    transform: translateX(4px);
  }
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const ActionButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.colors.neutral.darkGray : 'white'};
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $isScrolled, theme }) =>
      $isScrolled ? theme.colors.neutral.lightGray : 'rgba(255, 255, 255, 0.2)'};
  }
`

export default Header
