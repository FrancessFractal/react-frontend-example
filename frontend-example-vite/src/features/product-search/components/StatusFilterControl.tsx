import { CheckboxGroup } from "@radix-ui/themes";
import { AVAILABILITY_STATUS, useProductSearchState } from "../state/ProductSearchContext";

export function StatusFilterControl () {
    const { changeAvailabilityFilter } = useProductSearchState();

    return <CheckboxGroup.Root onValueChange={changeAvailabilityFilter}>
        <CheckboxGroup.Item value={AVAILABILITY_STATUS.in_stock}>In Stock</CheckboxGroup.Item>
        <CheckboxGroup.Item value={AVAILABILITY_STATUS.low_stock}>Low Stock</CheckboxGroup.Item>
        <CheckboxGroup.Item value={AVAILABILITY_STATUS.out_of_stock}>Out of Stock</CheckboxGroup.Item>
    </CheckboxGroup.Root>
}