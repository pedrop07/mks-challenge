'use server';

import { Product } from '@/interfaces/Product';
import { api } from '@/services/api';

interface GetProductsResponse {
  products: Product[];
  count: number;
}

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<GetProductsResponse> {
  function generateRandomInteger() {
    const randomDecimal = Math.random();

    const randomInteger = Math.floor(randomDecimal * 9) + 2;

    return randomInteger;
  }

  if (!apiURL) {
    console.error(
      'A variável NEXT_PUBLIC_API_URL não está definida. Certifique-se de configurá-la corretamente.',
    );
    throw new Error('Internal server error');
  }

  const { data } = await api.get<GetProductsResponse>('/products');

  if (data) {
    const products = data.products.map((product) => ({
      ...product,
      amount: generateRandomInteger(),
    }));

    return { ...data, products };
  }

  throw new Error('Internal server error');
}
