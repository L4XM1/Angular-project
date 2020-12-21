import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Database } from '../database';
import { ItemsService } from '../services/items.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

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
