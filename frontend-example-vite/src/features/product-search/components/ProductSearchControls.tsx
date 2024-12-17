import { Flex, Select } from "@radix-ui/themes";
import { useChangeSort } from "../state-hooks/useChangeSort";

function ProductSearchControls() {
    const { mutate: handleChangeSort } = useChangeSort();

    return <Flex width='200px' direction='column'>
        <Select.Root defaultValue="none" onValueChange={handleChangeSort}>
            <Select.Trigger />
            <Select.Content>
                <Select.Item value='none'>No sorting</Select.Item>
                <Select.Item value='price_asc'>Price ascending</Select.Item>
                <Select.Item value='price_desc'>Price descending</Select.Item>
            </Select.Content>
        </Select.Root>
    </Flex>

}

export default ProductSearchControls
