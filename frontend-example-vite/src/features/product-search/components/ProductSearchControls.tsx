import { Flex } from "@radix-ui/themes";
import { SortControl } from "./SortControl";
import { CategoryFilterControl } from "./CategoryFilterControl";

function ProductSearchControls() {

    return <Flex width='200px' direction='column'>
        <SortControl />
        <CategoryFilterControl />
    </Flex>

}

export default ProductSearchControls
