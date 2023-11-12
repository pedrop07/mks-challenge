import { render } from '@testing-library/react';
import { Header } from '.';
import { CustomThemeProvider } from '@/providers/ThemeProvider';

describe('Components/Header', () => {
  it('should render correctly', () => {
    const { getByRole } = render(
      <CustomThemeProvider>
        <Header />
      </CustomThemeProvider>,
    );

    const h1Element = getByRole('heading', { level: 1 });

    const headerTitle = h1Element.querySelectorAll('span')[0];
    const headerSubtitle = h1Element.querySelectorAll('span')[1];

    expect(h1Element).toBeInTheDocument();

    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle.textContent === 'MKS').toBe(true);

    expect(headerSubtitle).toBeInTheDocument();
    expect(headerSubtitle.textContent === 'Sistemas').toBe(true);
  });
});
