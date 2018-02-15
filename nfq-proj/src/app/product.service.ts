import { ProductModel } from './product.model';
// Store to local storage

export class ProductService {
    getProducts(): ProductModel[] {
        return [
            <ProductModel> {
                title: 'Samsung Galaxy Alpha',
                description: 'galaxy-alpha',
                price: 429.99,
                image: '',
            },
            <ProductModel> {
                title: 'iPhone 7',
                description: 'iphone-7',
                price: 699.99,
                image: '',
            },
            <ProductModel> {
                title: 'Sony Xperia Z3',
                description: 'sony-xperia-z3',
                price: 349.99,
                image: '',
            }
        ];
    }
}
