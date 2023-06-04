import {Injectable} from '@angular/core';
import {ICartProduct} from './interface';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CartService {
  products: ICartProduct[] = [];
  cartQty$: BehaviorSubject<number> = new BehaviorSubject(0);
  orderNumber = null;

  getCartQty(): Observable<number> {
    return this.cartQty$;
  }

  addToCart(product: ICartProduct): void {
    this.products.push(product);
    this.cartQty$.next(this.products.length);
  }

  getProductFromCart(): Observable<ICartProduct[]> {
    return of(this.products);
  }

  deleteProductByOrderNumber(orderNumber: number): Observable<ICartProduct[]> {
    this.products = this.products.filter(product => product.orderNumber !== orderNumber);
    this.cartQty$.next(this.products.length);
    return of(this.products);
  }
  getOrderNumber(): Observable<number> {
    if (!this.orderNumber) {
      this.orderNumber = Math.floor((Math.random() * 10000000000) + 1);
    }
    return of(this.orderNumber);
  }
}
