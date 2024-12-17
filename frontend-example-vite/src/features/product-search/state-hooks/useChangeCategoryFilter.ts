import { useMutation } from "@tanstack/react-query";
import { useProductSearchState } from "../state/ProductSearchContext";

export const UseChangeCategoryFilterMutationKey = () => ['useChangeSort']

export function useChangeCategoryFilter() {
    const { changeCategoryFilter } = useProductSearchState()

    return useMutation({
        mutationKey: UseChangeCategoryFilterMutationKey(),
        mutationFn: async (value: string) => {
            changeCategoryFilter(value)
        },
    })
}