import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAll(): Product[] {
    return [
      {
        id: 1,
        price: 4.99,
        name: 'Bananas',
        image: 'assets/items/banana.jpg',
      },
      {
        id: 2,
        price: 2.99,
        name: 'Pan',
        image: 'assets/items/bread.jpg',
      },
      {
        id: 3,
        price: 3.99,
        name: 'Huevos',
        image: 'assets/items/eggs.jpg',
      },
      {
        id: 4,
        price: 6.99,
        name: 'Zumo',
        image: 'assets/items/juice.jpg',
      },
      {
        id: 5,
        price: 1.8,
        name: 'Limón',
        image: 'assets/items/lemon.jpg',
      },
      {
        id: 6,
        price: 8.0,
        name: 'Carne',
        image: 'assets/items/meat.jpg',
      },
      {
        id: 7,
        price: 5.0,
        name: 'Mix',
        image: 'assets/items/mix.jpg',
      },
      {
        id: 8,
        price: 3.99,
        name: 'Naranjas',
        image: 'assets/items/oranges.jpg',
      },
      {
        id: 9,
        price: 2.9,
        name: 'Tomates',
        image: 'assets/items/tomato.jpg',
      },
      {
        id: 10,
        price: 4.99,
        name: 'Verduras',
        image: 'assets/items/vegetables.jpg',
      },
    ];
  }

  getById(id: number): Product {
    return this.getAll().find((item) => item.id === id)!;
  }
}
