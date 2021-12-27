import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // İstekte bulunduğumuz için  mecbur olacak ve imports  içerisinde de olacak
import { FormsModule } from '@angular/forms'; //Sonradan ekledik [(ngModel)] in çalışması için import edildi

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { SaleComponent } from './components/sale/sale.component';
import { BasketComponent } from './components/basket/basket.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    SaleComponent,
    BasketComponent,
    VatAddedPipe,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule //import ettik buraya yazdık
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
