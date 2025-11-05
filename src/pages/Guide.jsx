import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Guide = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchCategory, setSearchCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaqId, setOpenFaqId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const tabs = [
    { id: 'all', label: '전체' },
    { id: 'visit', label: '관람안내' },
    { id: 'usage', label: '이용안내' },
    { id: 'transport', label: '교통안내' },
    { id: 'etc', label: '기타' }
  ]

  const faqData = [
    // 관람안내 10개
    {
      id: 1,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '서울어린이대공원 운영시간은 어떻게 되나요?',
      answer: '공원은 연중무휴 24시간 개방됩니다. 다만 시설물(놀이기구, 동물원 등)은 오전 10시부터 오후 6시까지 운영되며, 계절에 따라 운영시간이 변경될 수 있습니다.'
    },
    {
      id: 2,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '입장료는 얼마인가요?',
      answer: '서울어린이대공원은 무료로 입장하실 수 있습니다. 단, 공원 내 놀이시설과 일부 체험 프로그램은 별도의 이용권이 필요합니다.'
    },
    {
      id: 3,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '휴원일이 있나요?',
      answer: '공원은 연중무휴로 운영되며 휴원일이 없습니다. 다만 시설물 점검이나 기상악화 시 일부 시설의 운영이 중단될 수 있습니다.'
    },
    {
      id: 4,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '동물원 관람 시간은 어떻게 되나요?',
      answer: '동물원은 오전 10시부터 오후 5시 30분까지 운영됩니다. 입장 마감은 오후 5시이며, 동물 보호를 위해 정해진 시간 이후에는 입장이 제한됩니다.'
    },
    {
      id: 5,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '비 오는 날에도 관람할 수 있나요?',
      answer: '비가 오는 날에도 공원은 정상 운영됩니다. 다만 안전을 위해 일부 놀이기구와 야외 시설은 운영이 중단될 수 있으니 방문 전 확인해주시기 바랍니다.'
    },
    {
      id: 6,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '단체 관람 예약은 어떻게 하나요?',
      answer: '30인 이상 단체 관람 시 사전 예약이 필요합니다. 공원 홈페이지 또는 전화(02-450-9311)로 최소 3일 전 예약해주시기 바랍니다.'
    },
    {
      id: 7,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '가이드 투어 프로그램이 있나요?',
      answer: '네, 동물원 해설 프로그램과 생태 체험 프로그램이 운영됩니다. 홈페이지에서 프로그램 일정을 확인하시고 사전 예약하실 수 있습니다.'
    },
    {
      id: 8,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '어린이 체험 프로그램은 어떤 것이 있나요?',
      answer: '동물 먹이주기 체험, 식물 관찰 프로그램, 숲 해설 프로그램 등 다양한 체험 프로그램이 있습니다. 연령대별로 맞춤 프로그램이 운영되니 홈페이지를 참고해주세요.'
    },
    {
      id: 9,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '관람 소요 시간은 얼마나 걸리나요?',
      answer: '공원 전체를 둘러보시려면 약 3-4시간 정도 소요됩니다. 동물원만 관람하시는 경우 약 2시간, 놀이시설까지 이용하시면 반나절 정도 계획하시는 것이 좋습니다.'
    },
    {
      id: 10,
      category: 'visit',
      categoryLabel: '관람안내',
      question: '반려동물과 함께 입장할 수 있나요?',
      answer: '반려동물과 함께 입장 가능하지만, 동물원 및 일부 실내 시설에는 출입이 제한됩니다. 반드시 목줄을 착용하고 배변봉투를 지참해주시기 바랍니다.'
    },
    // 이용안내 10개
    {
      id: 11,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '놀이기구 이용권은 어디서 구매하나요?',
      answer: '놀이기구 이용권은 공원 내 매표소에서 구매하실 수 있습니다. 개별권과 자유이용권이 있으며, 온라인 사전 구매 시 할인 혜택을 받으실 수 있습니다.'
    },
    {
      id: 12,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '분실물이 발생하면 어떻게 해야 하나요?',
      answer: '분실물은 공원 관리사무소(02-450-9311)로 문의해주시기 바랍니다. 분실물 센터에서 보관 중인 물품을 확인하실 수 있으며, 방문하시거나 전화로 확인 가능합니다.'
    },
    {
      id: 13,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '휠체어 대여가 가능한가요?',
      answer: '네, 정문 안내소에서 무료로 휠체어를 대여하실 수 있습니다. 신분증을 맡기시면 당일 반납 시 돌려드립니다. 유모차도 동일하게 대여 가능합니다.'
    },
    {
      id: 14,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '물품 보관함이 있나요?',
      answer: '정문과 주요 시설 근처에 유료 물품 보관함이 있습니다. 소형 2,000원, 대형 3,000원이며, 당일 사용 기준입니다.'
    },
    {
      id: 15,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '수유실은 어디에 있나요?',
      answer: '공원 내 주요 건물마다 수유실이 마련되어 있습니다. 어린이회관, 식물원, 동물원 안내소 등에서 이용하실 수 있으며, 깨끗하게 관리되고 있습니다.'
    },
    {
      id: 16,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '식사는 어디서 할 수 있나요?',
      answer: '공원 내 여러 곳에 식당과 카페가 있으며, 지정된 피크닉 구역에서 도시락을 드실 수 있습니다. 편의점도 운영 중입니다.'
    },
    {
      id: 17,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '비상상황 발생 시 어떻게 해야 하나요?',
      answer: '공원 곳곳에 비상벨이 설치되어 있으며, 의무실이 운영 중입니다. 긴급 상황 시 02-450-9311로 연락하시거나 가까운 안내소로 문의해주세요.'
    },
    {
      id: 18,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '음식물 반입이 가능한가요?',
      answer: '도시락 등 개인 음식물 반입은 가능합니다. 다만 유리병이나 캔류는 안전을 위해 반입이 제한되며, 쓰레기는 반드시 되가져가 주시기 바랍니다.'
    },
    {
      id: 19,
      category: 'usage',
      categoryLabel: '이용안내',
      question: '사진 촬영이 자유롭게 가능한가요?',
      answer: '개인 촬영은 자유롭게 가능합니다. 다만 상업적 촬영이나 드론 촬영은 사전 허가가 필요하니 관리사무소에 문의해주시기 바랍니다.'
    },
    {
      id: 20,
      category: 'usage',
      categoryLabel: '이용안내',
      question: 'WiFi 사용이 가능한가요?',
      answer: '공원 주요 구역에서 무료 WiFi(Seoul_ChildrensPark)를 이용하실 수 있습니다. 접속 후 간단한 인증을 거치면 사용 가능합니다.'
    },
    // 교통안내 10개
    {
      id: 21,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '지하철로 어떻게 가나요?',
      answer: '지하철 7호선 어린이대공원역 1번 출구로 나오시면 도보 5분 거리입니다. 5호선 아차산역에서도 도보 10분 정도 소요됩니다.'
    },
    {
      id: 22,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '버스 이용 시 어떤 노선을 타야 하나요?',
      answer: '간선버스 2014, 2233, 3216번 또는 지선버스 2012, 3217번을 이용하시면 됩니다. 어린이대공원 정류장에서 하차하시면 됩니다.'
    },
    {
      id: 23,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '주차장이 있나요?',
      answer: '네, 공원 내 총 1,200대 규모의 주차장이 있습니다. 주차 요금은 평일 기준 2시간 2,000원이며, 추가 시간당 1,000원입니다.'
    },
    {
      id: 24,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '주차 요금 할인이 있나요?',
      answer: '경차는 50% 할인, 장애인 차량과 저공해 차량은 무료입니다. 다자녀 가구 차량은 할인카드 제시 시 30% 할인됩니다.'
    },
    {
      id: 25,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '주말에 주차하기 어렵나요?',
      answer: '주말과 공휴일에는 혼잡할 수 있으니 가급적 대중교통 이용을 권장합니다. 오전 일찍 방문하시면 주차가 수월합니다.'
    },
    {
      id: 26,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '자전거로 방문해도 되나요?',
      answer: '네, 공원 입구에 자전거 보관소가 있습니다. 다만 공원 내에서는 자전거를 끌고 다니셔야 하며, 지정 구역에서만 탑승 가능합니다.'
    },
    {
      id: 27,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '셔틀버스가 운영되나요?',
      answer: '현재 공원까지의 셔틀버스는 운영하지 않습니다. 지하철과 시내버스를 이용해주시기 바랍니다.'
    },
    {
      id: 28,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '택시 타고 가면 요금이 얼마나 나오나요?',
      answer: '강남역에서 약 15,000원, 홍대입구역에서 약 20,000원 정도 예상됩니다. 교통 상황에 따라 달라질 수 있습니다.'
    },
    {
      id: 29,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '공원 내부 이동 수단이 있나요?',
      answer: '공원 내에는 순환 트램이 운영됩니다. 주요 시설을 연결하며, 이용 요금은 성인 2,000원, 어린이 1,000원입니다.'
    },
    {
      id: 30,
      category: 'transport',
      categoryLabel: '교통안내',
      question: '주차장에서 입구까지 거리가 먼가요?',
      answer: '주차장에서 정문까지는 도보 3-5분 거리입니다. 장애인 주차구역은 정문과 더 가까운 곳에 마련되어 있습니다.'
    },
    // 기타 10개
    {
      id: 31,
      category: 'etc',
      categoryLabel: '기타',
      question: '공원에서 행사나 축제가 열리나요?',
      answer: '계절마다 다양한 행사와 축제가 개최됩니다. 봄 벚꽃축제, 여름 물놀이 축제, 가을 단풍축제 등이 있으니 홈페이지를 확인해주세요.'
    },
    {
      id: 32,
      category: 'etc',
      categoryLabel: '기타',
      question: '생일 파티나 단체 행사를 할 수 있나요?',
      answer: '네, 사전 예약을 통해 생일파티나 단체 행사를 진행하실 수 있습니다. 대관 문의는 02-450-9311로 연락주시기 바랍니다.'
    },
    {
      id: 33,
      category: 'etc',
      categoryLabel: '기타',
      question: '기념품을 살 수 있는 곳이 있나요?',
      answer: '정문과 동물원 근처에 기념품샵이 있습니다. 다양한 어린이 용품과 캐릭터 상품을 판매하고 있습니다.'
    },
    {
      id: 34,
      category: 'etc',
      categoryLabel: '기타',
      question: '날씨가 안 좋을 때 즐길 수 있는 실내 시설이 있나요?',
      answer: '식물원, 어린이 회관, 과학관 등 다양한 실내 시설이 있어 날씨와 관계없이 즐기실 수 있습니다.'
    },
    {
      id: 35,
      category: 'etc',
      categoryLabel: '기타',
      question: '자원봉사를 하고 싶은데 어떻게 신청하나요?',
      answer: '공원 홈페이지 자원봉사 게시판에서 신청하실 수 있습니다. 환경정화, 동물 돌봄, 행사 보조 등 다양한 활동이 있습니다.'
    },
    {
      id: 36,
      category: 'etc',
      categoryLabel: '기타',
      question: '흡연 구역이 따로 있나요?',
      answer: '공원은 전면 금연이며, 지정된 흡연 구역에서만 흡연이 가능합니다. 금연 구역에서 흡연 적발 시 과태료가 부과됩니다.'
    },
    {
      id: 37,
      category: 'etc',
      categoryLabel: '기타',
      question: '기업이나 단체 후원은 어떻게 하나요?',
      answer: '동물 입양, 시설 후원 등 다양한 후원 프로그램이 있습니다. 자세한 내용은 관리사무소로 문의해주시기 바랍니다.'
    },
    {
      id: 38,
      category: 'etc',
      categoryLabel: '기타',
      question: '장애인 편의시설은 잘 갖춰져 있나요?',
      answer: '네, 휠체어 경사로, 장애인 화장실, 장애인 주차구역 등이 잘 갖춰져 있으며, 모든 주요 시설에서 접근 가능합니다.'
    },
    {
      id: 39,
      category: 'etc',
      categoryLabel: '기타',
      question: '반려동물 동반 시 주의사항이 있나요?',
      answer: '반드시 목줄을 착용해야 하며, 배변봉투를 지참해주세요. 동물원과 일부 실내 시설은 출입이 제한됩니다.'
    },
    {
      id: 40,
      category: 'etc',
      categoryLabel: '기타',
      question: '공원에 대한 건의사항은 어디에 하나요?',
      answer: '홈페이지 고객의 소리 게시판이나 관리사무소(02-450-9311)로 의견을 보내주시면 검토 후 회신드립니다.'
    }
  ]

  const filteredFaqs = faqData.filter(faq => {
    const categoryMatch = activeTab === 'all' || faq.category === activeTab
    const searchCategoryMatch = searchCategory === 'all' || faq.category === searchCategory
    const searchQueryMatch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())

    return categoryMatch && searchCategoryMatch && searchQueryMatch
  })

  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentFaqs = filteredFaqs.slice(startIndex, startIndex + itemsPerPage)

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setCurrentPage(1)
    setOpenFaqId(null)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    setOpenFaqId(null)
  }

  return (
    <>
      <Header />
      <Container>
        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <HeroTitle>이용안내</HeroTitle>
            <HeroSubtitle>자주 묻는 질문을 확인해보세요</HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <TabContainer>
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                $isActive={activeTab === tab.id}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </TabContainer>

          <SearchContainer onSubmit={handleSearch}>
            <SearchSelect
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="all">전체</option>
              <option value="visit">관람안내</option>
              <option value="usage">이용안내</option>
              <option value="transport">교통안내</option>
              <option value="etc">기타</option>
            </SearchSelect>
            <SearchInputWrapper>
              <SearchInput
                type="text"
                placeholder="검색어를 입력하세요 (예: 티켓, 주차, 운영시간 등)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchButton type="submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </SearchButton>
            </SearchInputWrapper>
          </SearchContainer>

          <FaqList>
            {currentFaqs.length > 0 ? (
              currentFaqs.map((faq) => (
                <FaqItem key={faq.id} $isOpen={openFaqId === faq.id}>
                  <FaqQuestion onClick={() => toggleFaq(faq.id)}>
                    <QuestionLeft>
                      <QuestionIcon>Q</QuestionIcon>
                      <QuestionContent>
                        <CategoryTag>{faq.categoryLabel}</CategoryTag>
                        <QuestionText>{faq.question}</QuestionText>
                      </QuestionContent>
                    </QuestionLeft>
                    <ToggleButton $isOpen={openFaqId === faq.id}>
                      {openFaqId === faq.id ? '−' : '+'}
                    </ToggleButton>
                  </FaqQuestion>
                  {openFaqId === faq.id && (
                    <FaqAnswer>
                      <AnswerIcon>A</AnswerIcon>
                      <AnswerText>{faq.answer}</AnswerText>
                    </FaqAnswer>
                  )}
                </FaqItem>
              ))
            ) : (
              <NoResults>검색 결과가 없습니다.</NoResults>
            )}
          </FaqList>

          {totalPages > 1 && (
            <Pagination>
              <PageButton
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                ‹
              </PageButton>
              {[...Array(totalPages)].map((_, index) => (
                <PageNumber
                  key={index + 1}
                  $isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PageNumber>
              ))}
              <PageButton
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                ›
              </PageButton>
            </Pagination>
          )}
        </ContentSection>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
`

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background-image: url('/images/고객안내센터.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 350px;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(39, 174, 96, 0.9), rgba(46, 204, 113, 0.9));
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`

const TabContainer = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  background: white;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`

const Tab = styled.button`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.darkGray : 'white'};
  color: ${({ $isActive }) => ($isActive ? 'white' : '#666')};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  font-size: 16px;
  font-weight: ${({ theme, $isActive }) =>
    $isActive ? theme.typography.fontWeight.bold : theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.neutral.darkGray : '#f5f5f5'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: 14px;
    min-width: 80px;
  }
`

const SearchContainer = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const SearchSelect = styled.select`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 16px;
  background: white;
  cursor: pointer;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const SearchInputWrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  padding-right: 60px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.green};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.midGray};
  }
`

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  background: ${({ theme }) => theme.colors.neutral.darkGray};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.darkGray}dd;
  }
`

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const FaqItem = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`

const FaqQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const QuestionLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
`

const QuestionIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.primary.green};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: 16px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: 1;
`

const CategoryTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  color: ${({ theme }) => theme.colors.primary.darkGreen};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: fit-content;
`

const QuestionText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`

const ToggleButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.neutral.lightGray};
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.primary.green};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    font-size: 20px;
  }
`

const FaqAnswer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.xl}`};
  background: #f8f9fa;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.lg}`};
  }
`

const AnswerIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.neutral.darkGray};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: 16px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`

const AnswerText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.8;
  padding-top: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl};
  color: ${({ theme }) => theme.colors.neutral.midGray};
  font-size: 16px;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const PageButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.primary.green};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

const PageNumber = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.darkGray : 'white'};
  color: ${({ $isActive }) => ($isActive ? 'white' : '#666')};
  font-size: 14px;
  font-weight: ${({ theme, $isActive }) =>
    $isActive ? theme.typography.fontWeight.bold : theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.darkGray : theme.colors.neutral.lightGray};

  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.neutral.darkGray : '#f5f5f5'};
  }
`

export default Guide
