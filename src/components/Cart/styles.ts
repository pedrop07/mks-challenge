'use client';

import { Drawer } from 'antd';
import { ShoppingCart } from 'lucide-react';
import styled from 'styled-components';

export const StyledEmptyCartContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  color: ${({ theme }) => theme.colors.muted};
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const StyledCartContainer = styled.button`
  all: unset;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
  padding: 0.75rem 0.95rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 640px) {
    padding: 0.5rem 0.6rem;
  }
`;

export const StyledCartIcon = styled(ShoppingCart)`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 640px) {
    width: 1.35rem;
    height: 1.35rem;
  }
`;

export const StyledCartCounter = styled.span`
  font-size: 1.2rem;
  font-weight: 700;

  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-close {
    position: absolute;
    right: 0;
  }
`;

export const StyledDrawerTitle = styled.h2`
  color: #fff;
  line-height: normal;
  font-size: 1.7rem;
`;

export const StyledCloseDrawerButton = styled.button`
  all: unset;
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;

  border-radius: 100%;
  padding: 0.75rem;
  background: #000;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background: #bd0a0a;
    color: #fff;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const StyledDrawerFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
`;

export const StyledTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 2.5rem;
  font-size: 1.75rem;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 1.25rem;
    padding: 1.625;
  }
`;

export const StyledCheckoutButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;

  background: #000;
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 2.5rem;
  font-size: 1.75rem;
  font-weight: 700;

  transition: background 0.2s ease;

  &:hover,
  &:focus {
    background: #2f2f2f;
  }

  @media (max-width: 640px) {
    font-size: 1.25rem;
    padding: 1.625;
  }
`;
