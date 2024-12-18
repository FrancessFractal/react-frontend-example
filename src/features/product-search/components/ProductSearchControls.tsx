import { Flex, Heading } from "@radix-ui/themes";
import { SortControl } from "./SortControl";
import { CategoryFilterControl } from "./CategoryFilterControl";
import { SearchTermControl } from "./SearchTermControl";
import { StatusFilterControl } from "./StatusFilterControl";

function ProductSearchControls() {

    return <Flex width='200px' direction='column' gap='3'>
        <Flex direction='column'>
            <Heading as='h2' size='2'>Search</Heading>
            <SearchTermControl />
        </Flex>
        <Flex direction='column'>
            <Heading as='h2' size='2'>Sort</Heading>
            <SortControl />
        </Flex>
        <Flex direction='column'>
            <Heading as='h2' size='2'>Category</Heading>
            <CategoryFilterControl />
        </Flex>
        <Flex direction='column'>
            <Heading as='h2' size='2'>Status</Heading>
            <StatusFilterControl />
        </Flex>
    </Flex>

}

export default ProductSearchControls
