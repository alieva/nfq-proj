import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
    products = [];
    term: string;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    addToOrders(item) {
        this.productService.addOrder(item);
    }
}
