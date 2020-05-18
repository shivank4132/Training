import { Injectable } from '@angular/core';
import { ProductData } from '../models/data-model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  products: ProductData[] = [
    {
      id: 1,
      name: 'Headphones',
      rating: 3,
      price: 3000,
      imageUrl: 'src/app/assets/img/product1.png',
    },
    {
      id: 2,
      name: 'Watch',
      rating: 3,
      price: 2500,
      imageUrl: '../assets/img/product2.jpeg',
    },
    {
      id: 3,
      name: 'Earpodes',
      rating: 3,
      price: 4000,
      imageUrl: '../assets/img/product3.jpg',
    },
    {
      id: 4,
      name: 'Glasses',
      rating: 3,
      price: 1500,
      imageUrl: '../assets/img/product4.jpeg',
    },
    {
      id: 5,
      name: 'Cycle',
      rating: 3,
      price: 8000,
      imageUrl: '../assets/img/product5.jpeg',
    },
    {
      id: 6,
      name: 'Camera',
      rating: 3,
      price: 10000,
      imageUrl: '../assets/img/product6.jpeg',
    },
    {
      id: 7,
      name: 'Headphones',
      rating: 3,
      price: 3500,
      imageUrl: '../assets/img/product7.jpeg',
    },
    {
      id: 8,
      name: 'Shoes',
      rating: 3,
      price: 2500,
      imageUrl: '../assets/img/product8.jpeg',
    },
    {
      id: 9,
      name: 'Mouse',
      rating: 3,
      price: 1000,
      imageUrl: '../assets/img/product9.jpeg',
    },
    {
      id: 10,
      name: 'Bag',
      rating: 3,
      price: 2000,
      imageUrl: '../assets/img/product10.jpeg',
    },
    {
      id: 11,
      name: 'Camera lens',
      rating: 3,
      price: 1200,
      imageUrl: '../assets/img/product11.jpeg',
    },
    {
      id: 12,
      name: 'Drone',
      rating: 3,
      price: 4500,
      imageUrl: '../assets/img/product12.jpeg',
    },
  ];
  productsList: ProductData[] = [];
  searchitems: string;

  cartData: ProductData[] = [];
  constructor() {}

  getproducts(searchitems: string): ProductData[] {
    if (searchitems == null || searchitems == '') {
      //this.productsList = this.products;
      return this.products;
    } else {
      this.productsList = [];
      for (const item of this.products) {
        if (item.name.toLowerCase().includes(searchitems.toLowerCase())) {
          this.productsList.push(item);
        }
      }
      return this.productsList;
    }
  }
  getproductsList() {
    return this.productsList;
  }
  getproductsdetail(id: number) {
    for (const item of this.products) {
      if (item.id === id) {
        return item;
      }
    }
  }

  addtoCart(id: number) {
    for (const item of this.products) {
      if (item.id === id) {
        this.cartData.push(item);
      }
    }
  }

  getCartData() {
    return this.cartData;
  }
}
