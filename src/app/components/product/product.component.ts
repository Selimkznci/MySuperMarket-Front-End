import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http' // Apı Bağlantısı İçin
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  dataLoaded = false
  apiUrl = "https://localhost:44386/api/products/getall" // postman'den listelediğimiz adres
  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   success:true,
  //   message:""
  //}

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(Response => {
      this.products=Response.data
      this.dataLoaded=true
    })
  }
}
