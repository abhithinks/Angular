import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private msgService: DesignutilityService) { }
  products:any;
  ngOnInit(): void {
  
this.msgService.product()
.subscribe((productData: any) => this.products = productData)
}
}