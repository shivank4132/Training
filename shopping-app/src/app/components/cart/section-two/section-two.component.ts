import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductData } from 'src/app/models/data-model';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent implements OnInit {
  constructor(private service: DataService) {}
  quantityItem: { id: number; price: number; quantity: number }[] = [];
  cartList: ProductData[] = [];
  totalprice: number = 0;

  ngOnInit(): void {
    this.cartList = this.service.getCartData();
    this.getPrice();
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
}
