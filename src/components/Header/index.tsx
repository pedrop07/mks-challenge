'use client';

import { useCartStore } from '@/store/CartStore';
import { Cart } from '../Cart';
import {
  StyledLogoTitle,
  StyledHeader,
  StyledNav,
  StyledLogoSubTitle,
  StyledLogo,
} from './styles';

export function Header() {
  const cartItems = useCartStore((store) => store.cartItems);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>
          <StyledLogoTitle>MKS</StyledLogoTitle>
          <StyledLogoSubTitle>Sistemas</StyledLogoSubTitle>
        </StyledLogo>
        <Cart products={cartItems} />
      </StyledNav>
    </StyledHeader>
  );
}
