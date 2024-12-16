import { Product } from "../models/Product";
import { ProductCard } from "./ProductCard";
import { Grid } from "@radix-ui/themes";

export function ProductList ({ products }: {products: Product[]}) {
    return <Grid columns='3' gap='3' maxWidth='750px'>
        { products.map(product => <ProductCard key={product.id} product={product} />)}
    </Grid>
}