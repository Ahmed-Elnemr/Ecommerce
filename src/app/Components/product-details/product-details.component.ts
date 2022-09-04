import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductInterface } from 'src/app/Modules/iproduct-interface';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prd: IProductInterface | undefined = undefined;
  prdIDList: number[] = [];
  currentPrdID: number = 0;
  currentIndex: number = 0;

  constructor(
    private prdService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.prdIDList = this.prdService.getProductList();

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentPrdID = paramMap.get('pid') ? Number(paramMap.get('pid')) : 0;
      let foundedPrd = this.prdService.getProductByID(this.currentPrdID);
      if (foundedPrd) {
        this.prd = foundedPrd;
        console.log(this.prd);
      } else {
        alert('Product not found');
        this.location.back();
      }
    });
  }
  ////////////////
  goBack() {
    this.location.back();
  }

  searchProduct(prdName: string) {
    let foundedPrd = this.prdService.searchProductByName(prdName);
    if (foundedPrd) {
      this.prd = foundedPrd;
    } else {
      alert('Product not found');
    }
  }
  ///////////////
  goPrevious() {
    this.currentIndex = this.prdIDList.findIndex(
      (item) => item == this.currentPrdID
    );
    // arr[index]
    this.router.navigate(['/Products', this.prdIDList[--this.currentIndex]]);
  }
  goNext() {
    this.currentIndex = this.prdIDList.findIndex(
      (item) => item == this.currentPrdID
    );
    this.router.navigate(['/Products', this.prdIDList[++this.currentIndex]]);
  }
}
