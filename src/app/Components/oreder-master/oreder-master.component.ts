import { Component, OnInit } from '@angular/core';
import { CatData } from 'src/app/Modules/cat-data';
import { ICategoryInterface } from 'src/app/Modules/icategory-interface';

@Component({
  selector: 'app-oreder-master',
  templateUrl: './oreder-master.component.html',
  styleUrls: ['./oreder-master.component.css']
})
export class OrederMasterComponent implements OnInit {
  selectedCatID: number=0;
  catList:ICategoryInterface[];
  receivedOrderTotalPrice:number=0;
  CatReceived:CatData[]=[];

  constructor() {
    this.catList=[
      {id:1,name: 'Mobiles'},
      {id:2,name: 'TV'},
      {id:3,name: 'Labtops'},
    ];
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice=totalPrice;
  }

  getData(CatData:any){
    this.CatReceived=CatData
    }



}
