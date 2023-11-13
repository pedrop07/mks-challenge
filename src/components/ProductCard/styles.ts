import styled from 'styled-components';

export const StyledProductCard = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const StyledProductCardFooter = styled.button`
  all: unset;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;

  padding: 0.5rem;
  border-radius: 0px 0px 8px 8px;

  &:hover {
    background: #0f52babf;
  }
`;

export const StyledProductCardBody = styled.div`
  padding: 0.875rem;
`;

export const StyledProductImageContainer = styled.div`
  width: 150px;
  aspect-ratio: 1/1;
  position: relative;
  margin: 0 auto 1rem;

  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const StyledProductName = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 1rem;
  font-weight: 400;
`;

export const StyledProductPrice = styled.span`
  font-variant-numeric: tabular-nums;
  display: inline-block;
  height: 100%;

  padding: 0.25rem 0.5rem;
  border-radius: 5px;

  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.priceForeground};
  background: ${({ theme }) => theme.colors.price};
`;

export const StyledProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 120%;

  margin-top: 0.5rem;
`;
