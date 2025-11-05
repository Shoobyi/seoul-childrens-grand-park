import React from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Guide = () => {
  const operatingHours = [
    { period: '평일', hours: '오전 9시 ~ 오후 6시' },
    { period: '주말/공휴일', hours: '오전 9시 ~ 오후 7시' },
    { period: '하절기 (7~8월)', hours: '오전 9시 ~ 오후 8시' },
    { period: '동절기 (12~2월)', hours: '오전 9시 ~ 오후 5시' },
  ]

  const admissionFees = [
    { category: '어린이 (36개월~12세)', fee: '무료' },
    { category: '청소년 (13~18세)', fee: '1,000원' },
    { category: '어른 (19~64세)', fee: '1,000원' },
    { category: '경로 (65세 이상)', fee: '무료' },
  ]

  const facilities = [
    { icon: '🚻', name: '화장실', description: '공원 곳곳에 배치된 깨끗한 화장실' },
    { icon: '🅿️', name: '주차장', description: '총 1,200대 수용 가능 (유료)' },
    { icon: '🍽️', name: '식당/카페', description: '다양한 먹거리와 휴식 공간' },
    { icon: '🛒', name: '편의점', description: '공원 내 편의점 및 기념품샵' },
    { icon: '♿', name: '장애인 편의시설', description: '휠체어 대여 및 무장애 동선' },
    { icon: '👶', name: '수유실', description: '아기와 부모를 위한 편안한 공간' },
    { icon: '🚑', name: '구호소', description: '응급 상황 대비 의무실 운영' },
    { icon: '🗺️', name: '안내소', description: '공원 안내 및 관광 정보 제공' },
  ]

  const rules = [
    { icon: '🚭', title: '금연', description: '공원 내 지정된 흡연구역에서만 흡연 가능합니다.' },
    { icon: '🐕', title: '반려동물', description: '반려동물 동반 시 반드시 목줄 착용이 필요합니다.' },
    { icon: '🗑️', title: '쓰레기', description: '쓰레기는 분리수거함에 버려주세요.' },
    { icon: '🎵', title: '소음', description: '다른 방문객을 위해 큰 소리를 자제해 주세요.' },
    { icon: '🌳', title: '식물 보호', description: '식물과 꽃을 꺾거나 훼손하지 말아주세요.' },
    { icon: '🦁', title: '동물 먹이', description: '동물에게 허가되지 않은 먹이를 주지 말아주세요.' },
    { icon: '🚴', title: '자전거/킥보드', description: '지정된 구역에서만 이용 가능합니다.' },
    { icon: '🔥', title: '화기', description: '공원 내 화기 사용 및 취사는 금지됩니다.' },
  ]

  return (
    <>
      <Header />
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>이용안내</HeroTitle>
            <HeroSubtitle>서울어린이대공원을 방문하시기 전에 꼭 확인해주세요</HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          {/* 운영 시간 */}
          <Section>
            <SectionHeader>
              <SectionIcon>🕐</SectionIcon>
              <SectionTitle>운영 시간</SectionTitle>
            </SectionHeader>
            <SectionDescription>
              계절과 요일에 따라 운영 시간이 다르니 방문 전 확인해주세요.
            </SectionDescription>
            <HoursGrid>
              {operatingHours.map((item, index) => (
                <HoursCard key={index}>
                  <HoursPeriod>{item.period}</HoursPeriod>
                  <HoursTime>{item.hours}</HoursTime>
                </HoursCard>
              ))}
            </HoursGrid>
            <NoticeBox>
              <NoticeIcon>💡</NoticeIcon>
              <NoticeText>
                <strong>휴원일:</strong> 매주 월요일 (공휴일인 경우 다음 평일 휴원)
              </NoticeText>
            </NoticeBox>
          </Section>

          <Divider />

          {/* 입장료 */}
          <Section>
            <SectionHeader>
              <SectionIcon>🎫</SectionIcon>
              <SectionTitle>입장료</SectionTitle>
            </SectionHeader>
            <SectionDescription>
              서울어린이대공원은 저렴한 입장료로 모두에게 열려있습니다.
            </SectionDescription>
            <AdmissionGrid>
              {admissionFees.map((item, index) => (
                <AdmissionCard key={index} $isFree={item.fee === '무료'}>
                  <AdmissionCategory>{item.category}</AdmissionCategory>
                  <AdmissionFee $isFree={item.fee === '무료'}>{item.fee}</AdmissionFee>
                </AdmissionCard>
              ))}
            </AdmissionGrid>
            <NoticeBox>
              <NoticeIcon>💡</NoticeIcon>
              <NoticeText>
                <strong>무료 입장:</strong> 단체 관람 시 사전 예약 필요 (30인 이상)
              </NoticeText>
            </NoticeBox>
          </Section>

          <Divider />

          {/* 편의 시설 */}
          <Section>
            <SectionHeader>
              <SectionIcon>🏢</SectionIcon>
              <SectionTitle>편의 시설</SectionTitle>
            </SectionHeader>
            <SectionDescription>
              방문객 모두가 편안하게 즐길 수 있도록 다양한 편의시설을 제공합니다.
            </SectionDescription>
            <FacilitiesGrid>
              {facilities.map((item, index) => (
                <FacilityCard key={index}>
                  <FacilityIcon>{item.icon}</FacilityIcon>
                  <FacilityName>{item.name}</FacilityName>
                  <FacilityDescription>{item.description}</FacilityDescription>
                </FacilityCard>
              ))}
            </FacilitiesGrid>
          </Section>

          <Divider />

          {/* 이용 규칙 */}
          <Section>
            <SectionHeader>
              <SectionIcon>📋</SectionIcon>
              <SectionTitle>이용 규칙</SectionTitle>
            </SectionHeader>
            <SectionDescription>
              모두가 안전하고 즐거운 시간을 보낼 수 있도록 다음 규칙을 지켜주세요.
            </SectionDescription>
            <RulesGrid>
              {rules.map((item, index) => (
                <RuleCard key={index}>
                  <RuleIcon>{item.icon}</RuleIcon>
                  <RuleContent>
                    <RuleTitle>{item.title}</RuleTitle>
                    <RuleDescription>{item.description}</RuleDescription>
                  </RuleContent>
                </RuleCard>
              ))}
            </RulesGrid>
          </Section>

          <ContactSection>
            <ContactTitle>문의사항이 있으신가요?</ContactTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactText>
                  <ContactLabel>전화</ContactLabel>
                  <ContactValue>02-450-9311</ContactValue>
                </ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                <ContactText>
                  <ContactLabel>이메일</ContactLabel>
                  <ContactValue>info@childrenpark.or.kr</ContactValue>
                </ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactText>
                  <ContactLabel>주소</ContactLabel>
                  <ContactValue>서울시 광진구 능동로 216</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactInfo>
          </ContactSection>
        </ContentSection>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.green} 0%, ${({ theme }) => theme.colors.primary.darkGreen} 100%);
  padding: ${({ theme }) => `${theme.spacing.xxxl} 0 ${theme.spacing.xxl}`};
  margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} 0 ${theme.spacing.xl}`};
  }
`

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const ContentSection = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const SectionIcon = styled.div`
  font-size: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const SectionDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const HoursCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border: 2px solid ${({ theme }) => theme.colors.primary.lightGreen};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const HoursPeriod = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const HoursTime = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const NoticeBox = styled.div`
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const NoticeIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;
`

const NoticeText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.5;

  strong {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary.darkGreen};
  }
`

const AdmissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const AdmissionCard = styled.div`
  background: ${({ $isFree, theme }) =>
    $isFree ? `linear-gradient(135deg, ${theme.colors.primary.lightGreen} 0%, #E0F5F5 100%)` : 'white'};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border: 2px solid ${({ $isFree, theme }) =>
    $isFree ? theme.colors.primary.green : theme.colors.neutral.lightGray};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const AdmissionCategory = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const AdmissionFee = styled.div`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ $isFree, theme }) =>
    $isFree ? theme.colors.primary.green : theme.colors.primary.darkGreen};
`

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const FacilityCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const FacilityIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const FacilityName = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const FacilityDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  line-height: 1.5;
`

const RulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const RuleCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const RuleIcon = styled.div`
  font-size: 32px;
  flex-shrink: 0;
`

const RuleContent = styled.div`
  flex: 1;
`

const RuleTitle = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const RuleDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  line-height: 1.5;
`

const Divider = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    ${({ theme }) => theme.colors.neutral.lightGray} 50%,
    transparent 100%
  );
  margin: ${({ theme }) => `${theme.spacing.xxxl} 0`};
`

const ContactSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.green} 0%, ${({ theme }) => theme.colors.primary.darkGreen} 100%);
  padding: ${({ theme }) => theme.spacing.xxxl};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

const ContactTitle = styled.h2`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  flex-wrap: wrap;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }
`

const ContactIcon = styled.div`
  font-size: 32px;
  flex-shrink: 0;
`

const ContactText = styled.div`
  text-align: left;
`

const ContactLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ContactValue = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: white;
`

export default Guide
