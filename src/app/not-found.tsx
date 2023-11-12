'use client';

import { Button } from 'antd';
import Link from 'next/link';
import { StyledNotFoundContainer } from './styles';

export default function NotFound() {
  return (
    <StyledNotFoundContainer>
      <h2>A página que você está tentando acessar não existe.</h2>
      <Link href="/">
        <Button type="primary">Página inicial</Button>
      </Link>
    </StyledNotFoundContainer>
  );
}
