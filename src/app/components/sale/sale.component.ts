import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SaleService } from 'src/app/services/sale.service';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sales:Sale[] = [];
  dataLoaded = false
  apiUrl = "https://localhost:44386/api/sales/getall"

  constructor(private salesService:SaleService) { }

  ngOnInit(): void {
    this.getSales()
  }

  getSales(){
    this.salesService.getSales().subscribe(Response => {
      this.sales=Response.data
      this.dataLoaded=true
    })
  }
}
