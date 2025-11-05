import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const TicketPurchase = () => {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [tickets, setTickets] = useState({
    adult: 0,
    teen: 0,
    child: 0
  })
  const [selectedOptions, setSelectedOptions] = useState({
    freePass: false,
    parking: false,
    guideTour: false
  })
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('card')

  const prices = {
    adult: 5000,
    teen: 3000,
    child: 2000,
    freePass: 20000,
    parking: 5000,
    guideTour: 10000
  }

  const getTotalPrice = () => {
    let total = 0
    const totalPeople = tickets.adult + tickets.teen + tickets.child

    if (selectedOptions.freePass && totalPeople > 0) {
      total += prices.freePass * totalPeople
    } else {
      total += tickets.adult * prices.adult
      total += tickets.teen * prices.teen
      total += tickets.child * prices.child
    }

    if (selectedOptions.parking) total += prices.parking
    if (selectedOptions.guideTour) total += prices.guideTour * totalPeople

    return total
  }

  const getTotalTickets = () => {
    return tickets.adult + tickets.teen + tickets.child
  }

  const handleTicketChange = (type, value) => {
    const newValue = Math.max(0, Math.min(10, value))
    setTickets({ ...tickets, [type]: newValue })
  }

  const handleNextStep = () => {
    if (step === 1 && (!selectedDate || getTotalTickets() === 0)) {
      alert('날짜와 인원을 선택해주세요.')
      return
    }
    if (step === 3 && (!userInfo.name || !userInfo.phone || !userInfo.email)) {
      alert('예매자 정보를 모두 입력해주세요.')
      return
    }
    if (step < 4) setStep(step + 1)
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleComplete = () => {
    alert('예매가 완료되었습니다! 이메일로 예매 확인서가 발송됩니다.')
    // 여기서 실제로는 서버에 데이터를 전송하고 결제를 처리합니다
  }

  // 날짜 옵션 생성 (오늘부터 30일)
  const getDateOptions = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dateString = date.toISOString().split('T')[0]
      const displayDate = `${date.getMonth() + 1}월 ${date.getDate()}일 (${['일', '월', '화', '수', '목', '금', '토'][date.getDay()]})`
      dates.push({ value: dateString, label: displayDate })
    }
    return dates
  }

  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <Breadcrumb>
              <BreadcrumbRouterLink to="/">홈</BreadcrumbRouterLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>입장권 구매</BreadcrumbCurrent>
            </Breadcrumb>
            <PageTitle>입장권 구매</PageTitle>
            <PageSubtitle>빠르고 간편한 온라인 예매</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <Container>
            {/* 진행 단계 표시 */}
            <ProgressBar>
              <ProgressStep $active={step >= 1} $current={step === 1}>
                <StepNumber>1</StepNumber>
                <StepLabel>날짜/인원</StepLabel>
              </ProgressStep>
              <ProgressLine $active={step >= 2} />
              <ProgressStep $active={step >= 2} $current={step === 2}>
                <StepNumber>2</StepNumber>
                <StepLabel>옵션선택</StepLabel>
              </ProgressStep>
              <ProgressLine $active={step >= 3} />
              <ProgressStep $active={step >= 3} $current={step === 3}>
                <StepNumber>3</StepNumber>
                <StepLabel>정보입력</StepLabel>
              </ProgressStep>
              <ProgressLine $active={step >= 4} />
              <ProgressStep $active={step >= 4} $current={step === 4}>
                <StepNumber>4</StepNumber>
                <StepLabel>결제완료</StepLabel>
              </ProgressStep>
            </ProgressBar>

            {/* Step 1: 날짜 및 인원 선택 */}
            {step === 1 && (
              <StepContent>
                <SectionTitle>날짜 및 인원 선택</SectionTitle>

                <FormSection>
                  <FormLabel>방문 날짜</FormLabel>
                  <DateSelect
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    <option value="">날짜를 선택하세요</option>
                    {getDateOptions().map(date => (
                      <option key={date.value} value={date.value}>{date.label}</option>
                    ))}
                  </DateSelect>
                </FormSection>

                <FormSection>
                  <FormLabel>인원 선택</FormLabel>
                  <TicketTypeGrid>
                    <TicketTypeCard>
                      <TicketTypeHeader>
                        <TicketTypeIcon>👨</TicketTypeIcon>
                        <div>
                          <TicketTypeName>성인</TicketTypeName>
                          <TicketTypeDesc>만 19세 이상</TicketTypeDesc>
                        </div>
                        <TicketTypePrice>{prices.adult.toLocaleString()}원</TicketTypePrice>
                      </TicketTypeHeader>
                      <TicketCounter>
                        <CounterButton onClick={() => handleTicketChange('adult', tickets.adult - 1)}>-</CounterButton>
                        <CounterDisplay>{tickets.adult}</CounterDisplay>
                        <CounterButton onClick={() => handleTicketChange('adult', tickets.adult + 1)}>+</CounterButton>
                      </TicketCounter>
                    </TicketTypeCard>

                    <TicketTypeCard>
                      <TicketTypeHeader>
                        <TicketTypeIcon>👦</TicketTypeIcon>
                        <div>
                          <TicketTypeName>청소년</TicketTypeName>
                          <TicketTypeDesc>만 13-18세</TicketTypeDesc>
                        </div>
                        <TicketTypePrice>{prices.teen.toLocaleString()}원</TicketTypePrice>
                      </TicketTypeHeader>
                      <TicketCounter>
                        <CounterButton onClick={() => handleTicketChange('teen', tickets.teen - 1)}>-</CounterButton>
                        <CounterDisplay>{tickets.teen}</CounterDisplay>
                        <CounterButton onClick={() => handleTicketChange('teen', tickets.teen + 1)}>+</CounterButton>
                      </TicketCounter>
                    </TicketTypeCard>

                    <TicketTypeCard>
                      <TicketTypeHeader>
                        <TicketTypeIcon>👶</TicketTypeIcon>
                        <div>
                          <TicketTypeName>어린이</TicketTypeName>
                          <TicketTypeDesc>만 3-12세</TicketTypeDesc>
                        </div>
                        <TicketTypePrice>{prices.child.toLocaleString()}원</TicketTypePrice>
                      </TicketTypeHeader>
                      <TicketCounter>
                        <CounterButton onClick={() => handleTicketChange('child', tickets.child - 1)}>-</CounterButton>
                        <CounterDisplay>{tickets.child}</CounterDisplay>
                        <CounterButton onClick={() => handleTicketChange('child', tickets.child + 1)}>+</CounterButton>
                      </TicketCounter>
                    </TicketTypeCard>
                  </TicketTypeGrid>
                </FormSection>

                <TotalSection>
                  <TotalLabel>총 인원</TotalLabel>
                  <TotalValue>{getTotalTickets()}명</TotalValue>
                </TotalSection>
              </StepContent>
            )}

            {/* Step 2: 옵션 선택 */}
            {step === 2 && (
              <StepContent>
                <SectionTitle>추가 옵션 선택</SectionTitle>

                <OptionsGrid>
                  <OptionCard
                    $selected={selectedOptions.freePass}
                    onClick={() => setSelectedOptions({...selectedOptions, freePass: !selectedOptions.freePass})}
                  >
                    <OptionBadge>인기</OptionBadge>
                    <OptionIcon>🎫</OptionIcon>
                    <OptionName>자유이용권</OptionName>
                    <OptionDesc>모든 놀이기구 무제한 이용</OptionDesc>
                    <OptionPrice>+{prices.freePass.toLocaleString()}원 /인</OptionPrice>
                    {selectedOptions.freePass && <CheckMark>✓</CheckMark>}
                  </OptionCard>

                  <OptionCard
                    $selected={selectedOptions.parking}
                    onClick={() => setSelectedOptions({...selectedOptions, parking: !selectedOptions.parking})}
                  >
                    <OptionIcon>🅿️</OptionIcon>
                    <OptionName>주차권</OptionName>
                    <OptionDesc>1일 주차 이용권</OptionDesc>
                    <OptionPrice>+{prices.parking.toLocaleString()}원</OptionPrice>
                    {selectedOptions.parking && <CheckMark>✓</CheckMark>}
                  </OptionCard>

                  <OptionCard
                    $selected={selectedOptions.guideTour}
                    onClick={() => setSelectedOptions({...selectedOptions, guideTour: !selectedOptions.guideTour})}
                  >
                    <OptionIcon>🎤</OptionIcon>
                    <OptionName>가이드 투어</OptionName>
                    <OptionDesc>전문 가이드와 함께하는 2시간 투어</OptionDesc>
                    <OptionPrice>+{prices.guideTour.toLocaleString()}원 /인</OptionPrice>
                    {selectedOptions.guideTour && <CheckMark>✓</CheckMark>}
                  </OptionCard>
                </OptionsGrid>

                <InfoBox>
                  <InfoIcon>ℹ️</InfoIcon>
                  <InfoText>
                    자유이용권을 선택하시면 기본 입장료 대신 자유이용권 가격으로 적용됩니다.
                  </InfoText>
                </InfoBox>
              </StepContent>
            )}

            {/* Step 3: 예매자 정보 입력 */}
            {step === 3 && (
              <StepContent>
                <SectionTitle>예매자 정보</SectionTitle>

                <FormGrid>
                  <FormField>
                    <FormLabel>이름 *</FormLabel>
                    <FormInput
                      type="text"
                      placeholder="이름을 입력하세요"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </FormField>

                  <FormField>
                    <FormLabel>휴대폰 번호 *</FormLabel>
                    <FormInput
                      type="tel"
                      placeholder="010-0000-0000"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </FormField>

                  <FormField $fullWidth>
                    <FormLabel>이메일 *</FormLabel>
                    <FormInput
                      type="email"
                      placeholder="example@email.com"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </FormField>
                </FormGrid>

                <FormSection>
                  <FormLabel>결제 수단</FormLabel>
                  <PaymentMethodGrid>
                    <PaymentMethodCard
                      $selected={paymentMethod === 'card'}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <PaymentIcon>💳</PaymentIcon>
                      <PaymentName>신용카드</PaymentName>
                    </PaymentMethodCard>
                    <PaymentMethodCard
                      $selected={paymentMethod === 'kakao'}
                      onClick={() => setPaymentMethod('kakao')}
                    >
                      <PaymentIcon>💬</PaymentIcon>
                      <PaymentName>카카오페이</PaymentName>
                    </PaymentMethodCard>
                    <PaymentMethodCard
                      $selected={paymentMethod === 'naver'}
                      onClick={() => setPaymentMethod('naver')}
                    >
                      <PaymentIcon>🟢</PaymentIcon>
                      <PaymentName>네이버페이</PaymentName>
                    </PaymentMethodCard>
                    <PaymentMethodCard
                      $selected={paymentMethod === 'account'}
                      onClick={() => setPaymentMethod('account')}
                    >
                      <PaymentIcon>🏦</PaymentIcon>
                      <PaymentName>계좌이체</PaymentName>
                    </PaymentMethodCard>
                  </PaymentMethodGrid>
                </FormSection>
              </StepContent>
            )}

            {/* Step 4: 결제 완료 */}
            {step === 4 && (
              <StepContent>
                <SectionTitle>예매 확인</SectionTitle>

                <SummaryBox>
                  <SummarySection>
                    <SummaryLabel>방문 날짜</SummaryLabel>
                    <SummaryValue>
                      {selectedDate && getDateOptions().find(d => d.value === selectedDate)?.label}
                    </SummaryValue>
                  </SummarySection>

                  <SummarySection>
                    <SummaryLabel>인원</SummaryLabel>
                    <SummaryValue>
                      {tickets.adult > 0 && `성인 ${tickets.adult}명`}
                      {tickets.teen > 0 && ` / 청소년 ${tickets.teen}명`}
                      {tickets.child > 0 && ` / 어린이 ${tickets.child}명`}
                    </SummaryValue>
                  </SummarySection>

                  {(selectedOptions.freePass || selectedOptions.parking || selectedOptions.guideTour) && (
                    <SummarySection>
                      <SummaryLabel>옵션</SummaryLabel>
                      <SummaryValue>
                        {selectedOptions.freePass && '자유이용권'}
                        {selectedOptions.parking && (selectedOptions.freePass ? ', 주차권' : '주차권')}
                        {selectedOptions.guideTour && ((selectedOptions.freePass || selectedOptions.parking) ? ', 가이드 투어' : '가이드 투어')}
                      </SummaryValue>
                    </SummarySection>
                  )}

                  <SummarySection>
                    <SummaryLabel>예매자</SummaryLabel>
                    <SummaryValue>{userInfo.name}</SummaryValue>
                  </SummarySection>

                  <SummarySection>
                    <SummaryLabel>연락처</SummaryLabel>
                    <SummaryValue>{userInfo.phone}</SummaryValue>
                  </SummarySection>

                  <SummarySection>
                    <SummaryLabel>이메일</SummaryLabel>
                    <SummaryValue>{userInfo.email}</SummaryValue>
                  </SummarySection>

                  <SummarySection>
                    <SummaryLabel>결제 수단</SummaryLabel>
                    <SummaryValue>
                      {paymentMethod === 'card' && '신용카드'}
                      {paymentMethod === 'kakao' && '카카오페이'}
                      {paymentMethod === 'naver' && '네이버페이'}
                      {paymentMethod === 'account' && '계좌이체'}
                    </SummaryValue>
                  </SummarySection>
                </SummaryBox>

                <AgreeSection>
                  <AgreeCheckbox type="checkbox" id="agree" />
                  <AgreeLabel htmlFor="agree">
                    개인정보 수집 및 이용에 동의합니다. (필수)
                  </AgreeLabel>
                </AgreeSection>
              </StepContent>
            )}

            {/* 하단 가격 및 버튼 */}
            <BottomBar>
              <PriceSection>
                <PriceLabel>총 결제금액</PriceLabel>
                <PriceValue>{getTotalPrice().toLocaleString()}원</PriceValue>
              </PriceSection>
              <ButtonSection>
                {step > 1 && (
                  <SecondaryButton onClick={handlePrevStep}>이전</SecondaryButton>
                )}
                {step < 4 ? (
                  <PrimaryButton onClick={handleNextStep}>다음</PrimaryButton>
                ) : (
                  <PrimaryButton onClick={handleComplete}>결제하기</PrimaryButton>
                )}
              </ButtonSection>
            </BottomBar>
          </Container>
        </ContentSection>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.neutral.white};
`

const HeroSection = styled.section`
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #3498DB 0%, #2ECC71 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.9), rgba(46, 204, 113, 0.9));
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 16px;
`

const BreadcrumbRouterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.6);
`

const BreadcrumbCurrent = styled.span`
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`

const PageSubtitle = styled.p`
  font-size: 20px;
  opacity: 0.95;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`

const ContentSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  min-height: 600px;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
`

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  transition: all 0.3s ease;

  ${ProgressStep}[data-active="false"] & {
    background: ${({ theme }) => theme.colors.neutral.lightGray};
    color: ${({ theme }) => theme.colors.neutral.midGray};
  }

  ${ProgressStep}[data-current="true"] & {
    box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.2);
    transform: scale(1.1);
  }
`

ProgressStep.defaultProps = {
  'data-active': function() { return this.$active },
  'data-current': function() { return this.$current }
}

const StepLabel = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`

const ProgressLine = styled.div`
  width: 80px;
  height: 3px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary.green : theme.colors.neutral.lightGray};
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
  }
`

const StepContent = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const FormSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const DateSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const TicketTypeGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const TicketTypeCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.green};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`

const TicketTypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const TicketTypeIcon = styled.div`
  font-size: 32px;
`

const TicketTypeName = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const TicketTypeDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const TicketTypePrice = styled.div`
  margin-left: auto;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const TicketCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
`

const CounterButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`

const CounterDisplay = styled.div`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  min-width: 50px;
  text-align: center;
`

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const TotalLabel = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const TotalValue = styled.div`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const OptionCard = styled.div`
  position: relative;
  border: 3px solid ${({ $selected, theme }) =>
    $selected ? theme.colors.primary.green : theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ $selected }) => $selected ? 'rgba(46, 204, 113, 0.05)' : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.green};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const OptionBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 12px;
  background: linear-gradient(135deg, #E74C3C, #FF6B6B);
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

const OptionIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const OptionName = styled.div`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const OptionDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const OptionPrice = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const CheckMark = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`

const InfoBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(52, 152, 219, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border-left: 4px solid #3498DB;
`

const InfoIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;
`

const InfoText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const FormField = styled.div`
  grid-column: ${({ $fullWidth }) => $fullWidth ? '1 / -1' : 'auto'};
`

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const PaymentMethodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`

const PaymentMethodCard = styled.div`
  border: 2px solid ${({ $selected, theme }) =>
    $selected ? theme.colors.primary.green : theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ $selected }) => $selected ? 'rgba(46, 204, 113, 0.05)' : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.green};
    transform: translateY(-2px);
  }
`

const PaymentIcon = styled.div`
  font-size: 32px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const PaymentName = styled.div`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const SummaryBox = styled.div`
  background: ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`

const SummaryLabel = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const SummaryValue = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const AgreeSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`

const AgreeCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const AgreeLabel = styled.label`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  cursor: pointer;
`

const BottomBar = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  margin: 0 -${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    align-items: stretch;
  }
`

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const PriceLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
`

const PriceValue = styled.div`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
`

const ButtonSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const PrimaryButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darkGreen};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const SecondaryButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.primary.green};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export default TicketPurchase
