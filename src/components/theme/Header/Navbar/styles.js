import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;

export const Logo = styled.div`
  align-items: center;
  img {
    height: 64px;
    width: 64px;
    margin-bottom: 0;

    @media (max-width: 960px) {
      height: 32px;
      width: 32px;
    }
  }
`;
