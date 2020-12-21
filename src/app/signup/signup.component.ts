import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  signUp(form:NgForm){ 
      this.authService.registerUser(form.value.name, form.value.lastname, form.value.email, form.value.password)
  }
}//prosledjujem u zagradu name-ove inputa iz forme
