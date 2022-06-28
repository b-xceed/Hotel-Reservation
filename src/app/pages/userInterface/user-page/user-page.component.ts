import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private dialogref:MatDialog ,private login:LoginService) { }

  openDialog(){
     this.dialogref.open(DialogComponentComponent)

  }

  ngOnInit(): void {
  }

}
