import { Select, Spinner } from "@radix-ui/themes";
import { useGetCategories } from "../state-hooks/useGetCategories"
import { useChangeCategoryFilter } from "../state-hooks/useChangeCategoryFilter";

export function CategoryFilterControl () {
    const { data, isError, error, isPending } = useGetCategories();
    const { mutate: handleCategoryChange } = useChangeCategoryFilter()

    return isPending ? <Spinner /> 
        : isError ? error.message 
        : <Select.Root defaultValue="all" onValueChange={handleCategoryChange}>
            <Select.Trigger />
            <Select.Content>
                <Select.Item value='all'>All categories</Select.Item>
                { data.map(category => {
                    return <Select.Item key={category.slug} value={category.slug}>{category.name}</Select.Item>
                })}
            </Select.Content>
        </Select.Root>
}