import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiURL,
  params: {
    page: '1',
    rows: '20',
    sortBy: 'id',
    orderBy: 'ASC',
  },
});
