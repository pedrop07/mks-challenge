import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { CustomQueryClientProvider } from '@/providers/QueryClientProvider';
import { CustomThemeProvider } from '@/providers/ThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyle } from '@/styles/global';
import { Header } from '@/components/Header';
import { ConfigProvider } from 'antd';
import { Footer } from '@/components/Footer';
import { StyledMainContainer } from './styles';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MKS Challenge',
  description: 'Explore diversos produtos com a MKS Sistemas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CustomQueryClientProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <CustomThemeProvider>
              <ConfigProvider
                theme={{
                  token: {
                    fontFamily: montserrat.style.fontFamily,
                  },
                }}
              >
                <Header />
                <StyledMainContainer>{children}</StyledMainContainer>
                <Footer />
              </ConfigProvider>
            </CustomThemeProvider>
          </StyledComponentsRegistry>
        </CustomQueryClientProvider>
      </body>
    </html>
  );
}
