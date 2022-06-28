import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredential=
  {
    username:'',
    password:'',
  };

  constructor( private login:LoginService) { }

  ngOnInit(): void {
  }
  
  submitForm()
  {

  console.log("login success");

  
   
  if((this.loginCredential.password.trim()=='' || this.loginCredential.password==null) && (this.loginCredential.username.trim()=='' || this.loginCredential.username==null))
    {
      alert("Please Enter both credential");
    }

    if(this.loginCredential.username.trim()=='' || this.loginCredential.username==null)

  {
     alert("Please enter correct Username");
     return;
  }
   
  if(this.loginCredential.password.trim()=='' || this.loginCredential.password==null)

  {
     alert("Please enter correct Password");
     return;
  }

   this.login.generateToken(this.loginCredential).subscribe(

     (data:any)=>{
        console.log('succes');
        console.log(data);
      
        this.login.loginSave(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.loginSave(user);

            console.log(user)
             if(this.loginCredential.password)
             {
               window.location.href = '/user-page';
             } else{
               alert("You are not registered");
             }

          }
        );

     },
      (error)=>{
        console.log("Error!!!");
        console.log(error);
        alert("Please enter correct detail");
        return;
        
      }
   )
  }
  
  


}
