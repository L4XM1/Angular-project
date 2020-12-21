import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-intro-shop',
  templateUrl: './intro-shop.component.html',
  styleUrls: ['./intro-shop.component.css'],
  providers: [ItemsService]
})
export class IntroShopComponent implements OnInit {
 
  loadShop(){
    this.router.navigate(['/shop']);
  }
  
  shopItems; //tu ce vratiti podatke, sve objekte, ona dole f-ja loadData()

  constructor(private baseConnection: ItemsService, private router: Router){}
  
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
