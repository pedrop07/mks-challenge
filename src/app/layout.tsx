import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { CustomQueryClientProvider } from '@/providers/QueryClientProvider';
import { CustomThemeProvider } from '@/providers/ThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyle } from '@/styles/global';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </StyledComponentsRegistry>
        </CustomQueryClientProvider>
      </body>
    </html>
  );
}
