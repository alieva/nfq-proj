import { ProductModel } from './product.model';

export interface OrderModel {
    product: ProductModel;
    timestamp: string;
}
