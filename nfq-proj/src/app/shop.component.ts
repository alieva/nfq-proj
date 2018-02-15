import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
    title = 'shop';
    products = [];

    constructor(private productService: ProductService){

    }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }
}
