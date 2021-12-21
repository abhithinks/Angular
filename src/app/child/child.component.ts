import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() productSelected:boolean=false ;
  @Input () selectedProduct:string | undefined;
    @Output() addedProduct =new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddProduct() {
    this.addedProduct.emit(this.selectedProduct);
  }

}
