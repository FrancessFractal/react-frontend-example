import { Category } from "../models/Category"

const getCategories = async (): Promise<Category[]> => {
    const response = await fetch(`https://dummyjson.com/products/categories`)
    if (!response.ok) {
        throw Error('There was a problem loading the category list.')
    }

    /**
     * I would normally consider doing some type validation here to prevent strange errors 
     * if my assumption about the data type defined in Product.ts is incorrect, since
     * I don't control the api. But I'm considering it out of scope for this assignment
     */

    const parsedResponse = await response.json()
    return parsedResponse
}

export default getCategories;