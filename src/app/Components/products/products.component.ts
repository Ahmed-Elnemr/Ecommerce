import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CatData } from 'src/app/Modules/cat-data';
import { ICategoryInterface } from 'src/app/Modules/icategory-interface';
import { IProductInterface } from 'src/app/Modules/iproduct-interface';
import { Store } from 'src/app/Modules/store';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnInit,OnChanges {

  ClintName = "Ahmed";
  // storeClass:Store ;
  // ProductList: IProductInterface[];
  dateDay: Date = new Date;
  prdListOfCat: IProductInterface[] = [];
  @Input() receivedCatID: number = 0;
  showImage: boolean = true;

  orderTotalPrice: number = 0;
//
 @Output() totatPriceChanged=new EventEmitter<number>;

 @Output() allCatData:EventEmitter<any> ;
 totalPrice:number = 0;
 @Output() totalPriceChanged:EventEmitter<number> ;
 catData:CatData[]=[];
// ة
  constructor(private prdService:ProductService,private router :Router ) {
    this.totalPriceChanged=new EventEmitter<number>();
    this.allCatData=new EventEmitter<any>();


    // this.ProductList = [
    //   { id: 1, name: 'Samsung', price: 12000, quantity: 0, imgURL: 'https://fakeimg.pl/250x100', catID: 1 },
    //   { id: 8, name: 'Redmi', price: 22000, quantity: 1, imgURL: 'https://fakeimg.pl/250x100', catID: 1 },
    //   { id: 20, name: 'LG', price: 25000, quantity: 3, imgURL: 'https://fakeimg.pl/250x100', catID: 2 },
    //   { id: 33, name: 'Tornado', price: 33000, quantity: 2, imgURL: 'https://fakeimg.pl/250x100', catID: 2 },
    //   { id: 15, name: 'Lenovo', price: 45000, quantity: 0, imgURL: 'https://fakeimg.pl/250x100', catID: 3 },
    //   { id: 17, name: 'Dell', price: 17500, quantity: 5, imgURL: 'https://fakeimg.pl/250x100', catID: 3 },
    // ]
    //  this.storeClass=new Store('Africano',['Mansoura','Sohag','Cairo'],"/assets/OIP (4).jpg")
  }


  ngOnInit(): void {
    // this.getProductsOfCat;
  }

  ngOnChanges(): void {
    // this.getProductsOfCat();
    this.prdListOfCat= this.prdService.getProductsByCatID(this.receivedCatID);
  }
  //

///////////////////////
  // private getProductsOfCat() {
  //   if (this.receivedCatID == 0) {
  //     this.prdListOfCat = Array.from(this.ProductList);
  //     return;
  //   }
  //   this.prdListOfCat = this.ProductList.filter((prd) => prd.catID == this.receivedCatID);
  // }

  ///////////toogleImage///////////toogleMsg/////////


  toogleImage() {
    this.showImage = !this.showImage;
  }
  showMsg: boolean = false;
  toogleMsg() {
    this.showMsg = !this.showMsg;
  }

  //////////////
  trackByFunc(index: number, item: IProductInterface) {
    return item.id;

  }
  ////////////////////////////////
  dcreaseQuantity(prd: IProductInterface,itemsCount:any) {
    return prd.quantity-= itemsCount;

  }
  ////////////////Total Price////////////


  updateTotalPrice(prdPrice: number, itemsCount: any) {
    this.orderTotalPrice += (prdPrice* itemsCount as number);
    // this.orderTotalPrice += (prdPrice* +itemsCount);
    this.totatPriceChanged.emit(this.orderTotalPrice);
  }

getCatogryData(name:string,price:number,count:any){
  this.catData.push({name:name,price:price,count:count});
  this.allCatData.emit(this.catData)
};


openProductDetails(prdID:number)
{
  this.router.navigate(['Products',prdID])

}






}
