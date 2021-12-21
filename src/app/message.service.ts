import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageAlert(){
    alert("Thanks For Subscribing to Us. Happy to serve you. We will get in touch with you shortly")
  }

  constructor() { }
}
