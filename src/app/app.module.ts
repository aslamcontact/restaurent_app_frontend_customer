import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { GlobalMenuComponent } from './customer/global-menu/global-menu.component';
import { TableMenuComponent } from './customer/table-menu/table-menu.component';
import { ProductCategoryItensComponent } from './customer/global-menu/product-category-items/product-category-itens.component';
import { ProductCategoryItemsService } from './services/customer/global-menu/product-category-items.service';
@NgModule({
  declarations: [
    AppComponent,
    GlobalMenuComponent,
    TableMenuComponent,
    ProductCategoryItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,MatButtonModule                //cart
  ],
  providers: [ProductCategoryItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
