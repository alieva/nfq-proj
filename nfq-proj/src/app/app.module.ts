import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop.component';
import { OrdersComponent } from './orders.component';
import { ProductService } from './product.service';

const APP_ROUTES: Routes = [
  { path: '', component: ShopComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    OrdersComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
