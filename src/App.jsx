import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Home from './pages/Home'
import SafariStory from './pages/SafariStory'
import AnimalFriends from './pages/AnimalFriends'
import IndoorGarden from './pages/IndoorGarden'
import OutdoorGarden from './pages/OutdoorGarden'
import AdventureZone from './pages/AdventureZone'
import PlayGround from './pages/PlayGround'
import FestivalGuide from './pages/FestivalGuide'
import TicketPurchase from './pages/TicketPurchase'
import Guide from './pages/Guide'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import LoadingScreen from './components/common/LoadingScreen'

function App() {
  // 세션 중 한 번만 로딩 화면 표시
  const [showLoading, setShowLoading] = useState(() => {
    return !sessionStorage.getItem('hasSeenLoading')
  })
  const [isSliding, setIsSliding] = useState(false)

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasSeenLoading', 'true')
    setIsSliding(true)
    setTimeout(() => {
      setShowLoading(false)
    }, 700) // 애니메이션이 완전히 끝난 후 제거
  }

  return (
    <>
      {showLoading && (
        <LoadingWrapper $isSliding={isSliding}>
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </LoadingWrapper>
      )}
      <MainContent $isSliding={isSliding}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safari-story" element={<SafariStory />} />
          <Route path="/animal-friends" element={<AnimalFriends />} />
          <Route path="/indoor-garden" element={<IndoorGarden />} />
          <Route path="/outdoor-garden" element={<OutdoorGarden />} />
          <Route path="/adventure-zone" element={<AdventureZone />} />
          <Route path="/playground" element={<PlayGround />} />
          <Route path="/festival-guide" element={<FestivalGuide />} />
          <Route path="/tickets" element={<TicketPurchase />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </MainContent>
    </>
  )
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  animation: ${({ $isSliding }) => ($isSliding ? fadeOut : 'none')} 0.6s ease-out forwards;
`

const MainContent = styled.div`
  position: relative;
  opacity: 1;
  animation: ${({ $isSliding }) => ($isSliding ? fadeInScale : 'none')} 0.8s ease-out forwards;
`

export default App
