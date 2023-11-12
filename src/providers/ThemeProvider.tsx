'use client';

import { defaultTheme } from '@/styles/themes/default';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: ReactNode;
}

export function CustomThemeProvider({ children }: Props) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
