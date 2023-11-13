import styled from 'styled-components';

export const StyledProductListContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0rem;
`;

export const StyledErrorContainer = styled.main`
  max-width: 1040px;
  margin: 7.25rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 0 1rem;
    margin: 1.25rem auto;
  }
`;

export const StyledErrorTitle = styled.h2`
  font-size: 1.875rem;
  line-height: normal;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const StyledErrorDescription = styled.p`
  margin-top: 0.65rem;
  max-width: 36rem;
  text-align: center;
`;
