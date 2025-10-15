import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2초
    const interval = 20 // 20ms마다 업데이트
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onLoadingComplete()
          }, 300)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <LoadingContainer>
      <LogoContainer>
        <MainTitle>서울어린이대공원</MainTitle>
        <SubTitle>Seoul Children's Grand Park</SubTitle>
      </LogoContainer>

      {progress < 100 ? (
        <>
          <LoadingIcon>
            <Dot $delay={0} />
            <Dot $delay={0.2} />
            <Dot $delay={0.4} />
          </LoadingIcon>

          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </>
      ) : (
        <WelcomeText>Welcome</WelcomeText>
      )}

      <BottomText>자연과 체험이 공존하는 공간으로 초대합니다</BottomText>
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #5FBB6C 0%, #4CAF50 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
  text-align: center;
  letter-spacing: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`

const LoadingIcon = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => `${theme.spacing.xl} 0`};
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay}s;
`

const ProgressBarContainer = styled.div`
  width: 280px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 220px;
  }
`

const ProgressBar = styled.div`
  height: 100%;
  background: white;
  border-radius: 3px;
  width: ${({ $progress }) => $progress}%;
  transition: width 0.2s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`

const ProgressText = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  letter-spacing: 1px;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const WelcomeText = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  letter-spacing: 3px;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`

const BottomText = styled.p`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xxl};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`

export default LoadingScreen
