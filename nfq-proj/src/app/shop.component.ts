import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';
import { ToasterService} from 'angular2-toaster';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
    products = [];
    term: string = "";

    constructor(private productService: ProductService, private toasterService: ToasterService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    addToOrders(item: ProductModel) {
        this.productService.addOrder(item);
        this.toasterService.pop('success', 'Success', 'You\'ve ordered '+item.title);
    }
}
