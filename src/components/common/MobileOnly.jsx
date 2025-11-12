import React from 'react'
import styled from 'styled-components'

/**
 * MobileOnly - 모바일에서만 표시되는 컴포넌트
 *
 * @param {ReactNode} children - 모바일에서만 표시할 콘텐츠
 * @param {string} breakpoint - 표시할 최대 너비 (기본값: 'mobile' - 768px)
 *                              옵션: 'iphone' (430px), 'mobile' (768px), 'tablet' (1024px)
 *
 * @example
 * // 모바일(768px 이하)에서만 표시
 * <MobileOnly>
 *   <div>모바일 전용 콘텐츠</div>
 * </MobileOnly>
 *
 * @example
 * // iPhone(430px 이하)에서만 표시
 * <MobileOnly breakpoint="iphone">
 *   <div>iPhone 전용 콘텐츠</div>
 * </MobileOnly>
 */
const MobileOnly = ({ children, breakpoint = 'mobile' }) => {
  return <Container $breakpoint={breakpoint}>{children}</Container>
}

const Container = styled.div`
  display: none;

  @media (max-width: ${({ theme, $breakpoint }) => theme.breakpoints[$breakpoint]}) {
    display: block;
  }
`

export default MobileOnly
