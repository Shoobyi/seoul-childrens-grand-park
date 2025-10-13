import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>공원 안내</FooterTitle>
          <FooterLink>공원 소개</FooterLink>
          <FooterLink>운영 시간</FooterLink>
          <FooterLink>입장료</FooterLink>
          <FooterLink>오시는 길</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>참여하실 수 있는</FooterTitle>
          <FooterLink>어반 사파리</FooterLink>
          <FooterLink>그린 가든</FooterLink>
          <FooterLink>플레이 파크</FooterLink>
          <FooterLink>가든 페스티벌</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>바로가기</FooterTitle>
          <FooterLink>공지사항</FooterLink>
          <FooterLink>자주 묻는 질문</FooterLink>
          <FooterLink>이용문의</FooterLink>
          <FooterLink>프로그램 예약</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>SNS</FooterTitle>
          <SocialLinks>
            <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
            <SocialLink href="#" aria-label="Facebook">👤</SocialLink>
            <SocialLink href="#" aria-label="YouTube">▶️</SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © 2025 서울어린이대공원. All Rights Reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.neutral.navy};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0 ${theme.spacing.xl}`};
`

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.yellow};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    transform: translateY(-3px);
  }
`

const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl} 0`};
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: rgba(255, 255, 255, 0.5);
`

export default Footer
