'use client';

import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.foreground};

  width: 100%;

  padding: 0.5rem 1rem;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
`;
