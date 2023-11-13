'use client';

import { Product } from '@/interfaces/Product';
import {
  StyledProductCard,
  StyledProductCardBody,
  StyledProductCardFooter,
  StyledProductDescription,
  StyledProductImageContainer,
  StyledProductName,
  StyledProductPrice,
} from './styles';
import Image from 'next/image';
import { Flex } from 'antd';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/CartStore';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const addItemToCart = useCartStore((store) => store.addItemToCart);

  function handleAddItemToCart() {
    addItemToCart(product);
  }

  return (
    <StyledProductCard>
      <StyledProductCardBody>
        <StyledProductImageContainer>
          <Image
            alt={product.name}
            src={product.photo}
            style={{ objectFit: 'cover' }}
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcWw8AAb8BHjgUU1kAAAAASUVORK5CYII="
          />
        </StyledProductImageContainer>
        <Flex gap={6} justify="space-between">
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPrice>R${product.price}</StyledProductPrice>
        </Flex>
        <StyledProductDescription>
          {product.description}
        </StyledProductDescription>
      </StyledProductCardBody>
      <StyledProductCardFooter onClick={handleAddItemToCart}>
        <ShoppingBag size={18} />
        comprar
      </StyledProductCardFooter>
    </StyledProductCard>
  );
}
