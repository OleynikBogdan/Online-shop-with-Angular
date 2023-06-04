import {Component, OnInit } from '@angular/core';
import {ProdService} from '../prod.service';
import {ActivatedRoute} from '@angular/router';
import { take } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ICartProduct, IProduct} from '../interface';
import {CartService} from '../cart.service';




@Component({
  selector: 'app-page-add-card',
  templateUrl: './page-add-card.component.html',
  styleUrls: ['./page-add-card.component.scss']
})
export class PageAddCardComponent implements OnInit {
  id: number;
  product$: Observable<IProduct>;
  counter = 1;

  constructor(private activateRoute: ActivatedRoute, private prodService: ProdService, private cartService: CartService) { }

  ngOnInit(): void {
    this.id = +this.activateRoute.snapshot.params.id;
    this.product$ = this.prodService.getProductByID(this.id);
  }

  inc(): void {
    this.counter++;
  }

  dec(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  addToCart(): void {
   this.product$.pipe(take(1)).subscribe(product => {
     const price = product.price * this.counter;
     const obj: ICartProduct = {
       ...product,
       quantity: this.counter,
       orderDate: new Date().toString(),
       orderNumber: Math.floor((Math.random() * 1000000) + 1),
       totalPrice: price
     };
     this.cartService.addToCart(obj);
   });
  }
}
