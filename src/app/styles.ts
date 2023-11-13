'use client';

import styled from 'styled-components';

export const StyledMainContainer = styled.main`
  max-width: 1040px;
  margin: 0rem auto;
  padding: 0rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 139px);
  height: 100%;

  @media (max-width: 640px) {
    min-height: calc(100vh - 97px);
  }
`;

export const StyledNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;
