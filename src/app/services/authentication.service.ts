import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:string;

  constructor(private router:Router) { }

  registerUser(name:string, lastname:string, email:string, password:string){
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(
  (response) => {
    this.router.navigate(['/']);
   console.log('User Registered Successfully!')
  }
  )
  .catch(
    (error) => console.log(error)
    )
  }


  logUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      (response) => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (userToken:string) => this.token = userToken
        )
        console.log('User LogedIn Successfully!')
      }
      )
      .catch(
        (error) => console.log(error)
        )
  }

  registeredUser(){ //da li je u pitanju registovani korisnik koji se ulogovao, da li token 
return this.token != null; //postoji
  }
}
