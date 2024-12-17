import { useQuery } from "@tanstack/react-query"
import getCategories from "../../../api/getCategories"
import { Category } from "../../../models/Category"

export const UseGetCategoriesQueryKey = () => ['useGetCategories']

export const useGetCategories= () => {

    return useQuery<Category[]>({
        queryKey: UseGetCategoriesQueryKey(),
        queryFn: async () => {
            return getCategories();
        },
    })
}
