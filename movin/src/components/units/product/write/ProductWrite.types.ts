export interface IUpdateProductInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  useditemAddress?: {
    zipcode?: any;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
  tags: string;
}
