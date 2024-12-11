import { useQuery } from "@tanstack/react-query"
import { Product } from "../models/Product"
import getProducts from "../api/getProducts"

export const UseGetProductsQueryKey = () => ['useGetProducts']

export const useGetProducts = () => {
    return useQuery<Product[]>({
        queryKey: UseGetProductsQueryKey(),
        queryFn: async () => {
            const response = await getProducts()
            return response.products
        }
    })
}
