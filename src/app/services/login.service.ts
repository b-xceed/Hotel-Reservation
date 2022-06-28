import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  

  constructor( private http:HttpClient) { }

  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/current-user`)
  }

 public generateToken(loginCredential:any)
 {
      return this.http.post(`${baseUrl}/generate-token`,loginCredential);
 }

 public loginSave(token:any)
 {   
   localStorage.setItem("token",token);
   return true; 
 }

 public userLogin()
 {
   let tokenString=localStorage.getItem("token")

   if(tokenString==undefined || tokenString=='' || tokenString=="null")
   {
   return false;
   }else{
   return true;
   }
  }



  // public logout()
  // {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem('user');
  //   return true;
  // }

  public getToken()
  {
   return localStorage.getItem('token');
  }

  // public setUser(user:any)
  // {
  //   localStorage.setItem("user",JSON.stringify(user));
  // }

  // public getUser()
  // {
  //   let UserString=localStorage.getItem("user");

  //   if(UserString!=null)
  //   {
  //   return JSON.parse(UserString);
  //   }else
  //   {
  //    this.logout;
  //    return null;
  //    }
  // }
   
  
}
