'use client';

import { Col, Row, Skeleton } from 'antd';
import { ProductCard } from '../ProductCard';
import {
  StyledErrorContainer,
  StyledErrorDescription,
  StyledErrorTitle,
  StyledProductListContainer,
} from './styles';
import { Player } from '@lottiefiles/react-lottie-player';
import { useProductsQuery } from '@/hooks/useProductsQuery';

export function ProductsList() {
  const skeletons = Array.from({ length: 8 }, (_, index) => index);
  const { data, error, isLoading } = useProductsQuery();

  if (isLoading) {
    return (
      <StyledProductListContainer>
        <Row gutter={[22, 30]}>
          {skeletons.map((skeleton) => {
            return (
              <Col xs={24} sm={12} md={8} xl={6} key={skeleton}>
                <Skeleton.Button
                  style={{ height: 300, width: '100%' }}
                  block
                  active
                />
              </Col>
            );
          })}
        </Row>
      </StyledProductListContainer>
    );
  }

  if (error)
    return (
      <StyledErrorContainer>
        <Player src="/lottie/error.json" autoplay keepLastFrame />
        <StyledErrorTitle>Algo de inesperado ocorreu</StyledErrorTitle>
        <StyledErrorDescription>
          Não conseguimos listar os produtos neste momento. Por favor, tente
          novamente mais tarde.
        </StyledErrorDescription>
      </StyledErrorContainer>
    );

  if (data) {
    return (
      <StyledProductListContainer>
        <Row gutter={[22, 30]}>
          {data.products.map((product) => {
            return (
              <Col xs={24} sm={12} md={8} xl={6} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </StyledProductListContainer>
    );
  }
}
