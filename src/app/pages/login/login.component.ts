import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEnvelope=faEnvelope;
  faLock=faLock;
  email="";
  password="";
 
  errorMessage="";
  error: { name: string, message: string } = { name: '', message: '' };
  
    constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

login(){
  this.clearErrorMessage();
   if(this.validateForm(this.email,this.password)){
   
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
       alert("login successful")
       this.email="";
       this.password="";
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
      }

}
validateForm(email:string,password:string){
  if(email.length===0){
  this.errorMessage="Please enter email"
  return false;
  }
  if(password.length===0){
    this.errorMessage="Please enter password"
    return false;
    }
     this.errorMessage="";
     return true;
   }
}
