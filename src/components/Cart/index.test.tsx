import { CustomThemeProvider } from '@/providers/ThemeProvider';
import { act, render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Cart } from '.';
import userEvent from '@testing-library/user-event';
import { CartItem } from '@/interfaces/CartItem';
import { priceFormatter } from '@/lib/utils';

const wrapper = ({ children }: { children: ReactNode }) => (
  <CustomThemeProvider>{children}</CustomThemeProvider>
);

const mockCartProps: CartItem[] = [
  {
    id: 1,
    name: 'Produto Name Mock 1',
    brand: 'Produto Brand Mock 1',
    description: 'Produto Descriçao Mock 1',
    photo: '/img.png',
    price: '2000.00',
    amount: 4,
    cartAmount: 1,
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 2,
    name: 'Produto Name Mock 2',
    brand: 'Produto Brand Mock 2',
    description: 'Produto Descriçao Mock 2',
    photo: '/img.png',
    price: '3000.00',
    amount: 3,
    cartAmount: 1,
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
];

describe('Components/Cart', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Cart products={[]} />, { wrapper });

    expect(getByRole('button', { name: '0' })).toBeInTheDocument();
  });

  describe('on cart button click', () => {
    describe('has items in the cart', () => {
      it('should render correctly', async () => {
        const { getByLabelText, getByRole, getByText, getByAltText } = render(
          <Cart products={mockCartProps} />,
          {
            wrapper,
          },
        );

        await act(async () => {
          await userEvent.click(getByRole('button', { name: '2' }));
        });

        const drawerTitle = getByRole('heading', {
          name: /Carrinho de compras/i,
          level: 2,
        });
        const closeDrawerButton = getByLabelText('Close');

        const checkoutButton = getByRole('button', {
          name: /Finalizar compra/i,
        });

        const totalPrice = mockCartProps.reduce((acc, cur) => {
          acc += Number(cur.price) * Number(cur.cartAmount);

          return acc;
        }, 0);

        expect(closeDrawerButton).toBeInTheDocument();
        expect(drawerTitle).toBeInTheDocument();

        expect(getByText(mockCartProps[0].name)).toBeInTheDocument();
        expect(getByAltText(mockCartProps[0].name)).toBeInTheDocument();
        expect(getByText(`R$${mockCartProps[0].price}`)).toBeInTheDocument();

        expect(getByText(mockCartProps[1].name)).toBeInTheDocument();
        expect(getByAltText(mockCartProps[1].name)).toBeInTheDocument();
        expect(getByText(`R$${mockCartProps[1].price}`)).toBeInTheDocument();

        expect(checkoutButton).toBeInTheDocument();
        expect(getByText('Total:')).toBeInTheDocument();
        expect(
          getByText(`R$ ${priceFormatter(totalPrice)}`),
        ).toBeInTheDocument();
      });

      describe('on checkout button click', () => {
        it('should display successful purchase toast', async () => {
          const { getByRole, getByText } = render(
            <Cart products={mockCartProps} />,
            {
              wrapper,
            },
          );

          await act(async () => {
            await userEvent.click(getByRole('button', { name: '2' }));
          });

          const checkoutButton = getByRole('button', {
            name: /Finalizar compra/i,
          });

          await act(async () => {
            await userEvent.click(checkoutButton);
          });

          const successMessage =
            'Pedido realizado com sucesso! Agradecemos por sua compra.';

          expect(getByText(successMessage)).toBeInTheDocument();
        });
      });
    });

    describe('is empty', () => {
      it('should render correctly', async () => {
        const { getByText, getByRole, getByLabelText } = render(
          <Cart products={[]} />,
          {
            wrapper,
          },
        );

        await act(async () => {
          await userEvent.click(getByRole('button', { name: '0' }));
        });

        const drawerTitle = getByRole('heading', {
          name: /Carrinho de compras/i,
          level: 2,
        });
        const closeDrawerButton = getByLabelText('Close');

        expect(closeDrawerButton).toBeInTheDocument();
        expect(drawerTitle).toBeInTheDocument();

        expect(getByText('Seu carrinho está vazio')).toBeInTheDocument();
      });
    });
  });
});
