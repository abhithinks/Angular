import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  proSelected:boolean=false ;
  addedProduct: any;
  selProduct!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: string){
    this.proSelected= true;
     this.selProduct= product;

  }
  onaddedProduct(proData: any){
    this.addedProduct=proData;
  }
 
}
