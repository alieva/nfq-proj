import { ProductModel } from './product.model';
import { OrderModel } from './order.model';

export class ProductService {
    addOrder(product: ProductModel) {
        let orders: OrderModel[] = this.getOrders();
        if (orders === null) {
            orders = [];
        }
        const order = <OrderModel>{ product: product, timestamp: Date() };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }
    getOrders(): OrderModel[] {
        const orders = JSON.parse(localStorage.getItem('orders'));
        return orders;
    }
    clearOrders() {
        localStorage.removeItem('orders');
    }
    getProducts(): ProductModel[] {
        return [
            <ProductModel>{
                title: 'Samsung Galaxy Alpha',
                description: 'galaxy-alpha',
                price: 429.99,
                image: 'assets/images/galaxy-alpha.jpg',
            },
            <ProductModel>{
                title: 'iPhone 7',
                description: 'iphone-7',
                price: 699.99,
                image: 'assets/images/iphone7.jpg',
            },
            <ProductModel>{
                title: 'Sony Xperia Z3',
                description: 'sony-xperia-z3',
                price: 349.99,
                image: 'assets/images/sony-xperia-z3.jpg',
            }
        ];
    }
}
