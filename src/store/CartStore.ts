import { CartItem } from '@/interfaces/CartItem';
import { Product } from '@/interfaces/Product';
import { notification } from 'antd';
import { create } from 'zustand';

interface CartStore {
  cartItems: CartItem[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (product: Product) => void;
  incrementCartAmount: (product: CartItem) => void;
  decrementCartAmount: (product: CartItem) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cartItems: [],
    addItemToCart: (product) => {
      set(({ cartItems }) => {
        const productIsAlreadyInTheCart = cartItems.some(
          ({ id }) => id === product.id,
        );

        if (productIsAlreadyInTheCart) {
          notification.warning({
            message: 'Produto Já no Carrinho',
            duration: 2,
            description: `O produto ${product.name} já foi adicionado ao seu carrinho.`,
          });
          return { cartItems: [...cartItems] };
        }

        const cartItem = { ...product, cartAmount: 1 };

        return { cartItems: [...cartItems, cartItem] };
      });
    },
    removeItemFromCart: (product) => {
      set(({ cartItems }) => ({
        cartItems: cartItems.filter(({ id }) => id !== product.id),
      }));
    },
    incrementCartAmount: (cartItem) => {
      set(({ cartItems }) => {
        const newCartItem = {
          ...cartItem,
          cartAmount: cartItem.cartAmount + 1,
        };

        if (newCartItem.cartAmount > cartItem.amount)
          return { cartItems: [...cartItems] };

        const newCartItems = cartItems.map((item) => {
          if (item.id === cartItem.id) return newCartItem;

          return item;
        });

        return { cartItems: [...newCartItems] };
      });
    },
    decrementCartAmount: (cartItem) => {
      set(({ cartItems }) => {
        const newCartItem = {
          ...cartItem,
          cartAmount: cartItem.cartAmount - 1,
        };

        if (newCartItem.cartAmount < 1) return { cartItems: [...cartItems] };

        const newCartItems = cartItems.map((item) => {
          if (item.id === cartItem.id) return newCartItem;

          return item;
        });

        return { cartItems: [...newCartItems] };
      });
    },
    clearCart: () => {
      set(() => ({
        cartItems: [],
      }));
    },
  };
});
