import { Product } from "../models/Product";
import { ProductCard } from "./ProductCard";

export function ProductList ({ products }: {products: Product[]}) {
    return <ul>
        { products.map(product => <ProductCard key={product.id} product={product} />)}
    </ul>
}