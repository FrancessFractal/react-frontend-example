import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query"
import { Product } from "../../../models/Product"
import getProducts from "../../../api/getProducts"
import { ProductSearchState, useProductSearchState } from "../state/ProductSearchContext"

export const UseGetProductsQueryKey = ({ sort, category }: ProductSearchState) => ['useGetProducts', sort, category]

type Payload = { products: Product[], total: number, skip: number, limit: number }

export const useGetProducts = () => {
    const productSearchState = useProductSearchState()

    return useInfiniteQuery<Payload, Error, InfiniteData<Payload, number>, QueryKey, number>({
        queryKey: UseGetProductsQueryKey(productSearchState),
        queryFn: async ({ pageParam }) => {
            return getProducts({ ...productSearchState, start: pageParam });
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
