import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  showMe:boolean=false;
  showMe1:boolean=false;
  showMe2:boolean=false;
  showMe3:boolean=false;
  showMe4:boolean=false;
  constructor() { }
  
  

  ngOnInit(): void {
    
  }
 
toggleTag(){
  this.showMe=!this.showMe;
}
toggleTag1(){
  this.showMe1=!this.showMe1;
}
toggleTag2(){
  this.showMe2=!this.showMe2;
}

toggleTag3(){
  this.showMe3=!this.showMe3;
}

toggleTag4(){
  this.showMe4=!this.showMe4;
}

}
