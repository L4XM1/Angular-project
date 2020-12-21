import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Database } from '../database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RegisterComponent } from './register/register.component';



@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css'],
  providers: [ItemsService]

})
export class ItemPreviewComponent implements OnInit{


  shopItems; //tu ce vratiti podatke ona dole f-ja loadData()

  constructor(private baseConnection: ItemsService){}
  
  ngOnInit() {
    this.loadData();
  
  }
  loadData(){
    this.baseConnection.load()
    .subscribe(
      (loadedData) => this.shopItems = loadedData, 
      (error) => console.log(console.log(error)
      
      )
    )
  }
  
}
