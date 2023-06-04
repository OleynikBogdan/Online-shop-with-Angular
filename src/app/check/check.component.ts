import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {BehaviorSubject, Observable, of} from 'rxjs';



@Component({
  selector: 'check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  orderNumber$ = this.cartService.getOrderNumber();
  cartQtyZero$: Observable<number> = of(0);
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


}
