import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <FirstRow>
          <Logo src="/icons/logo.svg" alt="서울어린이대공원" />
          <FooterLinks>
            <FooterLink href="#">서울시설공단</FooterLink>
            <LinkDivider>|</LinkDivider>
            <FooterLink href="#">찾아오시는길</FooterLink>
            <LinkDivider>|</LinkDivider>
            <FooterLink href="#">고객서비스헌장</FooterLink>
          </FooterLinks>
          <SocialLinks>
            <SocialLink href="#" aria-label="YouTube">
              <SocialIcon src="/icons/youtube.svg" alt="YouTube" $size="35px" />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <SocialIcon src="/icons/instagram.svg" alt="Instagram" $size="24px" />
            </SocialLink>
            <SocialLink href="#" aria-label="X">
              <SocialIcon src="/icons/x-social.svg" alt="X" $size="24px" />
            </SocialLink>
          </SocialLinks>
        </FirstRow>
        <SecondRow>
          <FooterLink href="#">공지사항</FooterLink>
          <LinkDivider>|</LinkDivider>
          <FooterLink href="#">자주묻는질문</FooterLink>
          <LinkDivider>|</LinkDivider>
          <FooterLink href="#">공원소개</FooterLink>
          <LinkDivider>|</LinkDivider>
          <FooterLink href="#">이용문의</FooterLink>
        </SecondRow>
        <ThirdRow>
          <FooterLink href="#" $highlight>개인정보처리방침</FooterLink>
          <LinkDivider>|</LinkDivider>
          <FooterLink href="#">사이트맵</FooterLink>
        </ThirdRow>
      </TopSection>

      <FooterBottom>
        <Address>04991 서울시 광진구 능동로 216 서울어린이대공원 TEL : 02450-9311</Address>
        <Copyright>
          Copyright(c) 2015 Seoul Facilities Corporation. All Rights Reserved
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: #2b2b2b;
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0 ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: ${({ theme }) => `${theme.spacing.xl} 0 calc(65px + ${theme.spacing.lg})`}; /* BottomNav 높이 + 여백 */
  }
`

const TopSection = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const SecondRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-left: calc(165px + ${({ theme }) => theme.spacing.lg});
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const ThirdRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-left: calc(165px + ${({ theme }) => theme.spacing.lg});
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const Logo = styled.img`
  height: 42px;
  filter: brightness(0) invert(1);
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    height: 36px;
  }
`

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  flex: 1;
`

const FooterLink = styled.a`
  font-size: 14px;
  color: ${({ $highlight }) => ($highlight ? '#4fc3f7' : 'rgba(255, 255, 255, 0.8)')};
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 12px;
  }
`

const LinkDivider = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 12px;
  }
`

const SocialLinks = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;
`

const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    width: 36px;
    height: 36px;
  }
`

const SocialIcon = styled.img`
  width: ${({ $size }) => $size || '24px'};
  height: ${({ $size }) => $size || '24px'};
  filter: brightness(0) invert(1);
`

const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl} 0`};
  margin-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} 0`};
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`

const Address = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 11px;
    line-height: 1.5;
  }
`

const Copyright = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    font-size: 11px;
  }
`

export default Footer
