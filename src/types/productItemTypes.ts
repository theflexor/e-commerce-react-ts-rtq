export interface IproductItem {
  available: boolean;
  catId: number;
  description: {
    images: string[];
  };
  itemId: string;
  itemUrl: string;
  properties: {
    cut: string;
    list: string[];
  };
  sales: 1;
  images: string[];
  sku: {
    base: IskuBase[];
    def: {
      isBulk: boolean;
      price: string | number;
      promotionPrice: string | number;
      quantity: number;
      unit: string;
    };
  };
  title: string;
  props: IskuProps[];
  video: any;
  wishcount: number;
  count: number
}

interface IskuBase {
  price: number;
  promotionPrice: number;
  propMap: string;
  quantity: number;
  skuId: number;
}

interface IskuProps {
  pid: number;
  name: string;
  values: IskuPropsValue[];
}

interface IskuPropsValue {
  name: string;
  image: string;
  propTips: string;
  vid: number;
}
