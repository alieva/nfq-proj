import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop.component';
import { OrdersComponent } from './orders.component';
import { ProductService } from './product.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';

const APP_ROUTES: Routes = [
  { path: '', component: ShopComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    OrdersComponent,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot()
  ],
  providers: [ProductService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
