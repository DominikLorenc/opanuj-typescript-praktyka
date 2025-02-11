import { getProductCatalog } from './product-catalog.js';

declare module './product-catalog.js' {
  export function getProductCatalog(): {
    products: {
      id: number
      price: number;
      name: string;
      refurbished?: boolean;
    }[];
  };
}

export type CatalogProducts = ReturnType<typeof getProductCatalog>['products'];

export function getTotalValue() {
  const catalog = getProductCatalog();
  return catalog.products.reduce((acc, product) => acc + product.price, 0);
}
