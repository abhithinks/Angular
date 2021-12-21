import { Component, OnInit } from '@angular/core';
import { CrewdataService } from '../crewdata.service';

@Component({
  selector: 'app-ourmembers',
  templateUrl: './ourmembers.component.html',
  styleUrls: ['./ourmembers.component.css']
})
export class OurmembersComponent implements OnInit {
  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];
  infoReceived4: string[]=[];
  infoReceived5: string[]=[];
  infoReceived6: string[]=[];
  
  getInfoFromService1(){
    this.infoReceived1= this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoReceived2= this.dservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3= this.dservice.getInfo3()
  }
  getInfoFromService4(){
    this.infoReceived4= this.dservice.getInfo4()
  }
  getInfoFromService5(){
    this.infoReceived5= this.dservice.getInfo5()
  }
  getInfoFromService6(){
    
    this.infoReceived6= this.dservice.getInfo6()
  }
  
    constructor(private dservice: CrewdataService) { }
  
    ngOnInit(): void {
    }
  
}
