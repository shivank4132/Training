import { Component, OnInit } from '@angular/core';
import { ProductData } from '../../../models/data-model';
import { DataService } from '../../../services/data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: ProductData[] = [];
  productSearch: string = null;
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
