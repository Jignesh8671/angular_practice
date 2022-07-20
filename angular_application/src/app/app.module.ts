import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToSpaces } from 'src/Shared/Convert-to-spaces.pipe';
import { StarComponent } from 'src/Shared/star-component/star.component';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { ProductListComponent } from './products/products-list.component';
import {HttpClientModule}  from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
