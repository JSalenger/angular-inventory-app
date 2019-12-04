import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, IProduct } from './../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }


  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  onEdit(product) {
    //
  }

  handleCancel() {
    this.delete = false;
  }

  addProduct() {
    //
  }

  confirmDelete() {
    this.handleCancel();
    this.productsService.removeProduct(this.productToBeDeleted);
    console.log('Recieved Eventemitter, Deleting product...');
  }

  trackById(index, item) {
    return item.id;
  }

}
