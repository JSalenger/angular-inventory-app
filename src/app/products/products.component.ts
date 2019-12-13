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

  // Boolean for whether or not the open the addProduct() wizard
  productOpen = false;
  selectedProduct: IProduct;
  products$: Observable<IProduct[]> = this.productsService.products$;
  // Boolean for whether or not to open the delete product modal
  delete = false;
  // Variable contained the data of the productToBeDeleted ( kinda self explanatory )
  productToBeDeleted: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }


  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  onEdit(product) {
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleCancel() {
    this.delete = false;
  }

  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  handleFinish(event) {
    if (event && event.product) {
      if (this.selectedProduct) {
        // Edit logic
        this.productsService.editProduct(event.product, this.selectedProduct.id);
      } else {
        this.productsService.addProduct(event.product);
      }
    }
    // After they've completed the wizard, make it go away!
    this.productOpen = false;
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
