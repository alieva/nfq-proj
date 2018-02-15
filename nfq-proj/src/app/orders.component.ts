import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
    title = 'orders';
    orders = [];

    constructor(private productService: ProductService) {

    }

    ngOnInit() {
        this.orders = this.productService.getOrders();
    }
}
