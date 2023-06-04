import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

interface CheckoutInfo {
  email: string,
  fullName: string,
  address: string,
  phone: string,
  credit: string,
  cvv: number
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  submitted = false;
  checkoutInfo: CheckoutInfo;

  emailControl = new FormControl('', Validators.required);
  fullNameControl = new FormControl('', Validators.required);
  addressControl = new FormControl('', Validators.required);
  phoneControl = new FormControl('', Validators.required);
  creditCardControl = new FormControl('', Validators.required);
  cvvControl = new FormControl('', Validators.required);

  checkoutForm = new FormGroup({
    email: this.emailControl,
    fullName: this.fullNameControl,
    address: this.addressControl,
    phone: this.phoneControl,
    credit: this.creditCardControl,
    cvv: this.cvvControl
  });

  cartSum$: Observable<number> = this.cartService.getProductFromCart().pipe(
    map(products => products.map(item => item.totalPrice).reduce((a, b) => a + b, 0)));
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.checkoutInfo = this.checkoutForm.value;
  }
  goToCheck(): void {
    this.router.navigate(['check']);
  }
}
