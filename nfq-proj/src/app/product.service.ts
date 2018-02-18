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
                title: 'Galaxy Alpha',
                description: 'Lorem ipsum',
                price: 339.99,
                image: 'assets/images/galaxy-alpha.jpg',
            },
            <ProductModel>{
                title: 'HTC One',
                description: 'Lorem ipsum',
                price: 389.99,
                image: 'assets/images/htc-one.jpg',
            },
            <ProductModel>{
                title: 'LG V30',
                description: 'Lorem ipsum',
                price: 289.99,
                image: 'assets/images/lg-v30.jpg',
            },
            <ProductModel>{
                title: 'Nokia Lumia',
                description: 'Lorem ipsum',
                price: 389.99,
                image: 'assets/images/nokia-lumia.jpg',
            },
            <ProductModel>{
                title: 'Sony Xperia Z3',
                description: 'sony-xperia-z3',
                price: 349.99,
                image: 'assets/images/sony-xperia-z3.jpg',
            },
            <ProductModel>{
                title: 'Samsung Galaxy On7 Prime',
                description: 'Lorem ipsum',
                price: 629.99,
                image: 'assets/images/samsung-galaxy-on7.jpg',
            }
        ];
    }
}
