import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query"
import { Product } from "../../../models/Product"
import getProducts from "../../../api/getProducts"

export const UseGetProductsQueryKey = () => ['useGetProducts']

type Payload = { products: Product[], total: number, skip: number, limit: number }

export const useGetProducts = () => {
    return useInfiniteQuery<Payload, Error, InfiniteData<Payload, number>, QueryKey, number>({
        queryKey: UseGetProductsQueryKey(),
        queryFn: async ({ pageParam }) => {
            return getProducts({ start: pageParam });
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            const next = lastPage.skip + lastPage.products.length;

            if (next < lastPage.total) {
                return lastPage.skip + lastPage.products.length
            }
        }
    })
}
