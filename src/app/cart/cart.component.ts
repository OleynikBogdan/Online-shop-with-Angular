import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {PageAddCardComponent} from '../page-add-card/page-add-card.component';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products$ = this.cartService.getProductFromCart();
  cartSum$ = this.products$.pipe(
    map(products => products.map(item => item.totalPrice).reduce((a, b) => a + b, 0))
  );

  constructor( private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteProduct(orderNumber: number): void {
    this.products$ = this.cartService.deleteProductByOrderNumber(orderNumber);
  }

  goToCheckout(): void {
    this.router.navigate(['checkout']);
  }
}
