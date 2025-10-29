import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // 계정 정보
  const VALID_ACCOUNT = {
    email: '1111@naver.com',
    password: '1111'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // 로그인 검증
    setTimeout(() => {
      if (email === VALID_ACCOUNT.email && password === VALID_ACCOUNT.password) {
        // 로그인 성공
        // 로컬 스토리지에 로그인 상태 저장
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userEmail', email)
        // 홈으로 리다이렉트
        navigate('/')
      } else {
        // 로그인 실패
        setError('이메일 또는 비밀번호가 올바르지 않습니다.')
        setIsLoading(false)
      }
    }, 500) // 로딩 효과를 위한 지연
  }

  return (
    <>
      <Header />
      <PageContainer>
        <LoginWrapper>
          <LoginCard>
            <LeftSection>
              <FormTitle>로그인</FormTitle>
              <LoginForm onSubmit={handleSubmit}>
                <InputGroup>
                  <InputLabel>이메일 주소</InputLabel>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <InputLabel>비밀번호</InputLabel>
                  <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>

                <OptionsRow>
                  <CheckboxLabel>
                    <Checkbox type="checkbox" />
                    <CheckboxText>로그인 상태 유지</CheckboxText>
                  </CheckboxLabel>
                  <ForgotLink href="#forgot">비밀번호 찾기</ForgotLink>
                </OptionsRow>

                <SubmitButton type="submit">로그인</SubmitButton>
              </LoginForm>

              <SignupSection>
                <SignupText>아직 회원이 아니신가요?</SignupText>
                <SignupLink to="/signup">회원가입</SignupLink>
              </SignupSection>
            </LeftSection>

            <RightSection>
              <SocialTitle>소셜 미디어로 로그인</SocialTitle>
              <SocialLoginSection>
                <SocialButton $color="#FEE500" $textColor="#000000">
                  <SocialIconImg src="/icons/kakao.svg" alt="카카오" />
                  카카오로 시작하기
                </SocialButton>
                <SocialButton $color="#03C75A" $textColor="#FFFFFF">
                  <SocialIconImg src="/icons/naver.svg" alt="네이버" />
                  네이버로 시작하기
                </SocialButton>
                <SocialButton $color="#000000" $textColor="#FFFFFF">
                  <SocialIconImg src="/icons/x-social.svg" alt="X" $invert />
                  X로 시작하기
                </SocialButton>
              </SocialLoginSection>
            </RightSection>
          </LoginCard>
        </LoginWrapper>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #E8F8F5 0%, #FFF9E6 100%);
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  padding-top: calc(${({ theme }) => theme.spacing.xxxl} + 80px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
    padding-top: calc(${({ theme }) => theme.spacing.xl} + 60px);
  }
`

const LoginWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 500px;
  }
`

const LoginCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.large};
  overflow: hidden;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const LeftSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-right: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

const RightSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #F8FFF9 0%, #FFFEF5 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

const SocialTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const FormTitle = styled.h2`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const InputLabel = styled.label`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
    box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.midGray};
  }
`

const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary.green};
`

const CheckboxText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const ForgotLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.green};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.darkGreen};
    text-decoration: underline;
  }
`

const SubmitButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }
`

const SocialLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ $textColor }) => $textColor};
  background: ${({ $color }) => $color};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  &:active {
    transform: translateY(0);
  }
`

const SocialIconImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: ${({ $invert }) => ($invert ? 'brightness(0) invert(1)' : 'none')};
`

const SignupSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const SignupText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const SignupLink = styled(Link)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.darkGreen};
    text-decoration: underline;
  }
`

export default Login
