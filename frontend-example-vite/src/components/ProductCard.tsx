import { Product } from "../models/Product";
import { Card, Flex, Heading, Inset, Text } from "@radix-ui/themes"

export function ProductCard({ product }: { product: Product }) {
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
                <Text>{product.category}</Text>
            </Flex>
        </Flex>
    </Card>
}