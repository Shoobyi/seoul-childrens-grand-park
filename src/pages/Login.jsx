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
        alert('로그인 성공! 환영합니다.')
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
            <LogoSection>
              <WelcomeText>환영합니다!</WelcomeText>
              <ServiceName>서울어린이대공원</ServiceName>
              <ServiceDescription>자연과 함께하는 즐거운 하루</ServiceDescription>
            </LogoSection>

            <FormSection>
              <FormTitle>로그인</FormTitle>
              <LoginForm onSubmit={handleSubmit}>
                <InputGroup>
                  <InputLabel>이메일</InputLabel>
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

              <Divider>
                <DividerLine />
                <DividerText>OR</DividerText>
                <DividerLine />
              </Divider>

              <SocialLoginSection>
                <SocialButton $color="#FEE500" $textColor="#000000">
                  <SocialIcon>💬</SocialIcon>
                  카카오로 시작하기
                </SocialButton>
                <SocialButton $color="#03C75A" $textColor="#FFFFFF">
                  <SocialIcon>📱</SocialIcon>
                  네이버로 시작하기
                </SocialButton>
                <SocialButton $color="#1877F2" $textColor="#FFFFFF">
                  <SocialIcon>📘</SocialIcon>
                  페이스북으로 시작하기
                </SocialButton>
              </SocialLoginSection>

              <SignupSection>
                <SignupText>아직 회원이 아니신가요?</SignupText>
                <SignupLink to="/signup">회원가입</SignupLink>
              </SignupSection>
            </FormSection>
          </LoginCard>

          <BenefitsSection>
            <BenefitCard>
              <BenefitIcon>🎫</BenefitIcon>
              <BenefitTitle>회원 특별 혜택</BenefitTitle>
              <BenefitText>입장권 10% 할인</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>🎉</BenefitIcon>
              <BenefitTitle>생일 축하 쿠폰</BenefitTitle>
              <BenefitText>생일월 무료 입장권</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>⭐</BenefitIcon>
              <BenefitTitle>포인트 적립</BenefitTitle>
              <BenefitText>결제 시 5% 적립</BenefitText>
            </BenefitCard>
          </BenefitsSection>
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
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const LoginCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.large};
  overflow: hidden;
`

const LogoSection = styled.div`
  background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  color: white;
`

const WelcomeText = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: 0.95;
`

const ServiceName = styled.h1`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ServiceDescription = styled.p`
  font-size: 16px;
  opacity: 0.9;
`

const FormSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

const FormTitle = styled.h2`
  font-size: 24px;
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

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.neutral.lightGray};
`

const DividerText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
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

const SocialIcon = styled.span`
  font-size: 20px;
`

const SignupSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
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

const BenefitsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const BenefitCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const BenefitIcon = styled.div`
  font-size: 36px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const BenefitTitle = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const BenefitText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

export default Login
