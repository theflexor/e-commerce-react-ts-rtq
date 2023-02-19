/// <reference types="vite/client" />

interface IProductCardDelivery {
  freeShipping: boolean;
  shippingDisplay: string;
  shippingFee: number;
}

interface IProductCardItem {
  averageStarRate: number;
  image: string;
  itemId: number;
  sales: number;
  title: string;
  sku: IProductCardItemSku;
}
interface IProductCardItemSku {
  def: {
    price: any;
    prices: {
      pc: number;
      app: number;
    };
    promotionPrice: number;
  };
}

export interface IProductCard {
  delivery: IProductCardDelivery;
  item: IProductCardItem;
}


export interface ISortSettings {
  attr?: string;
  brandId?: string;
  catId?: string;
  currency?: string;
  endPrice?: string;
  loc?: string;
  locale?: string;
  page?: string;
  q?: string;
  region?: string;
  sort?: string;
  startPrice?: string;
}




















interface ImportMetaEnv {
  readonly VITE_FIREBASE_API: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
