import { Injectable } from '@angular/core';
import { IProductInterface } from '../Modules/iproduct-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ProductList: IProductInterface[];

  constructor() {
    this.ProductList = [
      {
        id: 1,
        name: 'Samsung',
        price: 12000,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100',
        catID: 1,
      },
      {
        id: 8,
        name: 'Redmi',
        price: 22000,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/250x100',
        catID: 1,
      },
      {
        id: 20,
        name: 'LG',
        price: 25000,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/250x100',
        catID: 2,
      },
      {
        id: 33,
        name: 'Tornado',
        price: 33000,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/250x100',
        catID: 2,
      },
      {
        id: 15,
        name: 'Lenovo',
        price: 45000,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100',
        catID: 3,
      },
      {
        id: 17,
        name: 'Dell',
        price: 17500,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/250x100',
        catID: 3,
      },
    ];
  }
  getAllProducts(): IProductInterface[] {
    return this.ProductList;
  }

  getProductsByCatID(catID: number): IProductInterface[] {
    if (catID == 0) {
      return this.getAllProducts();
    } else {
      return this.ProductList.filter((prd) => prd.catID == catID);
    }
  }

  getProductByID(prdID: number): IProductInterface | undefined {
    return this.ProductList.find((prd) => prd.id == prdID);
  }

  searchProductByName(prdName: string): IProductInterface | undefined {
    return this.ProductList.find((prd) => prd.name == prdName);
  }

  getProductList(): number[] {
    return this.ProductList.map((prd) => prd.id);
  }

  addProduct(product: IProductInterface) {
    this.ProductList.push(product);
  }
}
