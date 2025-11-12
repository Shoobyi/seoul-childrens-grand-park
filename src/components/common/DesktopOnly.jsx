import React from 'react'
import styled from 'styled-components'

/**
 * DesktopOnly - 데스크톱에서만 표시되는 컴포넌트
 *
 * @param {ReactNode} children - 데스크톱에서만 표시할 콘텐츠
 * @param {string} breakpoint - 표시할 최소 너비 (기본값: 'mobile' - 768px)
 *                              옵션: 'iphone' (430px), 'mobile' (768px), 'tablet' (1024px)
 *
 * @example
 * // 모바일(768px) 이상에서만 표시
 * <DesktopOnly>
 *   <div>데스크톱 전용 콘텐츠</div>
 * </DesktopOnly>
 *
 * @example
 * // 태블릿(1024px) 이상에서만 표시
 * <DesktopOnly breakpoint="tablet">
 *   <div>태블릿 이상 전용 콘텐츠</div>
 * </DesktopOnly>
 */
const DesktopOnly = ({ children, breakpoint = 'mobile' }) => {
  return <Container $breakpoint={breakpoint}>{children}</Container>
}

const Container = styled.div`
  display: block;

  @media (max-width: ${({ theme, $breakpoint }) => theme.breakpoints[$breakpoint]}) {
    display: none;
  }
`

export default DesktopOnly
