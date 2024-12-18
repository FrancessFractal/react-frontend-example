import { useMutation } from "@tanstack/react-query";
import { ProductSort, useProductSearchState } from "../state/ProductSearchContext";

export const UseChangeSortMutationKey = () => ['useChangeSort']

export function useChangeSort() {
    const { changeSort } = useProductSearchState()

    return useMutation({
        mutationKey: UseChangeSortMutationKey(),
        mutationFn: async (value: ProductSort) => {
            changeSort(value)
        },
    })
}