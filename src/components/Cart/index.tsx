'use client';

import { useState } from 'react';
import { DrawerProps, Flex, notification } from 'antd';
import {
  StyledCartIcon,
  StyledCartContainer,
  StyledCartCounter,
  StyledDrawer,
  StyledDrawerTitle,
  StyledCloseDrawerButton,
  StyledEmptyCartContent,
  StyledDrawerFooter,
  StyledCheckoutButton,
  StyledTotalPrice,
} from './styles';
import { CartItem } from '../CartItem';
import { Player } from '@lottiefiles/react-lottie-player';
import { CartItem as TypeCartItem } from '@/@types/CartItem';
import { useCartStore } from '@/store/CartStore';
import { priceFormatter } from '@/lib/utils';

interface Props {
  products: TypeCartItem[];
}

const drawerStyles: DrawerProps = {
  styles: {
    header: {
      background: '#0F52BA',
      color: '#fff',
    },
    body: {
      background: '#0F52BA',
    },
    footer: {
      padding: 0,
      background: '#0F52BA',
    },
  },
};

export function Cart({ products }: Props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const clearCart = useCartStore((store) => store.clearCart);

  function handleCompleteOrder() {
    notification.success({
      message: 'Pedido realizado com sucesso! Agradecemos por sua compra.',
      duration: 3,
    });
    clearCart();
  }

  const totalPrice = products.reduce((acc, cur) => {
    acc += Number(cur.price) * Number(cur.cartAmount);

    return acc;
  }, 0);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  function DrawerBody() {
    if (!products || products.length === 0) {
      return (
        <StyledEmptyCartContent>
          Seu carrinho está vazio
          <Player src="/lottie/empty.json" autoplay keepLastFrame />
        </StyledEmptyCartContent>
      );
    }

    return (
      <Flex vertical gap={24}>
        {products.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </Flex>
    );
  }

  function DrawerFooter() {
    if (!products || products.length === 0) return;

    return (
      <StyledDrawerFooter>
        <StyledTotalPrice>
          <div>Total:</div>
          <div>R$ {priceFormatter(totalPrice)}</div>
        </StyledTotalPrice>
        <StyledCheckoutButton onClick={handleCompleteOrder}>
          Finalizar Compra
        </StyledCheckoutButton>
      </StyledDrawerFooter>
    );
  }

  return (
    <>
      <StyledCartContainer onClick={showDrawer}>
        <StyledCartIcon />
        <StyledCartCounter>{products.length}</StyledCartCounter>
      </StyledCartContainer>

      <StyledDrawer
        title={
          <StyledDrawerTitle>
            Carrinho
            <br /> de compras
          </StyledDrawerTitle>
        }
        placement="right"
        closeIcon={<StyledCloseDrawerButton>X</StyledCloseDrawerButton>}
        onClose={onCloseDrawer}
        open={openDrawer}
        width={500}
        styles={drawerStyles.styles}
        footer={<DrawerFooter />}
      >
        <DrawerBody />
      </StyledDrawer>
    </>
  );
}
