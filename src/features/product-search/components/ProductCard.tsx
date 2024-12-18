import { Product } from "../../../models/Product";
import { Card, Flex, Heading, Inset, Text } from "@radix-ui/themes"
import { useGetCategories } from "../state-hooks/useGetCategories";
import { useMemo } from "react";
import { indexBy } from "rambda";

export function ProductCard({ product }: { product: Product }) {
    const { data } = useGetCategories();

    const categoriesBySlug = useMemo(() => {
        return data ? indexBy(category => category.slug, data) : {}
    }, [data])

    return <Card>
        <Flex direction='column' gap='3'>
            <Inset clip='padding-box'>
                <img src={product.thumbnail} 
                    alt={product.title}
                    style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 200,
                    }} />
            </Inset>
            <Flex direction='column'>
                <Heading as='h2' size='3'>{product.title}</Heading>
                <Text>{product.price}</Text>
                <Text>{product.availabilityStatus}</Text>
                <Text>{categoriesBySlug[product.category].name}</Text>
            </Flex>
        </Flex>
    </Card>
}