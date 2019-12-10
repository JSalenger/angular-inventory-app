import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: IProduct[] = [
    {
      id: generateId(),
      name: 'Pixel 3',
      active: false,
      description: 'Brand New',
      expirationDate: '01/19/2019',
      type: 'Monitor',
    },
    {
      id: generateId(),
      name: 'IPhone 5',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/17/2019',
      type: 'Monitor',
    },
    {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile',
  },
  {
    id: generateId(),
    name: 'IPhone XR',
    active: true,
    description: 'Brand New',
    expirationDate: '01/14/2019',
    type: 'mobile',
  },
  {
    id: generateId(),
    name: 'IMac Late-2015',
    active: false,
    description: 'Used',
    expirationDate: '01/04/2019',
    type: 'Monitor',
  },
  {
    id: generateId(),
    name: 'Dell XPS 9365',
    active: true,
    description: 'Used',
    expirationDate: '01/01/2019',
    type: 'Monitor',
  },
  ];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  addProduct(product) {
    this.products = [
      {
        id: generateId(),
        ...product,
      },
      ...this.products,
    ];
    this.products$.next(this.products);
  }

  editProduct(product, id) {
    const index = this.products.findIndex(p => p.id === id);
    this.products = [
      ...this.products.slice(0, index),
      {
        id,
        ...product,
      },
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1)
    ];
    console.log('Product Removed From Index: ' + index);
    this.products$.next(this.products);
  }

}
