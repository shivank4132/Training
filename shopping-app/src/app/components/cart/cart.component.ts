import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductData } from 'src/app/models/data-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: DataService) {}
  cartList: ProductData[] = [];
  quantityItem: { id: number; price: number; quantity: number }[] = [];
  totalprice: number = 0;

  ngOnInit(): void {
    this.cartList = this.cartService.getCartData();
    this.getPrice();
  }
  getPrice() {
    for (const item of this.cartList) {
      this.quantityItem.push({ id: item.id, price: item.price, quantity: 1 });
    }
  }
  // getQuatityValue(id: number) {
  //   for (const item of this.quantityItem) {
  //     if (item.id == id) {
  //       return item.quantity;
  //     }
  //   }
  // }
  // setQuatityValue(id: number, value: number) {
  //   for (const item of this.quantityItem) {
  //     if (item.id == id) {
  //       item.quantity = value;
  //     }
  //   }
  // }
  getTotalPrice() {
    this.totalprice = 0;
    for (const item of this.quantityItem) {
      this.totalprice = this.totalprice + item.price * item.quantity;
    }
    return this.totalprice;
  }


}
