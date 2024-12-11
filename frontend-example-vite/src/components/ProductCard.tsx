import { Product } from "../models/Product";

export function ProductCard({ product }: { product: Product }) {
    return <li>Product {product.title}</li>
}