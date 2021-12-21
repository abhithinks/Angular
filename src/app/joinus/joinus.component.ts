import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
 topics:any=['Nature Photography' , 'Wedding Photography' , 'Fashion Photography' , 'Wildlife Photography'];

 userModel = new User ('' , '', +91999999999 , '' , '', true  );
  
 constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }
 onSubmit() {
//    this.enrollmentService.enroll(this.userModel)
//    subscribe(
//      (     data: any) => console.log('Success!', data),
//      (     error: any) => console.log('Error!', error)
//    )
//  }
// }
// function subscribe(arg0: (data: any) => void, arg1: (error: any) => void) {
//   throw new Error('Function not implemented.');

  console.log(this.userModel);
 }
}

