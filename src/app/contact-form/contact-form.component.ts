import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 form: NgForm;
//  id: string = 'contact';



  constructor() { }

  ngOnInit(): void {

   
  }

  sendForm(form:NgForm){ //prosledjen NgForm objekat
    console.log(form.value)
  }


 
}
