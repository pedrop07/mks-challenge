import { render } from '@testing-library/react';
import { ProductsList } from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { useProductsQuery } from '../../hooks/useProductsQuery';
import { CustomThemeProvider } from '@/providers/ThemeProvider';
import '../../setupDomTests';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <CustomThemeProvider>{children}</CustomThemeProvider>
  </QueryClientProvider>
);

const mockedUseProductsQuery = useProductsQuery as jest.Mock;
jest.mock('../../hooks/useProductsQuery');

const mockResponse = {
  products: [
    {
      id: 3,
      name: 'Produto Name Mock',
      brand: 'Produto Brand Mock',
      description: 'Produto Descriçao Mock',
      photo: '/img.png',
      price: '2700.00',
      amount: 9,
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
  ],
  count: 1,
};

describe('Components/ProductsList', () => {
  it('should render correctly', () => {
    mockedUseProductsQuery.mockImplementation(() => ({
      data: mockResponse,
      isLoading: false,
      error: null,
    }));

    const { getByText } = render(<ProductsList />, { wrapper });

    expect(getByText('Produto Name Mock')).toBeInTheDocument();
    expect(getByText('Produto Descriçao Mock')).toBeInTheDocument();
    expect(getByText('R$2700.00')).toBeInTheDocument();
  });

  it('should render skeletons on loading', () => {
    mockedUseProductsQuery.mockImplementation(() => ({
      data: mockResponse,
      isLoading: true,
      error: null,
    }));

    const { container } = render(<ProductsList />, { wrapper });

    const skeletons = container.querySelectorAll('.ant-skeleton');

    expect(skeletons.length).toBe(8);
  });

  it('should render error message on error', () => {
    mockedUseProductsQuery.mockImplementation(() => ({
      data: mockResponse,
      isLoading: false,
      error: true,
    }));

    const { getByRole, getByText } = render(<ProductsList />, { wrapper });

    const errorTitle = getByRole('heading', {
      level: 2,
      name: /Algo de inesperado ocorreu/,
    });

    expect(errorTitle).toBeInTheDocument();
    expect(
      getByText(
        'Não conseguimos listar os produtos neste momento. Por favor, tente novamente mais tarde.',
      ),
    ).toBeInTheDocument();
  });
});
