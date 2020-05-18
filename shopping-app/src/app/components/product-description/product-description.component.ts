import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProductData } from 'src/app/models/data-model';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
})
export class ProductDescriptionComponent implements OnInit {
  products: ProductData;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.products = this.service.getproductsdetail(this.id);
  }
  addCartProduct(id: number) {
    this.service.addtoCart(id);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
