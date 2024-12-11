import { Product } from "../models/Product";

const getProducts = async (): Promise<{ products: Product[], total: number, skip: number, limit: number }> => {
    const response = await fetch(`https://dummyjson.com/products`)
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
export default () => new Promise<{ products: Product[], total: number, skip: number, limit: number }>((resolve) => {
    setTimeout(() => {
        resolve(getProducts())
    }, 1000)
});