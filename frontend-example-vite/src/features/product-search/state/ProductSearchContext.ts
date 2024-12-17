import { createContext, useContext } from "react"

export const PRODUCT_SORT = {
    none: 'none',
    price_asc: 'price_asc',
    price_desc: 'price_desc'
} as const

export type ProductSort = typeof PRODUCT_SORT[keyof typeof PRODUCT_SORT]

export type ProductSearchState = {
    sort: ProductSort,
    category: string,
    changeSort: (value: ProductSort) => void,
    changeCategoryFilter: (value: string) => void,
}

export const ProductSearchContext = createContext<ProductSearchState>({
    sort: PRODUCT_SORT.none,
    category: 'all',
    changeSort: () => { },
    changeCategoryFilter: () => {},
})

export const useProductSearchState = () => useContext(ProductSearchContext)
