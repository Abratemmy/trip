import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 

  authError: any; 

  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit() {
     this.auth.eventAuthError$.subscribe( data => {
       this.authError = data;
     })
  }


  createUser(frm){
    this.auth.createUser(frm.value);
  }
  

  // async register(){
  //   const {username, email, password, cpassword, number } = this
  //   if (password !== cpassword){
  //     return  console.error("password don't match")
  //   }
  //   try {
  //     const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     console.log(res)
  //     this.router.navigateByUrl('/tabs/tab1');  
  //   } 
  //    catch(error){
  //      this.eventAuthError.next(error)
  //      console.dir(error)
  //    }
      // this.eventAuthError.next(error);
    
        // {
      // .catch(error =>{
        // this.eventAuthError.next(error);
      // console.dir(error)

}
