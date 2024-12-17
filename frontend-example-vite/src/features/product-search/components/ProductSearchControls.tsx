import { Flex } from "@radix-ui/themes";
import { SortControl } from "./SortControl";
import { CategoryFilterControl } from "./CategoryFilterControl";
import { SearchTermControl } from "./SearchTermControl";

function ProductSearchControls() {

    return <Flex width='200px' direction='column'>
        <SearchTermControl />
        <SortControl />
        <CategoryFilterControl />
    </Flex>

}

export default ProductSearchControls
