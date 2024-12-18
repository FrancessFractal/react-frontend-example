import { Select } from "@radix-ui/themes";
import { useChangeSort } from "../state-hooks/useChangeSort";

export function SortControl() {
    const { mutate: handleChangeSort } = useChangeSort();

    return <Select.Root defaultValue="none" onValueChange={handleChangeSort}>
        <Select.Trigger />
        <Select.Content>
            <Select.Item value='none'>No sorting</Select.Item>
            <Select.Item value='price_asc'>Price ascending</Select.Item>
            <Select.Item value='price_desc'>Price descending</Select.Item>
        </Select.Content>
    </Select.Root>
}