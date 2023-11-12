'use client';

import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);

  position: sticky;
  top: 0;
  z-index: 99;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  padding: 1.75rem 4rem;

  @media (max-width: 640px) {
    padding: 0.75rem 1.25rem;
  }
`;

export const StyledLogo = styled.h1``;

export const StyledLogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 2.5rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const StyledLogoSubTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  font-size: 1.25rem;

  margin-left: 12px;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
