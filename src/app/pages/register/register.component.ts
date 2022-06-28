import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngForm=new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(5)])
  })

 

  constructor(private userService:UserService) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    adharNo:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {
  }

   formSubmit(){
     console.log(this.user);

     this.userService.addUser(this.user).subscribe(
       (data)=>{
                  console.log(data);
                  Swal.fire('Success','Successfully Register','success')
                },
       (error)=>{
                 console.log(error);
                 alert('something went wrong');
                }

     )
   }

}
