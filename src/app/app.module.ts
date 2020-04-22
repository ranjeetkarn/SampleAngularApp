import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';

import { ProductService } from './products/product.service';
import {HttpClientModule} from '@angular/common/http'
import { RdaButtonModule } from './shared/components/rda-button/rda-button.module';
import {RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product.guard';



@NgModule({
  declarations: [AppComponent, ProductComponent, ProductFilterPipe, WelcomeComponent, ProductDetailComponent],

  imports: [BrowserModule, FormsModule, HttpClientModule, RdaButtonModule,
    RouterModule.forRoot([
      {path : 'product', component: ProductComponent},  
      {path : 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},    
      {path : 'welcome', component: WelcomeComponent},      
      
      {path : '', redirectTo: 'welcome', pathMatch:'full'},
      {path : '**', redirectTo: 'welcome', pathMatch:'full'}
      
      
    ])
  ],
  //providers: [ProductService],
  bootstrap: [AppComponent],

})
export class AppModule {}
