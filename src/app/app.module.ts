import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { FormsModule} from '@angular/forms'
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,ProductComponent, ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  
  ],
  //providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
