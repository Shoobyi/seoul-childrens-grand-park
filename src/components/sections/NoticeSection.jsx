import React from 'react'
import styled from 'styled-components'

const NoticeSection = () => {
  const notices = [
    {
      id: 1,
      category: '공지',
      title: '2025년 설날 연휴 운영 안내',
      date: '2025.10.20',
      isNew: true
    },
    {
      id: 2,
      category: '이벤트',
      title: '가을맞이 특별 할인 이벤트 진행',
      date: '2025.10.18',
      isNew: true
    },
    {
      id: 3,
      category: '안내',
      title: '식물원 구역 일부 공사 안내',
      date: '2025.10.15',
      isNew: false
    },
    {
      id: 4,
      category: '공지',
      title: '주차장 이용 안내 및 요금 변경',
      date: '2025.10.12',
      isNew: false
    },
    {
      id: 5,
      category: '이벤트',
      title: '어린이 동물 그리기 대회 개최',
      date: '2025.10.10',
      isNew: false
    }
  ]

  return (
    <Section>
      <Container>
        <Header>
          <TitleWrapper>
            <SectionTitle>공지사항</SectionTitle>
            <ViewAllButton>전체보기</ViewAllButton>
          </TitleWrapper>
          <SectionSubtitle>서울어린이대공원의 새로운 소식을 확인하세요</SectionSubtitle>
        </Header>
        <NoticeList>
          {notices.map((notice) => (
            <NoticeItem key={notice.id}>
              <NoticeContent>
                <BadgeWrapper>
                  <Category $type={notice.category}>{notice.category}</Category>
                  {notice.isNew && <NewBadge>NEW</NewBadge>}
                </BadgeWrapper>
                <NoticeTitle>{notice.title}</NoticeTitle>
              </NoticeContent>
              <Date>{notice.date}</Date>
            </NoticeItem>
          ))}
        </NoticeList>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: white;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.black};
`

const ViewAllButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.lightGray};
    border-color: ${({ theme }) => theme.colors.neutral.darkGray};
  }
`

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.lightGray};
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  &:last-child {
    border-bottom: none;
  }
`

const NoticeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Category = styled.span`
  padding: ${({ theme }) => `4px ${theme.spacing.sm}`};
  background: ${({ $type }) =>
    $type === '공지' ? '#e3f2fd' :
    $type === '이벤트' ? '#fff3e0' :
    '#f3e5f5'};
  color: ${({ $type }) =>
    $type === '공지' ? '#1976d2' :
    $type === '이벤트' ? '#f57c00' :
    '#7b1fa2'};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const NewBadge = styled.span`
  padding: ${({ theme }) => `4px ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`

const Date = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.gray};
`

const NoticeTitle = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral.black};
  line-height: 1.5;
`

export default NoticeSection
