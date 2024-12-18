import { createContext, useContext } from "react"

export const PRODUCT_SORT = {
    none: 'none',
    price_asc: 'price_asc',
    price_desc: 'price_desc'
} as const

export const AVAILABILITY_STATUS = {
    in_stock: 'In Stock',
    low_stock: 'Low Stock',
    out_of_stock: 'Out of Stock'
}

export type ProductSort = typeof PRODUCT_SORT[keyof typeof PRODUCT_SORT]

export type ProductSearchState = {
    sort: ProductSort,
    category: string,
    searchTerm: string,
    availability: string[],
    changeSort: (value: ProductSort) => void,
    changeCategoryFilter: (value: string) => void,
    changeSearchTerm: (value: string) => void,
    changeAvailabilityFilter: (value: string[]) => void,
}

export const ProductSearchContext = createContext<ProductSearchState>({
    sort: PRODUCT_SORT.none,
    category: 'all',
    searchTerm: '',
    availability: [],
    changeSort: () => { },
    changeCategoryFilter: () => {},
    changeSearchTerm: () => {},
    changeAvailabilityFilter: () => {}
})

export const useProductSearchState = () => useContext(ProductSearchContext)
