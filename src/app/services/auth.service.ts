import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState:any=null;

  constructor(private afu:AngularFireAuth,private router:Router) { 
    this.afu.authState.subscribe((auth=>{
      this.authState=auth;
    }))
  }
   signupWithEmail(email:string,password:string){
     return this.afu.createUserWithEmailAndPassword(email,password).then((user=>{
  this.authState=user
})).catch(error=>{
  console.log(error)
  throwError
})
  }
}
