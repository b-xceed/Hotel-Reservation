import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {

  constructor() { }

  
   submit(){
     alert('Your Booking has been Confirmed.')
   }
  

  ngOnInit(): void {
  }
  
}
