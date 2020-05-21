import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductData } from 'src/app/models/data-model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent implements OnInit {
  quantityItem: { id: number; price: number; quantity: number }[] = [];
  cartList: ProductData[] = [];
  totalprice: number = 0;
  userForm: FormGroup;
  deliveryPrice = 0;
  code = '';
  disc: number = 0;

  constructor(private service: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartList = this.service.getCartData();
    this.getPrice();

    this.userForm = this.fb.group({
      firstName: [, Validators.required],
      secondName: [, Validators.required],
      address1: [, Validators.required],
      address2: [, Validators.required],

      city: [, Validators.required],
      zip: [, Validators.required],
      phone: [, Validators.required],
    });
  }

  submitForm() {
    console.log('Form Submitted with values : ', this.userForm.value);
  }

  getPrice() {
    for (const item of this.cartList) {
      this.quantityItem.push({ id: item.id, price: item.price, quantity: 1 });
    }
  }
  getTotalPrice() {
    this.totalprice = 0;
    for (const item of this.quantityItem) {
      this.totalprice = this.totalprice + item.price * item.quantity;
    }
    return this.totalprice;
  }

  applyCode(code) {
    if (code === 'GETOFF30') {
      this.disc = this.totalprice * 0.3;
    }
    return this.disc;
  }

  getVal(val: any, item: any) {
    for (let i of this.cartList) {
      if (i.id === item.id) {
        i.quantity = val.target.value;
      }
    }
  }
}
