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

  removeCartData(id: number) {
    var i = -1;
    var j = -1;
    for (const item of this.cartList) {
      i = i + 1;
      if (item.id === id) {
        this.cartList.splice(i, 1);
      }
    }
    for (const item of this.quantityItem) {
      j = j + 1;
      if (item.id === id) {
        this.quantityItem.splice(j, 1);
      }
    }
  }

  model(event: any, i: any) {
    for (let item of this.cartList) {
      i.price = item.price;
      if (item.id === i.id) {
        if (event.target.value === 'Simple') {
          i.price = item.price + 50;
          item.price += 50;
        } else if (event.target.value === 'Advanced') {
          i.price = item.price + 100;
          item.price += 100;
        }
      }
    }
  }

  getVal(val: any, item: any) {
    for (let i of this.cartList) {
      if (i.id === item.id) {
        for (let j of this.cartList) {
          if (i.id === j.id) {
            j.quantity = i.quantity = val.target.value;
          }
        }
      }
    }
  }
}
