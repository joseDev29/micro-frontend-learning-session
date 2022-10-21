import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductService } from './services/products.service';
import { ProductCardComponent } from './components/product-card.component';

import { CutTextPipe } from './pipes/cut-text.pipe';

@NgModule({
  declarations: [
    CutTextPipe,
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
