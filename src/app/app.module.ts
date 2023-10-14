import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCatelogsComponent } from './components/product/all/product-catelogs/product-catelogs.component';
import { CatelogService } from './services/api/product/catelog.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductCatelogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CatelogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
