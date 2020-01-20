import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { auth} from 'firebase/app';
import { FirebasedbService } from 'src/app/providers/firebasedb.service';
import { element } from 'protractor';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//  import Todo from "./firebase";

@Component({
  selector: 'app-fun',
  templateUrl: './fun.page.html',
  styleUrls: ['./fun.page.scss'],
  providers : [FirebasedbService]
})
export class FunPage implements OnInit {
 toDoListArray: any[];
  
  

  date = new Date();
  constructor(public router: Router, private firebasedb: FirebasedbService) { }

  ngOnInit() {
   this.firebasedb.getToDoList().snapshotChanges()
   .subscribe(item =>{
     this.toDoListArray = [];
     item.forEach(element => {
       var x = element.payload.toJSON();
       x["$key"] = element.key;
       this.toDoListArray.push(x);
     })
    //  sort array isChecked false
    this.toDoListArray.sort((a,b)=>{
      return a.isChecked - b.isChecked;
    })
   });
  }

  onAdd(itemTitle){
    if(itemTitle !== ""){
     this.firebasedb.addTitle(itemTitle.value);
     itemTitle.value = null;
     }
  }

  alterCheck($key: string,isChecked){
    this.firebasedb.checkOrUnCheckTitle($key, !isChecked)
  }
  onDelete($key : string){
    this.firebasedb.removeTitle($key)
  }
  
}
