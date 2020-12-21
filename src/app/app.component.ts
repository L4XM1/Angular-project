import { Component } from '@angular/core';
import firebase from 'firebase';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  
})
export class AppComponent {
  title = 'ZavrsniRad2';

  constructor(public authService:AuthenticationService){}

  ngOnInit():void{
    firebase.initializeApp( {apiKey: "AIzaSyCwBqeNlkhVzyuqxPaWpLa09IJx0InqJuQ",
    authDomain: "authentication-19f08.firebaseapp.com"})
  }

}

