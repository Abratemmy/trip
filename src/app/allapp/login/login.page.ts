import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth} from 'firebase/app';
import { BehaviorSubject } from 'rxjs'; 
import { error } from 'util';
import {  Router } from '@angular/router'
import { AuthService } from 'src/app/providers/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  
  authError: any;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();


  constructor( public router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.eventAuthError$.subscribe(data =>{ 
      this.authError =data;
    })
  }

  login(frm){
    this.auth.login(frm.value.email, frm.value.password);
  }
  // async login(){
  //   // here, i want to authenticate the user on the basis of there username and password
  //   const { email, password } = this
  //   try {
  //      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //      this.router.navigateByUrl('/tabs/tab1');
  //   } catch(err){
  //     this.eventAuthError.next(error)

  //     // this.authError="User not found, click on the signup button to register";

  //     console.dir(err)
  //     if (err.code ==="auth/operation-not-allowed"){
  //       console.log("user not found")
  //     }
  //   }
  // }

}
