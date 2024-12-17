import { PRODUCT_SORT, ProductSort } from "../features/product-search/state/ProductSearchContext";
import { Product } from "../models/Product";

const PAGE_SIZE = 12

const getProducts = async ({start, sort }: { start: number, sort: ProductSort }): Promise<{ products: Product[], total: number, skip: number, limit: number }> => {
    const response = await fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${start}${ 
        sort === PRODUCT_SORT.price_asc ? '&sortBy=price&order=asc' 
        : sort === PRODUCT_SORT.price_desc ? '&sortBy=price&order=desc' 
        : ''
    }`)
    if (!response.ok) {
        throw Error('There was a problem loading the product list.')
    }

    /**
     * I would normally consider doing some type validation here to prevent strange errors 
     * if my assumption about the data type defined in Product.ts is incorrect, since
     * I don't control the api. But I'm considering it out of scope for this assignment
     */

    const parsedResponse = await response.json()
    return parsedResponse
};

// todo: remove this later
// using this for now to add stuff to simulate slow api calls, errors, etc for testing
export default (args: { start: number, sort: ProductSort }) => new Promise<{ products: Product[], total: number, skip: number, limit: number }>((resolve) => {
    setTimeout(() => {
        resolve(getProducts(args))
    }, 1000)
});