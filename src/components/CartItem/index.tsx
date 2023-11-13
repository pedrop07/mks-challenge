import Image from 'next/image';
import {
  StyledDeleteItemButton,
  StyledCartItem,
  StyledCartItemActionButtonsContainer,
  StyledCartItemActionButtonsTitle,
  StyledCartItemButtonContainer,
  StyledCartItemImageContainer,
  StyledCartItemName,
  StyledCartItemPrice,
} from './styles';
import { Button, Divider, Flex, Popover } from 'antd';
import { useState } from 'react';
import { useCartStore } from '@/store/CartStore';
import { CartItem } from '@/interfaces/CartItem';

interface Props {
  cartItem: CartItem;
}

export function CartItem({ cartItem }: Props) {
  const [open, setOpen] = useState(false);
  const removeItemFromCart = useCartStore((store) => store.removeItemFromCart);
  const incrementCartAmount = useCartStore(
    (store) => store.incrementCartAmount,
  );
  const decrementCartAmount = useCartStore(
    (store) => store.decrementCartAmount,
  );

  function handleDeleteItem() {
    removeItemFromCart(cartItem);
  }

  function handleIncrementCartAmount() {
    incrementCartAmount(cartItem);
  }

  function handleDecrementCartAmount() {
    decrementCartAmount(cartItem);
  }

  const handleClosePopover = () => {
    setOpen(false);
  };

  const handleOpenPopover = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  function DeletePopoverContent() {
    return (
      <Flex wrap="wrap" gap="small">
        <Button onClick={handleDeleteItem} type="primary" danger>
          Remover
        </Button>
        <Button onClick={handleClosePopover} type="primary">
          Cancelar
        </Button>
      </Flex>
    );
  }

  return (
    <StyledCartItem>
      <Popover
        content={DeletePopoverContent}
        title={`Remover ${cartItem.name} do carrinho de compras?`}
        trigger="click"
        placement="bottom"
        open={open}
        onOpenChange={handleOpenPopover}
      >
        <StyledDeleteItemButton aria-label="Excluir item">
          X
        </StyledDeleteItemButton>
      </Popover>
      <Flex align="center" gap={12}>
        <StyledCartItemImageContainer>
          <Image
            alt={cartItem.name}
            src={cartItem.photo}
            style={{ objectFit: 'cover' }}
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcWw8AAb8BHjgUU1kAAAAASUVORK5CYII="
          />
        </StyledCartItemImageContainer>

        <StyledCartItemName>{cartItem.name}</StyledCartItemName>
      </Flex>
      <StyledCartItemActionButtonsContainer>
        <div>
          <StyledCartItemActionButtonsTitle>
            Qtd:
          </StyledCartItemActionButtonsTitle>

          <StyledCartItemButtonContainer>
            <button
              disabled={cartItem.cartAmount === 1}
              onClick={handleDecrementCartAmount}
            >
              -
            </button>
            <Divider
              style={{
                marginRight: '6px',
                height: 18,
                background: '#bfbfbf',
              }}
              type="vertical"
            />
            <span data-testid={'amount-test-id'}>{cartItem.cartAmount}</span>
            <Divider
              style={{
                marginLeft: '6px',
                height: 18,
                background: '#bfbfbf',
              }}
              type="vertical"
            />
            <button
              disabled={cartItem.cartAmount === cartItem.amount}
              onClick={handleIncrementCartAmount}
            >
              +
            </button>
          </StyledCartItemButtonContainer>
        </div>

        <StyledCartItemPrice>R${cartItem.price}</StyledCartItemPrice>
      </StyledCartItemActionButtonsContainer>
    </StyledCartItem>
  );
}
