import { render } from '@testing-library/react';
import { Footer } from '.';
import { CustomThemeProvider } from '@/providers/ThemeProvider';

describe('Components/Footer', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(
      <CustomThemeProvider>
        <Footer />
      </CustomThemeProvider>,
    );

    const footerElement = container.querySelector('footer');

    expect(footerElement).toBeInTheDocument();
    expect(
      getByText('MKS sistemas © Todos os direitos reservados'),
    ).toBeInTheDocument();
  });
});
