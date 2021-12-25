import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrl = "https://localhost:44386/api/baskets/getall"
  constructor(private httpClient:HttpClient) { }

  getBasket():Observable<ListResponseModel<Basket>>{
    return this.httpClient
    .get<ListResponseModel<Basket>>(this.apiUrl)
  }
}
