import { MouseEventHandler, useCallback } from "react";
import { useGetProducts } from "../state-hooks/useGetProducts";
import { ProductCard } from "./ProductCard";
import { Button, Flex, Grid, Spinner } from "@radix-ui/themes";

export function ProductList () {
    const {
        data, 
        isError, 
        error, 
        isPending,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } =  useGetProducts();

    const handleLoadMore: MouseEventHandler = useCallback(() => fetchNextPage(), [fetchNextPage]);

    return isError ? error.message 
        : isPending ? <Spinner /> 
        : <Flex direction='column' gap='3'>
            <Grid columns='3' gap='3' maxWidth='750px'>
                {data.pages.map(
                    page => page.products.map(
                        product => <ProductCard key={product.id} product={product} />
                        )
                    )
                }
            </Grid>
            { hasNextPage &&
                <Button
                    onClick={handleLoadMore}
                    disabled={isFetchingNextPage}
                    >
                    {isFetchingNextPage ? <Spinner /> : 'Load More'}
                </Button>
            }
        </Flex>
}