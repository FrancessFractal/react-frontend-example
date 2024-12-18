import { useMutation } from "@tanstack/react-query";
import { useProductSearchState } from "../state/ProductSearchContext";

export const UseChangeCategoryFilterMutationKey = () => ['useChangeSort']

export function useChangeCategoryFilter() {
    const { changeAvailabilityFilter } = useProductSearchState()

    return useMutation({
        mutationKey: UseChangeCategoryFilterMutationKey(),
        mutationFn: async (value: string[]) => {
            changeAvailabilityFilter(value)
        },
    })
}