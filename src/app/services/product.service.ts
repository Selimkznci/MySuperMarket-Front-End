import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44386/api/products/getall"
  constructor(private httpClient:HttpClient) { }//Http türünde nesne istiyorum

  getProducts():Observable<ListResponseModel<Product>>{//subcribe olunabilir response model doneceksin
    return this.httpClient // HttpClient İle İstek yap
    .get<ListResponseModel<Product>>(this.apiUrl)    //bir get isteği yap nereye apiUrlye gelen datayo productresponsemodel yap           //gelen datayı model reponseye map edeceksin
    // .subscribe((Response) => {    //subcribe ile çalıştır gelen response için ne yapayım
    //   this.products = Response.data //  responseden gelen data
    // })
  }
}
