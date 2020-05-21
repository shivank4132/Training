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
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053362/product1_ptpivv.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Watch',
      rating: 3,
      price: 2500,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053362/product2_qgs37w.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Earpodes',
      rating: 3,
      price: 4000,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product3_jkjb59.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Glasses',
      rating: 3,
      price: 1500,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053362/product4_vpi1uz.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Cycle',
      rating: 3,
      price: 8000,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053362/product5_rtw2sb.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 6,
      name: 'Camera',
      rating: 3,
      price: 10000,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053362/product6_j6c0ng.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 7,
      name: 'Headphones',
      rating: 3,
      price: 3500,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product7_ik15zd.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 8,
      name: 'Shoes',
      rating: 3,
      price: 2500,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product8_lltegn.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 9,
      name: 'Mouse',
      rating: 3,
      price: 1000,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product9_f7kfab.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 10,
      name: 'Bag',
      rating: 3,
      price: 2000,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product10_xi0hkt.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 11,
      name: 'Camera lens',
      rating: 3,
      price: 1200,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product11_exxz9v.jpg',
      disable: false,
      quantity: 1,
    },
    {
      id: 12,
      name: 'Drone',
      rating: 3,
      price: 4500,
      imageUrl:
        'https://res.cloudinary.com/shivank/image/upload/v1590053363/product12_fzurwi.jpg',
      disable: false,
      quantity: 1,
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

  // removeCartData(id: number) {
  //   for (const item of this.cartData) {
  //     if (item.id === id) {
  //       this.cartData.splice(item.id, 1);
  //     }
  //   }
  // }

  getCartData() {
    return this.cartData;
  }
}
