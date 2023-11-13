'use client';

import styled from 'styled-components';

export const StyledDeleteItemButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  z-index: 50;
  top: -15px;
  right: -15px;

  width: 0.8rem;
  height: 0.8rem;

  border-radius: 100%;
  padding: 0.75rem;
  background: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.1s ease-in;

  &:hover,
  &:focus {
    background: #bd0a0a;
    color: #fff;
  }

  @media (max-width: 640px) {
    top: 7px;
    right: 7px;

    font-size: 2rem;

    background: transparent;
    color: #000;
  }
`;

export const StyledCartItem = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.2rem 1.45rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;

  @media (max-width: 640px) {
    padding: 1rem 0.5rem;
    flex-direction: column;
  }
`;

export const StyledCartItemImageContainer = styled.div`
  width: 55px;
  aspect-ratio: 1/1;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCartItemName = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 400;
  font-size: 0.825rem;

  max-width: 6rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const StyledCartItemPrice = styled.span`
  color: #000;
  font-weight: 700;
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;

  margin-top: 1.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    margin-top: 0rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.priceForeground};
    background: ${({ theme }) => theme.colors.price};
  }
`;

export const StyledAmountTitle = styled.span`
  color: #000;
  font-size: 0.75rem;
  display: inline-block;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const StyledCartItemButtonContainer = styled.div`
  font-variant-numeric: tabular-nums;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 1px solid #bfbfbf;
  border-radius: 8px;
`;

export const StyledHandleAmountButton = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.45rem;
  font-weight: 500;

  padding: 0.35rem 0.65rem;
  width: 100%;
  height: 100%;

  color: #000;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #d1d1d18c;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
