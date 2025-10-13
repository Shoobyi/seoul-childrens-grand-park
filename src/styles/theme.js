const theme = {
  colors: {
    primary: {
      green: '#2ECC71',
      darkGreen: '#27AE60',
      lightGreen: '#A8E6CF',
      sage: '#9CA896', // 디자인에서 사용된 연한 그린/그레이
    },
    secondary: {
      yellow: '#F9DC5C',
      darkYellow: '#F4A261',
      lightYellow: '#FFF4D6',
    },
    neutral: {
      white: '#FFFFFF',
      lightGray: '#F5F5F5',
      midGray: '#CCCCCC',
      darkGray: '#333333',
      navy: '#1a1f2e', // Footer 다크 배경
    },
    pastels: {
      pink: '#FFE4E1',
      purple: '#E6D4F0',
      mint: '#E0F5F5',
      peach: '#FFE5CC',
    }
  },
  typography: {
    fontFamily: {
      primary: "'Pretendard Variable', 'SUIT', sans-serif",
      secondary: "'Nunito', 'Quicksand', sans-serif",
    },
    fontSize: {
      h1: '40px',
      h2: '32px',
      h3: '28px',
      h4: '24px',
      body: '16px',
      small: '14px',
      tiny: '12px',
    },
    fontWeight: {
      bold: 700,
      semiBold: 600,
      medium: 500,
      regular: 400,
    },
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '20px',
    xl: '24px',
    round: '50%',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  container: {
    maxWidth: '1240px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.15)',
    large: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}

export default theme
