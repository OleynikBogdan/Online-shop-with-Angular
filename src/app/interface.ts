export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}
export  interface ICartProduct extends IProduct {
  orderNumber: number;
  totalPrice: number;
  orderDate: string;
}
