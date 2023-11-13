import { act, render } from '@testing-library/react';
import { ProductCard } from '.';
import { CustomThemeProvider } from '@/providers/ThemeProvider';
import { Product } from '@/interfaces/Product';
import userEvent from '@testing-library/user-event';
import { useCartStore } from '@/store/CartStore';
import { ReactNode } from 'react';

const mockProductCardProps: Product = {
  id: 3,
  name: 'Produto Name Mock',
  brand: 'Produto Brand Mock',
  description: 'Produto Descriçao Mock',
  photo: '/img.png',
  price: '2700.00',
  amount: 9,
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z',
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <CustomThemeProvider>{children}</CustomThemeProvider>
);

describe('Components/ProductCard', () => {
  it('should render correctly', () => {
    const { getByText, getByRole, getByAltText } = render(
      <ProductCard product={mockProductCardProps} />,
      { wrapper },
    );

    const productName = getByRole('heading', {
      level: 3,
      name: mockProductCardProps.name,
    });

    const productCardFooter = getByRole('button', {
      name: /comprar/i,
    });

    expect(getByAltText(mockProductCardProps.name)).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(getByText(`R$${mockProductCardProps.price}`)).toBeInTheDocument();
    expect(getByText(mockProductCardProps.description)).toBeInTheDocument();
    expect(productCardFooter).toBeInTheDocument();
  });

  describe('on click buy button', () => {
    it('should add product to cart', async () => {
      const addItemToCartSpy = jest.spyOn(
        useCartStore.getState(),
        'addItemToCart',
      );

      const { getByRole } = render(
        <ProductCard product={mockProductCardProps} />,
        { wrapper },
      );

      const productCardFooter = getByRole('button', {
        name: /comprar/i,
      });

      await act(async () => {
        await userEvent.click(productCardFooter);
      });

      expect(addItemToCartSpy).toHaveBeenCalled();
    });
  });

  describe('on click the same buy button twice', () => {
    it('should display warning toast', async () => {
      const { getByRole, getByText } = render(
        <ProductCard product={mockProductCardProps} />,
        { wrapper },
      );

      const productCardFooter = getByRole('button', {
        name: /comprar/i,
      });

      await act(async () => {
        await userEvent.click(productCardFooter);
        await userEvent.click(productCardFooter);
      });
      const warnToastTitle = 'Produto Já no Carrinho';
      const warnToastMessage = `O produto ${mockProductCardProps.name} já foi adicionado ao seu carrinho.`;

      expect(getByText(warnToastTitle)).toBeInTheDocument();
      expect(getByText(warnToastMessage)).toBeInTheDocument();
    });
  });
});
