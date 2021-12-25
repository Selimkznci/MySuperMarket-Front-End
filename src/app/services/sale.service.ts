import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  apiUrl = "https://localhost:44386/api/sales/getall"
  constructor(private httpClient:HttpClient) { }

  getSales():Observable<ListResponseModel<Sale>>{
    return this.httpClient
    .get<ListResponseModel<Sale>>(this.apiUrl)
  }
}
