import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  baskets:Basket[] = [];
  dataLoaded = false
  apiUrl = "https://localhost:44386/api/baskets/getall"

  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.getBasket()
  }
  getBasket(){
    this.basketService.getBasket().subscribe(Response =>{
      this.baskets=Response.data
      this.dataLoaded=true
    })
  }
}
