import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faEnvelope=faEnvelope;
  faLock=faLock;
email="";
password="";
message="";
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

  signup()
  {
    this.clearErrorMessage();
   if(this.validateForm(this.email,this.password)){
   
      this.authservice.signupWithEmail(this.email, this.password)
        .then(() => {
          this.message = "you are register with data on firbase"
         alert("your account is created successfully");
         this.email="";
         this.password="";
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/signup'])
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



