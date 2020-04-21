import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { RdaButtonModule } from './shared/components/rda-button/rda-button.module';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductFilterPipe],
  imports: [BrowserModule, FormsModule, RdaButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
