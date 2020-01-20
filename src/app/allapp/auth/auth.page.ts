import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

public logoRetina="assets/img/logo-02.png";

public activeSegment= "signin";

public userdata={
  password:'',
  email:'',
  firstname:'',
  lastname:'',
  mobileno:'',
};
public logindata={
  email:'',
  password:''
}

public passwordError= false;
public emailError = false;
public firstnameError= false;
public lastnameError = false;
public mobilenoError = false;

  constructor() { }

  ngOnInit() {
  }

  loginmember(){
    this.passwordError=!this.logindata['password'] ? true : false;
    this.emailError=!this.logindata['email'] ? true : false;
    console.log(this.logindata);
  }

  usermember(){ 
    this.passwordError=!this.userdata['password'] ? true : false;
    this.emailError=!this.userdata['email'] ? true : false;
    this.firstnameError=!this.userdata['firstname'] ? true : false;
    this.lastnameError=!this.userdata['lastname'] ? true : false;
    this.mobilenoError=!this.userdata['mobileno'] ? true : false;
    console.log(this.userdata);
  }

  signinSegment() {
    this.activeSegment= "signin";
  }
  signupSegment() {
    this.activeSegment= "signup";
  }
  

}
