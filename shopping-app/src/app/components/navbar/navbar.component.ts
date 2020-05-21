import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductData } from 'src/app/models/data-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartList: ProductData[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.cartList = this.service.getCartData();
  }
}
