import { useMutation } from "@tanstack/react-query";
import { useProductSearchState } from "../state/ProductSearchContext";

export const UseChangeSearchTermMutationKey = () => ['useChangeSort']

export function useChangeSearchTerm() {
    const { changeSearchTerm } = useProductSearchState()

    return useMutation({
        mutationKey: UseChangeSearchTermMutationKey(),
        mutationFn: async (value: string) => {
            changeSearchTerm(value)
        },
    })
}