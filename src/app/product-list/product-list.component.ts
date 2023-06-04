import { Component, OnInit } from '@angular/core';
import {ProdService} from '../prod.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$ = this.prodService.getProducts();

  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
  }

}
