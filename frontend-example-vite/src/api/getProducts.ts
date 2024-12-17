import { includes } from "rambda";
import { PRODUCT_SORT, ProductSort } from "../features/product-search/state/ProductSearchContext";
import { Product } from "../models/Product";

const PAGE_SIZE = 12

const getProducts = async ({start, sort, category, searchTerm, availability }: {
    start: number, 
    sort: ProductSort,
    category: string,
    searchTerm: string,
    availability: string[],
}): Promise<{ products: Product[], filteredProducts: Product[], total: number, skip: number, limit: number }> => {

    const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchTerm}&limit=${PAGE_SIZE}&skip=${start}${ 
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

    // as explained in the readme, this would ideally be done server side.
    // this is a bit of a dirty hack to get the functionality in here.
    return {
        ...parsedResponse,
        filteredProducts: parsedResponse.products
            // availability filter
            .filter((product: Product) => {
                return availability.length === 0 ||
                    includes(product.availabilityStatus, availability)
            })
            // category filter
            .filter((product: Product) => {
                return category === 'all' || product.category === category
            })
    }
};

// todo: remove this later
// using this for now to add stuff to simulate slow api calls, errors, etc for testing
export default (args: { start: number, sort: ProductSort, category: string, searchTerm: string, availability: string[] }) => new Promise<{ products: Product[], filteredProducts: Product[], total: number, skip: number, limit: number }>((resolve) => {
    setTimeout(() => {
        resolve(getProducts(args))
    }, 1000)
});