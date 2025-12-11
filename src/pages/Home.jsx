import React from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import MainBanner from '../components/sections/MainBanner'
import WelcomeSection from '../components/sections/WelcomeSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import NoticeSection from '../components/sections/NoticeSection'

const Home = () => {
  return (
    <>
      <Header />
      <OverlappingSections>
        <StickyBannerContainer>
          <MainBanner />
        </StickyBannerContainer>
        <ContentWrapper>
          <WelcomeSection />
          <ExperienceSection />
          <NoticeSection />
        </ContentWrapper>
      </OverlappingSections>
      <Footer />
    </>
  )
}

const OverlappingSections = styled.main`
  margin-top: -100px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    margin-top: -80px;
  }
`

const StickyBannerContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1;
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.iphone}) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
  }
`

export default Home
