export interface ProductListDetailsType {
totalPrice: any;

  selectedWeight: string;
  quantity: number;
  name: string;
  price: number;
  description: string;
  category: string;
  color: string;
  title: string;
  image: string;
  id: number;
  amount: number;
  Tax: number;
  Delivery: number;
  Discount: number;
  sizes: string[];
}

export interface Price {
  value: string;
  currency: string;
}
export class CartClass {
  CartId: number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate: Date;
  constructor() {
    this.AddedDate = new Date();
    this.CartId = 0;
    this.CustId = 0;
    this.ProductId = 0;
    this.Quantity = 0;
  }
}
export interface IProduct {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string;
  deliveryTimeSpan: string;
  categoryId: number;
  productImageUrl: string;
  categoryName: string;
}
// https://gourmetgarden.in/
// https://freshclub.co.in/collections/fresh-vegetables-online-hyderabad
// https://blinkit.com/cn/fresh-vegetables/cid/1487/1489
