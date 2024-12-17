import { Flex } from "@radix-ui/themes";
import { SortControl } from "./SortControl";
import { CategoryFilterControl } from "./CategoryFilterControl";
import { SearchTermControl } from "./SearchTermControl";
import { StatusFilterControl } from "./StatusFilterControl";

function ProductSearchControls() {

    return <Flex width='200px' direction='column'>
        <SearchTermControl />
        <SortControl />
        <CategoryFilterControl />
        <StatusFilterControl />
    </Flex>

}

export default ProductSearchControls
