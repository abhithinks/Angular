import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrewdataService {

  constructor() { }

  info1: string[]=["Abhishek Verma" , "CEO- Possesses sound knowledge and understanding of structural engineering principles. Has good knowledge of software like SQL, HTML, CSS, Typescript and Angular. ", "abhi.verma@gmail.com"]
  info2: string[]=["Rohit Kumar" , "Business Analyst- Analyst- Enterprise Performance at Deloitte USI | EOaaS | SAP | MBA'20", "Rkrohit97@gmail.com"]
  info3: string[]=["Ayush Awasthi" , "Frontend- Software Engineer with 3+ years of experience. UI developer : Created a landing page for a food delivery website with the help of HTML5 & CSS3. Angular Developer", "ayushwasthi05@gmail.com"]
  info4: string[]=["Mudit Bajpai" , "Backend- Angular || React || Front-end Developer || PWA", "bajpai.mudit@gmail.com"]
  info5: string[]=["Sudeep Adhikari" , "Data Analytcs-AI/ML Developer", "skadhikari68@gmail.com"]
  info6: string[]=["Ritika Jaiswal" , "Operations-Software Product Tester | Agile | Selenium | Java | Cucumbe", "jaiwal.ritika@gmail.com"]


  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  getInfo4():string[]{
    return this.info4
  }
  getInfo5():string[]{
    return this.info5
  }
  getInfo6():string[]{
    return this.info6
  }
  
  
}