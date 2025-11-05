import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const AnimalFriends = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [currentPage, setCurrentPage] = useState(1)

  const categories = ['전체', '포유류', '조류', '파충류·양서류']
  const itemsPerPage = 12

  const animals = [
    {
      id: 1,
      name: '유라시아수달',
      category: '포유류',
      image: '/images/otter.jpg',
      scientificName: 'Lutra lutra',
      habitat: '아시아, 북아프리카',
      diet: '육식성',
      description: '수달아과에 속하며 아시아와 북아프리카 일부에 분포합니다. 물에서 생활하는 포유류로 뛰어난 수영 실력을 자랑하며, 귀여운 외모와 장난기 많은 성격이 특징입니다.',
      features: ['뛰어난 수영', '장난기 많음', '사회적 동물'],
      location: '바다동물관',
      weight: '5-12kg',
      lifespan: '10-15년'
    },
    {
      id: 2,
      name: '바위너구리',
      category: '포유류',
      image: '/images/rock-hyrax.jpg',
      scientificName: 'Procavia capensis',
      habitat: '사하라사막 이남 아프리카',
      diet: '초식성',
      description: '바위너구리목 바위너구리과로 사하라사막 이남 아프리카에 서식합니다. 작은 포유류이지만 코끼리와 가까운 친척으로 알려져 있습니다.',
      features: ['바위 서식', '사회적 생활', '코끼리 근연종'],
      location: '초식동물마을',
      weight: '2-5kg',
      lifespan: '10-12년'
    },
    {
      id: 3,
      name: '코먼마모셋',
      category: '포유류',
      image: '/images/marmoset.jpg',
      scientificName: 'Callithrix jacchus',
      habitat: '브라질 중동부',
      diet: '잡식성',
      description: '영장목 꼬리감는원숭이과로 브라질 중동부가 원산지입니다. 작은 체구의 원숭이로 귀 주변의 흰 털이 특징입니다.',
      features: ['작은 체구', '흰 귀털', '나무 생활'],
      location: '원숭이마을',
      weight: '250-350g',
      lifespan: '12년'
    },
    {
      id: 4,
      name: '알락꼬리여우원숭이',
      category: '포유류',
      image: '/images/lemur.jpg',
      scientificName: 'Lemur catta',
      habitat: '마다가스카르섬 남부',
      diet: '잡식성',
      description: '영장목 여우원숭이과로 마다가스카르섬 남부에 분포합니다. 흑백 줄무늬 꼬리가 특징이며, 태양을 쬐는 자세로 유명합니다.',
      features: ['줄무늬 꼬리', '일광욕', '무리 생활'],
      location: '원숭이마을',
      weight: '2.2kg',
      lifespan: '16-19년'
    },
    {
      id: 5,
      name: '트리포큐파인',
      category: '포유류',
      image: '/images/porcupine.jpg',
      scientificName: 'Coendou prehensilis',
      habitat: '남아메리카',
      diet: '초식성',
      description: '설치목 아메리카포큐파인과로 남아메리카에 서식합니다. 나무 위에서 생활하며 긴 가시로 몸을 보호합니다.',
      features: ['긴 가시', '나무 생활', '야행성'],
      location: '열대동물관',
      weight: '2-5kg',
      lifespan: '12-17년'
    },
    {
      id: 6,
      name: '벌거숭이두더지쥐',
      category: '포유류',
      image: '/images/naked-mole-rat.jpg',
      scientificName: 'Heterocephalus glaber',
      habitat: '동아프리카',
      diet: '초식성',
      description: '설치목 뻐드렁니쥐과로 동아프리카가 서식지입니다. 털이 거의 없으며 땅속에서 집단 생활을 하는 독특한 포유류입니다.',
      features: ['무모', '땅속 생활', '여왕제 사회'],
      location: '꼬마동물마을',
      weight: '30-80g',
      lifespan: '30년'
    },
    {
      id: 7,
      name: '검은등자칼',
      category: '포유류',
      image: '/images/jackal.jpg',
      scientificName: 'Canis mesomelas',
      habitat: '아프리카 동남부',
      diet: '육식성',
      description: '식육목 개과로 아프리카 동남부에 분포합니다. 날렵한 몸매와 뛰어난 순발력을 가진 영리한 사냥꾼입니다.',
      features: ['날렵함', '높은 지능', '야행성'],
      location: '맹수마을',
      weight: '6-13kg',
      lifespan: '10-12년'
    },
    {
      id: 8,
      name: '스라소니',
      category: '포유류',
      image: '/images/lynx.jpg',
      scientificName: 'Lynx lynx',
      habitat: '유럽과 유라시아',
      diet: '육식성',
      description: '식육목 고양이과로 유럽과 유라시아에 서식합니다. 귀 끝의 검은 털과 턱수염이 특징이며, 뛰어난 사냥 능력을 자랑합니다.',
      features: ['귀 끝 털', '뛰어난 시력', '단독 생활'],
      location: '맹수마을',
      weight: '18-30kg',
      lifespan: '15-20년'
    },
    {
      id: 9,
      name: '붉은여우',
      category: '포유류',
      image: '/images/fox.jpg',
      scientificName: 'Vulpes vulpes peculiosa',
      habitat: '유라시아 북부, 북아메리카',
      diet: '잡식성',
      description: '식육목 개과로 유라시아 북부 및 북아메리카에 분포합니다. 붉은 털과 하얀 꼬리 끝이 특징이며 높은 적응력을 가지고 있습니다.',
      features: ['붉은 털', '높은 적응력', '영리함'],
      location: '맹수마을',
      weight: '5-10kg',
      lifespan: '8-10년'
    },
    {
      id: 10,
      name: '왈라루',
      category: '포유류',
      image: '/images/wallaroo.jpg',
      scientificName: 'Macropus robustus',
      habitat: '오스트레일리아',
      diet: '초식성',
      description: '유대목 캥거루과로 오스트레일리아에 서식합니다. 캥거루의 일종으로 강한 뒷다리와 긴 꼬리가 특징입니다.',
      features: ['강한 뒷다리', '점프력', '주머니 육아'],
      location: '초식동물마을',
      weight: '15-45kg',
      lifespan: '15-20년'
    },
    {
      id: 11,
      name: '미니말',
      category: '포유류',
      image: '/images/miniature-horse.jpg',
      scientificName: 'Equus ferus caballus',
      habitat: '미국, 유럽',
      diet: '초식성',
      description: '말과에 속하는 소형 말 품종으로 미국과 유럽에서 사육됩니다. 작은 체구에도 불구하고 튼튼하며 온순한 성격을 가지고 있습니다.',
      features: ['작은 체구', '온순함', '강한 체력'],
      location: '초식동물마을',
      weight: '70-100kg',
      lifespan: '25-35년'
    },
    {
      id: 12,
      name: '은색기번',
      category: '포유류',
      image: '/images/silvery-gibbon.jpg',
      scientificName: 'Hylobates moloch',
      habitat: '동남아시아 자바섬',
      diet: '잡식성',
      description: '영장목 긴팔원숭이과로 자바섬에 서식합니다. 긴 팔과 뛰어난 나무 타기 능력이 특징이며, 아름다운 노랫소리를 냅니다.',
      features: ['긴 팔', '나무 이동', '노래 부름'],
      location: '원숭이마을',
      weight: '5-8kg',
      lifespan: '25-30년'
    },
    {
      id: 13,
      name: '알파카',
      category: '포유류',
      image: '/images/alpaca.jpg',
      scientificName: 'Vicugna pacos',
      habitat: '안데스산맥',
      diet: '초식성',
      description: '낙타과에 속하며 칠레, 페루, 볼리비아의 안데스산맥이 원산지입니다. 부드러운 털로 유명하며 온순한 성격을 가지고 있습니다.',
      features: ['부드러운 털', '온순함', '높은 고도 적응'],
      location: '초식동물마을',
      weight: '55-90kg',
      lifespan: '15-20년'
    },
    {
      id: 14,
      name: '노랑뺨기번',
      category: '포유류',
      image: '/images/yellow-cheeked-gibbon.jpg',
      scientificName: 'Nomascus gabriellae',
      habitat: '베트남, 라오스, 중국 남부',
      diet: '잡식성',
      description: '영장목 긴팔원숭이과로 베트남, 라오스, 중국 남부에 서식합니다. 노란 뺨이 특징이며 나무에서 생활합니다.',
      features: ['노란 뺨', '긴 팔', '나무 생활'],
      location: '원숭이마을',
      weight: '5-8kg',
      lifespan: '28-30년'
    },
    {
      id: 15,
      name: '과나코',
      category: '포유류',
      image: '/images/guanaco.jpg',
      scientificName: 'Lama guanacoe',
      habitat: '남아메리카',
      diet: '초식성',
      description: '낙타과로 남아메리카에 서식합니다. 라마와 알파카의 야생 조상으로 알려져 있으며, 식물의 잎과 새순을 먹습니다.',
      features: ['야생 낙타과', '빠른 주행', '높은 고도 적응'],
      location: '초식동물마을',
      weight: '90-140kg',
      lifespan: '20-25년'
    },
    {
      id: 16,
      name: '남아메리카물개',
      category: '포유류',
      image: '/images/south-american-fur-seal.jpg',
      scientificName: 'Arctocephalus australis',
      habitat: '남아메리카 해안',
      diet: '육식성',
      description: '물개과로 남아메리카의 마젤란 해협 일대에 서식합니다. 물고기와 오징어를 주로 먹으며 뛰어난 수영 능력을 가지고 있습니다.',
      features: ['뛰어난 수영', '사회적 생활', '큰 무리'],
      location: '바다동물관',
      weight: '60-150kg',
      lifespan: '20-25년'
    },
    {
      id: 17,
      name: '다람쥐원숭이',
      category: '포유류',
      image: '/images/squirrel-monkey.jpg',
      scientificName: 'Saimiri sciureus',
      habitat: '코스타리카, 파나마, 페루, 볼리비아',
      diet: '잡식성',
      description: '영장목 꼬리감는원숭이과로 중남미 열대우림에 서식합니다. 작은 체구와 긴 꼬리가 특징이며 과일, 곤충을 먹습니다.',
      features: ['작은 체구', '긴 꼬리', '활발함'],
      location: '원숭이마을',
      weight: '0.7-1.1kg',
      lifespan: '15-20년'
    },
    {
      id: 18,
      name: '당나귀',
      category: '포유류',
      image: '/images/donkey.jpg',
      scientificName: 'Equus asinus',
      habitat: '전세계',
      diet: '초식성',
      description: '말과에 속하며 전세계에 분포합니다. 온순하고 근면한 성격으로 오랫동안 인간과 함께 생활해왔습니다.',
      features: ['온순함', '근면함', '강한 체력'],
      location: '초식동물마을',
      weight: '180-480kg',
      lifespan: '25-30년'
    },
    {
      id: 19,
      name: '돼지꼬리원숭이',
      category: '포유류',
      image: '/images/pig-tailed-macaque.jpg',
      scientificName: 'Macaca nemestrina',
      habitat: '북인도, 인도네시아',
      diet: '잡식성',
      description: '영장목 긴꼬리원숭이과로 북인도에서 인도네시아까지 분포합니다. 짧고 말린 꼬리가 돼지 꼬리를 닮았다고 해서 이름이 붙여졌습니다.',
      features: ['짧은 꼬리', '사회적 생활', '높은 지능'],
      location: '원숭이마을',
      weight: '5-15kg',
      lifespan: '25-30년'
    },
    {
      id: 20,
      name: '망토원숭이',
      category: '포유류',
      image: '/images/hamadryas-baboon.jpg',
      scientificName: 'Papio hamadryas',
      habitat: '아라비아반도, 이집트',
      diet: '잡식성',
      description: '영장목 긴꼬리원숭이과로 아라비아반도와 이집트에 서식합니다. 수컷의 은빛 갈기가 망토를 닮아 이런 이름이 붙었습니다.',
      features: ['은빛 갈기', '무리 생활', '위계질서'],
      location: '원숭이마을',
      weight: '10-30kg',
      lifespan: '20-30년'
    },
    {
      id: 21,
      name: '미어캣',
      category: '포유류',
      image: '/images/meerkat.jpg',
      scientificName: 'Suricata suricata',
      habitat: '앙골라 남서부, 남아프리카',
      diet: '잡식성',
      description: '몽구스과로 남아프리카에 서식합니다. 직립 자세로 주변을 경계하는 모습이 특징이며, 무리 생활을 합니다.',
      features: ['직립 자세', '사회적 생활', '경계병 역할'],
      location: '꼬마동물마을',
      weight: '0.6-1kg',
      lifespan: '12-14년'
    },
    {
      id: 22,
      name: '반달가슴곰',
      category: '포유류',
      image: '/images/asiatic-black-bear.jpg',
      scientificName: 'Ursus thibetanus',
      habitat: '시베리아, 중국, 한국',
      diet: '잡식성',
      description: '곰과로 시베리아, 중국, 한국 등에 서식합니다. 가슴의 V자형 흰색 무늬가 반달을 닮아 이런 이름이 붙었습니다.',
      features: ['가슴 반달무늬', '나무 타기', '동면'],
      location: '맹수마을',
      weight: '80-200kg',
      lifespan: '25-30년'
    },
    {
      id: 23,
      name: '사막여우',
      category: '포유류',
      image: '/images/fennec-fox.jpg',
      scientificName: 'Vulpes zerda',
      habitat: '북아프리카, 중동',
      diet: '잡식성',
      description: '개과로 북아프리카에서 중동까지 분포합니다. 큰 귀가 특징이며 사막의 더운 환경에 적응되어 있습니다.',
      features: ['큰 귀', '야행성', '사막 적응'],
      location: '맹수마을',
      weight: '1-1.5kg',
      lifespan: '10-14년'
    },
    {
      id: 24,
      name: '사자',
      category: '포유류',
      image: '/images/lion.jpg',
      scientificName: 'Panthera leo',
      habitat: '아프리카',
      diet: '육식성',
      description: '고양이과로 아프리카에 서식합니다. 백수의 왕으로 불리며, 수컷의 갈기와 무리 생활이 특징입니다.',
      features: ['갈기', '무리 사냥', '강력한 힘'],
      location: '맹수마을',
      weight: '120-250kg',
      lifespan: '10-14년'
    },
    {
      id: 25,
      name: '서발',
      category: '포유류',
      image: '/images/serval.jpg',
      scientificName: 'Leptailurus serval',
      habitat: '사하라사막 이남 아프리카',
      diet: '육식성',
      description: '고양이과로 사하라사막 이남 아프리카에 서식합니다. 긴 다리와 큰 귀가 특징이며 뛰어난 점프력을 가지고 있습니다.',
      features: ['긴 다리', '큰 귀', '뛰어난 점프력'],
      location: '맹수마을',
      weight: '8-18kg',
      lifespan: '10-12년'
    },
    {
      id: 26,
      name: '아누비스개코원숭이',
      category: '포유류',
      image: '/images/anubis-baboon.jpg',
      scientificName: 'Papio anubis',
      habitat: '동아프리카, 남아프리카',
      diet: '잡식성',
      description: '영장목 긴꼬리원숭이과로 동아프리카와 남아프리카에 서식합니다. 과일, 채소, 새알 등을 먹으며 무리 생활을 합니다.',
      features: ['강한 무리', '위계질서', '잡식성'],
      location: '원숭이마을',
      weight: '14-25kg',
      lifespan: '25-30년'
    },
    {
      id: 27,
      name: '그랜트얼룩말',
      category: '포유류',
      image: '/images/grant-zebra.jpg',
      scientificName: 'Equus burchelli boehmi',
      habitat: '동아프리카',
      diet: '초식성',
      description: '말과로 동아프리카에 서식합니다. 독특한 흑백 줄무늬가 특징이며 무리를 지어 생활합니다.',
      features: ['흑백 줄무늬', '무리 생활', '빠른 주행'],
      location: '초식동물마을',
      weight: '220-320kg',
      lifespan: '20-25년'
    },
    {
      id: 28,
      name: '일본원숭이',
      category: '포유류',
      image: '/images/japanese-macaque.jpg',
      scientificName: 'Macaca fuscata',
      habitat: '일본',
      diet: '잡식성',
      description: '영장목 긴꼬리원숭이과로 일본에 서식합니다. 추운 겨울을 견디며 온천에 몸을 담그는 모습으로 유명합니다.',
      features: ['온천 입욕', '추위 적응', '사회적 생활'],
      location: '원숭이마을',
      weight: '8-14kg',
      lifespan: '25-30년'
    },
    {
      id: 29,
      name: '작은발톱수달',
      category: '포유류',
      image: '/images/small-clawed-otter.jpg',
      scientificName: 'Aonyx cinereus',
      habitat: '인도, 남중국, 동남아시아',
      diet: '육식성',
      description: '수달아과로 인도, 남중국, 동남아시아에 서식합니다. 가장 작은 수달 종으로 작은 발톱이 특징입니다.',
      features: ['작은 체구', '작은 발톱', '사회적 생활'],
      location: '바다동물관',
      weight: '2.7-5.4kg',
      lifespan: '10-15년'
    },
    {
      id: 30,
      name: '점박이물범',
      category: '포유류',
      image: '/images/spotted-seal.jpg',
      scientificName: 'Phoca largha',
      habitat: '북태평양, 북대서양',
      diet: '육식성',
      description: '물범과로 북태평양과 북대서양에 서식합니다. 몸에 점무늬가 있으며 물고기를 주로 먹습니다.',
      features: ['점무늬', '뛰어난 수영', '물고기 사냥'],
      location: '바다동물관',
      weight: '65-115kg',
      lifespan: '30-35년'
    },
    {
      id: 31,
      name: '재규어',
      category: '포유류',
      image: '/images/jaguar.jpg',
      scientificName: 'Panthera onca',
      habitat: '북아메리카 남서부, 중앙아메리카, 아르헨티나 북부',
      diet: '육식성',
      description: '고양이과로 아메리카 대륙의 최대 고양이과 동물입니다. 강력한 턱힘과 수영 능력이 뛰어납니다.',
      features: ['강력한 턱', '수영', '점무늬'],
      location: '맹수마을',
      weight: '56-96kg',
      lifespan: '12-15년'
    },
    {
      id: 32,
      name: '점박이하이에나',
      category: '포유류',
      image: '/images/spotted-hyena.jpg',
      scientificName: 'Crocuta crocuta',
      habitat: '사하라사막 이남 아프리카',
      diet: '육식성',
      description: '하이에나과로 사하라사막 이남 아프리카에 서식합니다. 강한 턱과 뛰어난 사냥 능력을 가지고 있습니다.',
      features: ['강한 턱', '무리 사냥', '특이한 웃음소리'],
      location: '맹수마을',
      weight: '40-90kg',
      lifespan: '12-25년'
    },
    {
      id: 33,
      name: '붉은캥거루',
      category: '포유류',
      image: '/images/red-kangaroo.jpg',
      scientificName: 'Macropus rufus',
      habitat: '오스트레일리아',
      diet: '초식성',
      description: '캥거루과로 오스트레일리아에 서식합니다. 가장 큰 유대류이며 강력한 뒷다리로 빠르게 이동합니다.',
      features: ['강한 뒷다리', '긴 꼬리', '주머니 육아'],
      location: '초식동물마을',
      weight: '18-90kg',
      lifespan: '12-18년'
    },
    {
      id: 34,
      name: '아시아코끼리',
      category: '포유류',
      image: '/images/asian-elephant.jpg',
      scientificName: 'Elephas maximus',
      habitat: '인도, 동남아시아',
      diet: '초식성',
      description: '코끼리과로 인도와 동남아시아에 서식합니다. 높은 지능과 사회성을 가지고 있으며 긴 코가 특징입니다.',
      features: ['긴 코', '높은 지능', '사회적 생활'],
      location: '초식동물마을',
      weight: '2000-5000kg',
      lifespan: '60-70년'
    },
    {
      id: 35,
      name: '토끼',
      category: '포유류',
      image: '/images/rabbit.jpg',
      scientificName: 'Oryctolagus cuniculus',
      habitat: '전세계',
      diet: '초식성',
      description: '토끼과로 전세계에 분포합니다. 긴 귀와 강한 뒷다리가 특징이며 온순한 성격을 가지고 있습니다.',
      features: ['긴 귀', '온순함', '빠른 번식'],
      location: '꼬마동물마을',
      weight: '1.5-3kg',
      lifespan: '8-12년'
    },
    {
      id: 36,
      name: '아프리카포큐파인',
      category: '포유류',
      image: '/images/african-porcupine.jpg',
      scientificName: 'Hystrix cristata',
      habitat: '중앙아프리카, 남아프리카',
      diet: '초식성',
      description: '고슴도치과로 중앙 및 남아프리카에 서식합니다. 몸을 덮은 긴 가시로 몸을 보호합니다.',
      features: ['긴 가시', '야행성', '방어 자세'],
      location: '열대동물관',
      weight: '10-24kg',
      lifespan: '12-20년'
    },
    {
      id: 37,
      name: '퓨마',
      category: '포유류',
      image: '/images/puma.jpg',
      scientificName: 'Puma concolor',
      habitat: '북아메리카, 남아메리카 북부',
      diet: '육식성',
      description: '고양이과로 북아메리카와 남아메리카 북부에 서식합니다. 민첩한 사냥꾼으로 넓은 영역에서 생활합니다.',
      features: ['민첩함', '강한 점프력', '단독 생활'],
      location: '맹수마을',
      weight: '29-100kg',
      lifespan: '8-13년'
    },
    {
      id: 38,
      name: '검은꼬리프레리독',
      category: '포유류',
      image: '/images/black-tailed-prairie-dog.jpg',
      scientificName: 'Cynomys ludovicianus',
      habitat: '북아메리카',
      diet: '초식성',
      description: '다람쥐과로 북아메리카에 서식합니다. 땅속에 복잡한 굴을 파고 무리를 지어 생활합니다.',
      features: ['땅속 생활', '사회적 생활', '경계 울음'],
      location: '꼬마동물마을',
      weight: '0.5-1.5kg',
      lifespan: '5-8년'
    },
    {
      id: 39,
      name: '벵갈호랑이',
      category: '포유류',
      image: '/images/bengal-tiger.jpg',
      scientificName: 'Panthera tigris tigris',
      habitat: '방글라데시, 부탄, 미얀마, 인도, 네팔',
      diet: '육식성',
      description: '고양이과로 인도 아대륙에 서식합니다. 호랑이 아종 중 가장 수가 많으며 강력한 사냥꾼입니다.',
      features: ['강력한 힘', '줄무늬', '단독 사냥'],
      location: '맹수마을',
      weight: '100-260kg',
      lifespan: '8-10년'
    },
    {
      id: 40,
      name: '쇠재두루미',
      category: '조류',
      image: '/images/demoiselle-crane.jpg',
      scientificName: 'Anthropoides virgo',
      habitat: '중앙아시아, 동북아시아',
      diet: '잡식성',
      description: '두루미과로 중앙아시아와 동북아시아에 서식합니다. 우아한 자태와 긴 목이 특징이며, 혼합사료를 먹습니다.',
      features: ['우아한 자태', '긴 목', '무리 생활'],
      location: '물새장',
      weight: '2-3kg',
      lifespan: '20-25년'
    },
    {
      id: 41,
      name: '분홍펠리컨',
      category: '조류',
      image: '/images/great-white-pelican.jpg',
      scientificName: 'Pelecanus onocrotalus',
      habitat: '유럽, 아시아, 아프리카',
      diet: '육식성',
      description: '사다새과로 유럽, 아시아, 아프리카에 서식합니다. 큰 부리 주머니로 물고기를 잡으며, 무리를 지어 사냥합니다.',
      features: ['큰 부리 주머니', '무리 사냥', '흰색 깃털'],
      location: '물새장',
      weight: '9-15kg',
      lifespan: '16-30년'
    },
    {
      id: 42,
      name: '두루미',
      category: '조류',
      image: '/images/red-crowned-crane.jpg',
      scientificName: 'Grus japonensis',
      habitat: '한국, 일본, 중국, 시베리아',
      diet: '잡식성',
      description: '두루미과로 한국, 일본, 중국, 시베리아에 서식합니다. 머리의 붉은 관이 특징이며 천연기념물로 지정되어 있습니다.',
      features: ['붉은 관', '우아한 춤', '천연기념물'],
      location: '물새장',
      weight: '7-10kg',
      lifespan: '20-40년'
    },
    {
      id: 43,
      name: '왜가리',
      category: '조류',
      image: '/images/grey-heron.jpg',
      scientificName: 'Ardea cinerea',
      habitat: '유라시아대륙, 아프리카대륙',
      diet: '육식성',
      description: '백로과로 유라시아와 아프리카 대륙에 서식합니다. 긴 목과 다리로 물가에서 미꾸라지 등을 잡아먹습니다.',
      features: ['긴 목', '물가 생활', '날카로운 부리'],
      location: '물새장',
      weight: '1-2kg',
      lifespan: '15-25년'
    },
    {
      id: 44,
      name: '자카스펭귄',
      category: '조류',
      image: '/images/jackass-penguin.jpg',
      scientificName: 'Spheniscus demersus',
      habitat: '남아프리카 해안',
      diet: '육식성',
      description: '펭귄과로 남아프리카 해안에 서식합니다. 당나귀 같은 울음소리를 내서 자카스펭귄이라 불리며, 멸종위기종입니다.',
      features: ['당나귀 울음소리', '수영', '멸종위기'],
      location: '물새장',
      weight: '2-4kg',
      lifespan: '10-27년'
    },
    {
      id: 45,
      name: '해오라기',
      category: '조류',
      image: '/images/night-heron.jpg',
      scientificName: 'Nycticorax nycticorax',
      habitat: '유라시아대륙, 한국, 일본',
      diet: '육식성',
      description: '백로과로 유라시아대륙, 한국, 일본에 서식합니다. 야행성으로 밤에 물고기를 잡으며, 검은 등과 흰 배가 특징입니다.',
      features: ['야행성', '검은 등', '물고기 사냥'],
      location: '물새장',
      weight: '0.7-1kg',
      lifespan: '15-20년'
    },
    {
      id: 46,
      name: '홍부리황새',
      category: '조류',
      image: '/images/white-stork.jpg',
      scientificName: 'Ciconia ciconia',
      habitat: '유럽, 아프리카',
      diet: '육식성',
      description: '황새과로 유럽과 아프리카에 서식합니다. 붉은 부리와 긴 다리가 특징이며, 지붕 위에 둥지를 짓는 것으로 유명합니다.',
      features: ['붉은 부리', '긴 다리', '지붕 둥지'],
      location: '물새장',
      weight: '2.3-4.4kg',
      lifespan: '20-35년'
    },
    {
      id: 47,
      name: '흑따오기',
      category: '조류',
      image: '/images/black-headed-ibis.jpg',
      scientificName: 'Threskiornis melanocephalus',
      habitat: '인도, 동남아시아',
      diet: '육식성',
      description: '저어새과로 인도와 동남아시아에 서식합니다. 검은 머리와 흰 몸이 대조적이며, 긴 부리로 물가에서 먹이를 찾습니다.',
      features: ['검은 머리', '긴 부리', '물가 생활'],
      location: '물새장',
      weight: '1.5-2.5kg',
      lifespan: '15-20년'
    },
    {
      id: 48,
      name: '레오파드게코',
      category: '파충류·양서류',
      image: '/images/leopard-gecko.jpg',
      scientificName: 'Eublepharis macularius',
      habitat: '남아시아',
      diet: '육식성',
      description: '도마뱀붙이과로 남아시아에 서식합니다. 표범 무늬가 특징이며, 야행성으로 귀뚜라미 등의 곤충을 먹습니다.',
      features: ['표범 무늬', '야행성', '온순함'],
      location: '열대동물관',
      weight: '45-80g',
      lifespan: '10-20년'
    },
    {
      id: 49,
      name: '블루텅스킨크',
      category: '파충류·양서류',
      image: '/images/blue-tongued-skink.jpg',
      scientificName: 'Tiliqua scincoides',
      habitat: '오스트레일리아',
      diet: '잡식성',
      description: '도마뱀과로 오스트레일리아에 서식합니다. 파란 혀가 특징이며, 위협을 느끼면 혀를 내밀어 보입니다.',
      features: ['파란 혀', '온순함', '잡식성'],
      location: '열대동물관',
      weight: '300-500g',
      lifespan: '15-20년'
    },
    {
      id: 50,
      name: '콘스네이크',
      category: '파충류·양서류',
      image: '/images/corn-snake.jpg',
      scientificName: 'Elaphe guttata',
      habitat: '북아메리카',
      diet: '육식성',
      description: '뱀과로 북아메리카에 서식합니다. 옥수수 같은 무늬가 특징이며, 무독성으로 온순한 성격을 가지고 있습니다.',
      features: ['옥수수 무늬', '무독성', '온순함'],
      location: '열대동물관',
      weight: '900g',
      lifespan: '15-20년'
    },
    {
      id: 51,
      name: '볼파이톤',
      category: '파충류·양서류',
      image: '/images/ball-python.jpg',
      scientificName: 'Python regius',
      habitat: '중서부 아프리카',
      diet: '육식성',
      description: '비단뱀과로 중서부 아프리카에 서식합니다. 위협을 느끼면 공처럼 몸을 말아 볼파이톤이라 불립니다.',
      features: ['공 말기', '온순함', '야행성'],
      location: '열대동물관',
      weight: '1-2kg',
      lifespan: '20-30년'
    },
    {
      id: 52,
      name: '뱀목거북',
      category: '파충류·양서류',
      image: '/images/snake-necked-turtle.jpg',
      scientificName: 'Chelodina longicollis',
      habitat: '오스트레일리아, 뉴기니 남부',
      diet: '육식성',
      description: '뱀목거북과로 오스트레일리아와 뉴기니 남부에 서식합니다. 뱀처럼 긴 목이 특징이며 물고기를 잡아먹습니다.',
      features: ['긴 목', '수중 생활', '독특한 외형'],
      location: '열대동물관',
      weight: '1-1.5kg',
      lifespan: '30-50년'
    },
    {
      id: 53,
      name: '팬케이크거북',
      category: '파충류·양서류',
      image: '/images/pancake-tortoise.jpg',
      scientificName: 'Malacochersus tornieri',
      habitat: '동아프리카',
      diet: '초식성',
      description: '육지거북과로 동아프리카에 서식합니다. 납작한 등껍질이 팬케이크처럼 생겨 이런 이름이 붙었습니다.',
      features: ['납작한 등껍질', '바위 틈 생활', '빠른 이동'],
      location: '열대동물관',
      weight: '400-600g',
      lifespan: '30-35년'
    },
    {
      id: 54,
      name: '레오파드거북',
      category: '파충류·양서류',
      image: '/images/leopard-tortoise.jpg',
      scientificName: 'Stigmochelys pardalis',
      habitat: '수단, 남아프리카 사바나',
      diet: '초식성',
      description: '육지거북과로 수단과 남아프리카 사바나에 서식합니다. 표범 무늬 같은 등껍질 무늬가 특징입니다.',
      features: ['표범 무늬', '대형 거북', '초식성'],
      location: '열대동물관',
      weight: '18-40kg',
      lifespan: '50-100년'
    }
  ]

  const filteredAnimals = selectedCategory === '전체'
    ? animals
    : animals.filter(animal => animal.category === selectedCategory)

  const totalPages = Math.ceil(filteredAnimals.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAnimals = filteredAnimals.slice(startIndex, endIndex)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1) // 카테고리 변경 시 첫 페이지로
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
              <BreadcrumbText>어반 사파리</BreadcrumbText>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbDropdown
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <BreadcrumbDropdownButton>
                  애니멀 프렌즈
                  <DropdownIcon $isOpen={isDropdownOpen}>▼</DropdownIcon>
                </BreadcrumbDropdownButton>
                <DropdownMenu $isOpen={isDropdownOpen}>
                  <DropdownItem to="/safari-story">사파리 스토리</DropdownItem>
                  <DropdownItem to="/animal-friends">애니멀 프렌즈</DropdownItem>
                  <DropdownItem as="a" href="#safari-map">사파리 맵 & 가이드</DropdownItem>
                </DropdownMenu>
              </BreadcrumbDropdown>
            </Breadcrumb>
            <PageTitle>애니멀 프렌즈</PageTitle>
            <PageSubtitle>동물 현황</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <MainContent>
          {/* 동물 현황 통계 */}
          <IntroSection>
            <IntroLeft>
              <IntroYear>60여종 600여마리</IntroYear>
              <IntroMainText>다양한 동물들과<br/>함께하는 공간</IntroMainText>
            </IntroLeft>
            <IntroRight>
              <IntroDescription>
                서울어린이대공원에는 포유류, 조류, 파충류, 양서류 등 다양한 동물들이 살고 있습니다.
                각 동물들은 자연 서식지와 유사한 환경에서 건강하게 생활하며, 방문객들에게 생명의 소중함을 전합니다.
                전문 사육사들이 동물들의 건강과 복지를 위해 최선을 다하고 있습니다.
              </IntroDescription>
              <IntroStats>
                <IntroStatItem>
                  <IntroStatValue>60+</IntroStatValue>
                  <IntroStatLabel>동물 종</IntroStatLabel>
                </IntroStatItem>
                <IntroStatItem>
                  <IntroStatValue>600+</IntroStatValue>
                  <IntroStatLabel>개체 수</IntroStatLabel>
                </IntroStatItem>
              </IntroStats>
            </IntroRight>
          </IntroSection>

          {/* 카테고리 필터 */}
          <CategorySection>
            <CategoryTitle>동물 둘러보기</CategoryTitle>
            <CategoryTabs>
              {categories.map((category) => (
                <CategoryTab
                  key={category}
                  $isActive={selectedCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </CategoryTab>
              ))}
            </CategoryTabs>
          </CategorySection>

          {/* 동물 그리드 */}
          <AnimalsGrid>
            {currentAnimals.map((animal) => (
              <AnimalCard key={animal.id} onClick={() => setSelectedAnimal(animal)}>
                <AnimalCardImage src={animal.image} alt={animal.name} />
                <AnimalCardOverlay>
                  <AnimalCardCategory>{animal.category}</AnimalCardCategory>
                  <AnimalCardName>{animal.name}</AnimalCardName>
                  <AnimalCardScientific>{animal.scientificName}</AnimalCardScientific>
                </AnimalCardOverlay>
              </AnimalCard>
            ))}
          </AnimalsGrid>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <Pagination>
              <PageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                이전
              </PageButton>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PageNumber
                  key={page}
                  $isActive={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PageNumber>
              ))}
              <PageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                다음
              </PageButton>
            </Pagination>
          )}

          {/* 동물 상세 모달 */}
          {selectedAnimal && ReactDOM.createPortal(
            <>
              <ModalOverlay onClick={() => setSelectedAnimal(null)} />
              <Modal>
                <ModalCloseButton onClick={() => setSelectedAnimal(null)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </ModalCloseButton>
                <ModalImage src={selectedAnimal.image} alt={selectedAnimal.name} />
                <ModalContent>
                  <ModalCategory>{selectedAnimal.category}</ModalCategory>
                  <ModalTitle>{selectedAnimal.name}</ModalTitle>
                  <ModalScientific>{selectedAnimal.scientificName}</ModalScientific>
                  <ModalDescription>{selectedAnimal.description}</ModalDescription>

                  <ModalInfoGrid>
                    <ModalInfoItem>
                      <ModalInfoLabel>서식지</ModalInfoLabel>
                      <ModalInfoValue>{selectedAnimal.habitat}</ModalInfoValue>
                    </ModalInfoItem>
                    <ModalInfoItem>
                      <ModalInfoLabel>식성</ModalInfoLabel>
                      <ModalInfoValue>{selectedAnimal.diet}</ModalInfoValue>
                    </ModalInfoItem>
                    <ModalInfoItem>
                      <ModalInfoLabel>평균 체중</ModalInfoLabel>
                      <ModalInfoValue>{selectedAnimal.weight}</ModalInfoValue>
                    </ModalInfoItem>
                    <ModalInfoItem>
                      <ModalInfoLabel>수명</ModalInfoLabel>
                      <ModalInfoValue>{selectedAnimal.lifespan}</ModalInfoValue>
                    </ModalInfoItem>
                  </ModalInfoGrid>

                  <ModalSection>
                    <ModalSectionTitle>특징</ModalSectionTitle>
                    <ModalTagList>
                      {selectedAnimal.features.map((feature, idx) => (
                        <ModalTag key={idx}>{feature}</ModalTag>
                      ))}
                    </ModalTagList>
                  </ModalSection>

                  <ModalSection>
                    <ModalSectionTitle>관람 위치</ModalSectionTitle>
                    <ModalLocation>{selectedAnimal.location}</ModalLocation>
                  </ModalSection>
                </ModalContent>
              </Modal>
            </>,
            document.body
          )}
        </MainContent>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
  overflow-x: hidden;
`

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background-image: url('/images/fountain-hero.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 400px;
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.7), rgba(39, 174, 96, 0.75));
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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

const BreadcrumbText = styled.span`
  color: rgba(255, 255, 255, 0.9);
`

const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.6);
`

const BreadcrumbCurrent = styled.span`
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const BreadcrumbDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const BreadcrumbDropdownButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  font-family: inherit;

  &:hover {
    color: white;
  }
`

const DropdownIcon = styled.span`
  font-size: 10px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
  min-width: 200px;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
`

const DropdownItem = styled(Link)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lightGreen};
    color: ${({ theme }) => theme.colors.primary.green};
  }
`

const PageTitle = styled.h1`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`

const PageSubtitle = styled.p`
  font-size: 20px;
  opacity: 0.95;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const MainContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
  }
`

const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroYear = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`

const IntroMainText = styled.h2`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`

const IntroRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const IntroDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
`

const IntroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const IntroStatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const IntroStatValue = styled.p`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.green};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const IntroStatLabel = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`

const CategorySection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`

const CategoryTab = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary.green : 'white'};
  color: ${({ $isActive, theme }) =>
    $isActive ? 'white' : theme.colors.neutral.darkGray};
  border: 1px solid ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary.green : theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary.darkGreen : theme.colors.primary.lightGreen};
    color: ${({ $isActive, theme }) =>
      $isActive ? 'white' : theme.colors.primary.green};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const AnimalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const AnimalCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`

const AnimalCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${AnimalCard}:hover & {
    transform: scale(1.1);
  }
`

const AnimalCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: white;
  transition: padding 0.3s ease;

  ${AnimalCard}:hover & {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const AnimalCardCategory = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary.lightGreen};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const AnimalCardName = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const AnimalCardScientific = styled.p`
  font-size: 12px;
  font-style: italic;
  opacity: 0.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 100000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  z-index: 100001;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: grid;
  grid-template-columns: 1fr 1fr;
  animation: zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-height: 80vh;
    overflow-y: auto;
  }
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.green};
    color: white;
    transform: rotate(90deg);
  }
`

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const ModalCategory = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.green};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`

const ModalScientific = styled.p`
  font-size: 16px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ModalDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ModalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const ModalInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const ModalInfoLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral.midGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const ModalInfoValue = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`

const ModalSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ModalSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.neutral.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ModalTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ModalTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  color: ${({ theme }) => theme.colors.primary.green};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const ModalLocation = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.green};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary.lightGreen};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: inline-block;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const PageButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.neutral.lightGray : 'white'};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.neutral.midGray : theme.colors.neutral.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary.lightGreen};
    color: ${({ theme }) => theme.colors.primary.green};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }
`

const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary.green : 'white'};
  color: ${({ $isActive, theme }) =>
    $isActive ? 'white' : theme.colors.neutral.darkGray};
  border: 1px solid ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary.green : theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary.darkGreen : theme.colors.primary.lightGreen};
    color: ${({ $isActive, theme }) =>
      $isActive ? 'white' : theme.colors.primary.green};
    border-color: ${({ theme }) => theme.colors.primary.green};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 13px;
  }
`

export default AnimalFriends
