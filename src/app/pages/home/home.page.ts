import { Component, OnInit } from '@angular/core';
import { HomePageModule } from './home.module';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAll();
  }
}
