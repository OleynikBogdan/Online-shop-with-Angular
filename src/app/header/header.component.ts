import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  cartQty$: Observable<number> = this.cartService.getCartQty();
  constructor(private cartService: CartService, private router: Router) {  }

  ngOnInit(): void {
  }

  goToCart(): void {
    this.router.navigate(['cart']);
  }
}
