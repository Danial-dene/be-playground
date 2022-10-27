import { ProductVariation } from 'src/products-variation/entities/productVariation.entity';
export declare class Products {
    id: number;
    name: string;
    price: number;
    items: ProductVariation[];
}
