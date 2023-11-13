'use client';

import { getProducts } from '@/actions';
import { useQuery } from '@tanstack/react-query';

export function useProductsQuery() {
  const result = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  return result;
}
