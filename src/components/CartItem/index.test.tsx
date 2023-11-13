import { act, render } from '@testing-library/react';
import { CartItem } from '.';
import { CustomThemeProvider } from '@/providers/ThemeProvider';
import userEvent from '@testing-library/user-event';
import { useCartStore } from '@/store/CartStore';
import { ReactNode } from 'react';
import { CartItem as TypeCartItem } from '@/@types/CartItem';

const mockCardItemProps: TypeCartItem = {
  id: 3,
  name: 'Produto Name Mock',
  brand: 'Produto Brand Mock',
  description: 'Produto Descriçao Mock',
  photo: '/img.png',
  price: '2700.00',
  amount: 6,
  cartAmount: 3,
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z',
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <CustomThemeProvider>{children}</CustomThemeProvider>
);

describe('Components/CartItem', () => {
  it('should render correctly', () => {
    const { getByText, getByRole, getByAltText, getByTestId } = render(
      <CartItem cartItem={mockCardItemProps} />,
      { wrapper },
    );

    const productName = getByRole('heading', {
      level: 3,
      name: mockCardItemProps.name,
    });

    const amount = getByTestId('amount-test-id');

    const incrementButton = getByRole('button', { name: '+' });
    const decrementButton = getByRole('button', { name: '-' });
    const deleteItemButton = getByRole('button', { name: /x/i });

    expect(productName).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(amount.textContent).toBe(String(mockCardItemProps.cartAmount));
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(deleteItemButton).toBeInTheDocument();
    expect(getByAltText(mockCardItemProps.name)).toBeInTheDocument();
    expect(getByText(`R$${mockCardItemProps.price}`)).toBeInTheDocument();
  });

  describe('on click increment button', () => {
    it('should increase the number of items in the cart', async () => {
      const incrementCartAmountSpy = jest.spyOn(
        useCartStore.getState(),
        'incrementCartAmount',
      );

      const { getByRole } = render(<CartItem cartItem={mockCardItemProps} />, {
        wrapper,
      });

      const incrementButton = getByRole('button', { name: '+' });

      await act(async () => {
        await userEvent.click(incrementButton);
        await userEvent.click(incrementButton);
      });

      expect(incrementCartAmountSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('on click decrement button', () => {
    it('should reduce the number of items in the cart', async () => {
      const decrementCartAmountSpy = jest.spyOn(
        useCartStore.getState(),
        'decrementCartAmount',
      );

      const { getByRole } = render(<CartItem cartItem={mockCardItemProps} />, {
        wrapper,
      });

      const decrementButton = getByRole('button', { name: '-' });

      await act(async () => {
        await userEvent.click(decrementButton);
        await userEvent.click(decrementButton);
      });

      expect(decrementCartAmountSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('on click delete item button', () => {
    it('should display popover', async () => {
      const { getByRole, getByText } = render(
        <CartItem cartItem={mockCardItemProps} />,
        {
          wrapper,
        },
      );

      const deleteItemButton = getByRole('button', { name: /x/i });

      await act(async () => {
        await userEvent.click(deleteItemButton);
      });

      const removeItemButton = getByRole('button', { name: /remover/i });
      const cancelButton = getByRole('button', { name: /cancelar/i });
      const popoverTitle = `Remover ${mockCardItemProps.name} do carrinho de compras?`;

      expect(removeItemButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
      expect(getByText(popoverTitle)).toBeInTheDocument();
    });

    describe('on click remove button on popover', () => {
      it('should delete item from the cart', async () => {
        const removeItemFromCartSpy = jest.spyOn(
          useCartStore.getState(),
          'removeItemFromCart',
        );

        const { getByRole } = render(
          <CartItem cartItem={mockCardItemProps} />,
          { wrapper },
        );

        const deleteItemButton = getByRole('button', { name: /x/i });

        await act(async () => {
          await userEvent.click(deleteItemButton);
        });

        const removeItemButton = getByRole('button', { name: /remover/i });

        await act(async () => {
          await userEvent.click(removeItemButton);
        });

        expect(removeItemFromCartSpy).toHaveBeenCalled();
      });
    });
  });
});
