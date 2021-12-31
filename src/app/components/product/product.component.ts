import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http' // Apı Bağlantısı İçin
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  dataLoaded = false
  filterText =""
  apiUrl = "https://localhost:44386/api/products/getall" // postman'den listelediğimiz adres


  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private cartService:CartService) { }//pasiften aktifleştirilmiş route mevcut route

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(Response => {
      this.products=Response.data
      this.dataLoaded=true
    })
  }

  getProductsByCategory(categoryId:Number){
    this.productService.getProductsByCategory(categoryId).subscribe(Response => {
      this.products=Response.data
      this.dataLoaded=true
    })
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete Eklendi",product.productName)
    this.cartService.addToCart(product)
  }
}
