import axios, { AxiosRequestConfig } from 'axios';
import { Product } from '../model/Product';
import { trackSlowRequests } from './tracker';

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

interface RequestConfig extends AxiosRequestConfig {
  metadata?: {
    startTime: number;
  }
}


productsApi.interceptors.request.use((config) => {
  (config as RequestConfig).metadata = {
    startTime: Date.now(),
  };
  return config;
});

productsApi.interceptors.response.use((response) => {
  const endTime = Date.now();
  const startTime = (response.config as RequestConfig).metadata?.startTime;
  if (startTime) {
    const duration = endTime - startTime;
    const durationIs5SecondsOrMore = duration >= 5000;
    durationIs5SecondsOrMore && trackSlowRequests(duration, response.config.url ?? "");
  }
  return response;
});

export async function getProducts(query: string, limit: number = 5, delay: number = 0) {
  const response = await productsApi.get<{ products: Product[] }>('/products/search', {
    params: {
      q: query,
      limit: limit,
      delay: delay,
    },
  });
  return response;
}
