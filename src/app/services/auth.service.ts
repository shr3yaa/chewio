import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';


export interface UserInfo{
  username:string;
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName = new Subject();

  constructor(private firestore: AngularFirestore, private fAuth: AngularFireAuth) { }

  login(email, password) {
    this.fAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
     this.getCurrentUser();
      })
      .catch(err => {
 
      });
    }
  
 
  
  signup(email:string,password:string,username:string){
    this.fAuth.auth
    .createUserWithEmailAndPassword(email,password)
    .then(value=>{
    
    console.log(value.user.uid);
    this.firestore.collection('Users').doc(value.user.uid).set({username:username, email:email, password:password });
    
    
    })
    .catch(err=>{
    console.log('Something went wrong:',err.message);
    
    
    console.log(this.fAuth.auth.currentUser.uid);
    });
    

   }

  getCurrentUser(){

    if( this.fAuth.auth.currentUser != null)
    {
      console.log("here" + this.fAuth.auth.currentUser.uid)
  this.firestore.collection('Users').doc(this.fAuth.auth.currentUser.uid).valueChanges().subscribe((data:UserInfo[]) =>
   {
     console.log(data[0].username)
this.userName.next(data[0].username)
   });
   }
  }
   
   
  resetPassword(
    email:string
  ): Promise<void>{
return this.fAuth.auth.sendPasswordResetEmail(email);
  }
  logOutUser():Promise<void>{
    return this.fAuth.auth.signOut();
  }
}
