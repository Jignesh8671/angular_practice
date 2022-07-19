import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToSpaces } from 'src/Shared/Convert-to-spaces.pipe';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
