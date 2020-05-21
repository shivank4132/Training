import { Component, OnInit } from '@angular/core';
import { ProductData } from '../../models/data-model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: ProductData[] = [];
  productSearch: string = null;

  clicked = false;

  constructor(private productService: DataService) {}

  ngOnInit(): void {
    this.products = this.productService.getproducts(this.productSearch);
  }
  getProductsSearched() {
    this.products = this.productService.getproducts(this.productSearch);
  }
  addCartProduct(id: number) {
    this.productService.addtoCart(id);
  }
}
