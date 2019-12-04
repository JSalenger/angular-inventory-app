import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'in-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
        basic: fb.group({
          name: '',
          description: '',
          active: false,
          features: fb.array([
            fb.control('')
          ])
        }),
        expiration: fb.group({
          expirationDate: null,
        })
      });

  }

  productForm: FormGroup;
  @Input() product;
  deviceType = 'tablet';

  deviceTypes = [{
    name: 'Tablet',
    icon: 'tablet',
  }, {
    name: 'Laptop',
    icon: 'computer',
  }, {
    name: 'Phone',
    icon: 'mobile',
  }, {
    name: 'Monitor',
    icon: 'display',
  }];

  selectDevice(device) {
    this.deviceType = device.icon;
  }

  handleClose() {

  }

  ngOnInit() {
  }

}
