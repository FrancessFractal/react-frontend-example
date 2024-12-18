export type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: 5,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    // dimensions: { }, // todo
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    // reviews: { }, // todo
    returnPolicy: string,
    minimumOrderQuantity: number,
    // meta: { }, // todo
    images: string[]
    thumbnail: string,
}