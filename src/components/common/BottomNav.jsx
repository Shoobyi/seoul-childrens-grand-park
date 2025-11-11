import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    {
      icon: '🏠',
      label: '홈',
      path: '/',
    },
    {
      icon: '🦁',
      label: '동물원',
      path: '/animal-friends',
    },
    {
      icon: '🌿',
      label: '식물원',
      path: '/outdoor-garden',
    },
    {
      icon: '🎡',
      label: '놀이',
      path: '/adventure-zone',
    },
    {
      icon: '🎫',
      label: '티켓',
      path: '/tickets',
    },
  ]

  return (
    <NavContainer>
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          onClick={() => navigate(item.path)}
          $isActive={location.pathname === item.path}
        >
          <NavIcon>{item.icon}</NavIcon>
          <NavLabel $isActive={location.pathname === item.path}>
            {item.label}
          </NavLabel>
        </NavItem>
      ))}
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
    padding: ${({ theme }) => `${theme.spacing.xs} 0 ${theme.spacing.sm}`};
    z-index: 1000;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    justify-content: space-around;
    align-items: center;
    height: 65px;
  }
`

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  transition: all 0.3s ease;
  flex: 1;
  max-width: 80px;

  &:active {
    transform: scale(0.95);
  }
`

const NavIcon = styled.span`
  font-size: 24px;
  transition: all 0.3s ease;

  ${NavItem}:hover & {
    transform: scale(1.1);
  }
`

const NavLabel = styled.span`
  font-size: 11px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary.green : theme.colors.neutral.darkGray};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular};
  transition: all 0.3s ease;
`

export default BottomNav
