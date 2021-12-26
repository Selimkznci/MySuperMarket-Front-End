import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44386/api/"
  constructor(private httpClient:HttpClient) { }//Http türünde nesne istiyorum

  getProducts():Observable<ListResponseModel<Product>>{//subcribe olunabilir response model doneceksin
    let newPath=this.apiUrl+ "products/getall"
    return this.httpClient // HttpClient İle İstek yap
    .get<ListResponseModel<Product>>(newPath)
  }
  getProductsByCategory(categoryId:Number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+ "products/getByCategory?categoryId="+categoryId
    return this.httpClient
    .get<ListResponseModel<Product>>(newPath)}
}
